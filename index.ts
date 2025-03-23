#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

import { program } from "commander";

import { version } from "./package.json";
import {
	buildPrettifier,
	createParentDirectoryIfNecessary,
	getConfig,
	logConclusion,
	logError,
	logIntro,
	logItemCompletion,
} from "./helper";
import {
	mkdirPromise,
	readFilePromiseRelative,
	writeFilePromise,
} from "./utils";

const config = getConfig();
let prettify: (text: string) => Promise<string>;

const initialize = async () => {
	prettify = await buildPrettifier();

	program
		.version(version)
		.arguments("<contextName>")
		.option(
			"-l, --lang <language>",
			'Which language to use (default: "js")',
			config.lang
		)
		.option(
			"-d, --dir <pathToDirectory>",
			'Path to the "contexts" directory (default: "src/contexts")',
			config.dir
		)
		.parse(process.argv);

	const [contextName] = program.args;

	const options = program.opts();
	const fileExtension = options.lang === "js" ? "jsx" : "tsx";
	const indexExtension = options.lang === "js" ? "js" : "ts";

	const templateDir = `./templates/${options.lang.toUpperCase()}`;
	const contextTemplate = `${templateDir}/context.${indexExtension}`;
	const providerTemplate = `${templateDir}/Provider.${fileExtension}`;

	const contextDir = `${options.dir}/${`${contextName.split("Context")[0]}Provider`}`;
	const contextFilePath = `${contextDir}/${contextName}.${indexExtension}`;
	const providerFilePath = `${contextDir}/${`${contextName.split("Context")[0]}Provider`}.${fileExtension}`;
	const indexPath = `${contextDir}/index.${indexExtension}`;

	const indexTemplate = await prettify(`\
		export { default as ${contextName} } from './${contextName}';
		export { default } from './${`${contextName.split("Context")[0]}Provider`}';
		`);
	logIntro({
		name: contextName,
		dir: contextDir,
		lang: options.lang,
	});

	if (!contextName) {
		logError(
			"Sorry, you need to specify a name for your context like this: new-context <name>"
		);
		process.exit(0);
	}

	await createParentDirectoryIfNecessary(options.dir);
	console.log({
		contextDir,
		templateDir,
		contextTemplate,
		providerTemplate,
		contextFilePath,
		providerFilePath,
		indexPath,
		indexTemplate,
		contextName,
		dir: options.dir,
	});

	// Check to see if this context has already been created
	const fullPathToContextDir = path.resolve(contextDir);
	if (fs.existsSync(fullPathToContextDir)) {
		logError(
			`Looks like this context already exists! There's already a context at ${contextDir}.\nPlease delete this directory and try again.`
		);
		process.exit(0);
	}

	try {
		await mkdirPromise(contextDir);
		logItemCompletion("Directory created.");

		// Create context file
		let contextContent = await readFilePromiseRelative(contextTemplate);
		contextContent = contextContent.replace(/CONTEXT_NAME/g, contextName);
		await writeFilePromise(contextFilePath, await prettify(contextContent));
		logItemCompletion("Context built and saved to disk.");

		// Create provider file
		let providerContent = await readFilePromiseRelative(providerTemplate);
		providerContent = providerContent.replace(/CONTEXT_NAME/g, contextName);
		providerContent = providerContent.replace(
			/CONTEXT_PROVIDER/g,
			`${contextName.split("Context")[0]}Provider`
		);
		await writeFilePromise(
			providerFilePath,
			await prettify(providerContent)
		);
		logItemCompletion("Provider built and saved to disk.");

		// Create index file
		await writeFilePromise(indexPath, indexTemplate);
		logItemCompletion("Index file built and saved to disk.");

		logConclusion();
	} catch (err) {
		console.error(err);
	}
};

initialize().catch(console.error);
