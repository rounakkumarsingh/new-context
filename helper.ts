import os from "node:os";
import prettier from "prettier";
import { requireOptional, sample } from "./utils";
import chalk from "chalk";
import path from "node:path";
import fs from "node:fs";
import AFFIRMATIONS from "./affirmations";

export function getConfig() {
	const home = os.homedir();
	const currentPath = process.cwd();

	const defaults = {
		lang: "js",
		dir: "src/contexts",
	};

	const globalOverrides = requireOptional(
		`/${home}/.new-context-config.json`
	);

	const localOverrides = requireOptional(
		`/${currentPath}/.new-context-config.json`
	);
	return Object.assign({}, defaults, globalOverrides, localOverrides);
}

export const buildPrettifier = async () => {
	let config = await prettier.resolveConfig(process.cwd());

	config = config || {
		semi: true,
		singleQuote: true,
		trailingComma: "es5",
	};

	config.parser = config.parser || "babel";

	return (text: string) => prettier.format(text, config);
};

const colors: Record<string, [number, number, number]> = {
	red: [216, 16, 16],
	green: [142, 215, 0],
	blue: [0, 186, 255],
	gold: [255, 204, 0],
	mediumGray: [128, 128, 128],
	darkGray: [90, 90, 90],
};

const langNames: Record<string, string> = {
	js: "JavaScript",
	ts: "TypeScript",
};

const logContextLang = (selected: string) =>
	["js", "ts"]
		.map((option) =>
			option === selected
				? `${chalk.bold.rgb(...colors.blue)(langNames[option as keyof typeof langNames])}`
				: `${chalk.rgb(...colors.darkGray)(langNames[option as keyof typeof langNames])}`
		)
		.join("  ");

export const logIntro = ({
	name,
	dir,
	lang,
}: {
	name: string;
	dir: string;
	lang: string;
}) => {
	console.info("\n");
	console.info(
		`✨  Creating the ${chalk.bold.rgb(...colors.gold)(name)} context ✨`
	);
	console.info("\n");

	const pathString = chalk.bold.rgb(...colors.blue)(dir);
	const langString = logContextLang(lang);

	console.info(`Directory:  ${pathString}`);
	console.info(`Language:   ${langString}`);
	console.info(
		chalk.rgb(...colors.darkGray)(
			"========================================="
		)
	);

	console.info("\n");
};

export const createParentDirectoryIfNecessary = async (
	dir: string
): Promise<void> => {
	const fullPathToParentDir = path.resolve(dir);

	if (!fs.existsSync(fullPathToParentDir)) {
		fs.mkdirSync(dir);
	}
};

export const logItemCompletion = (successText: string) => {
	const checkmark = chalk.rgb(...colors.green)("✓");
	console.info(`${checkmark} ${successText}`);
};

// export const logConclusion = () => {
// 	console.info("\n");
// 	console.info(chalk.bold.rgb(...colors.green)("Context created!"));
// 	console.info(chalk.rgb(...colors.mediumGray)(sample(AFFIRMATIONS)));
// 	console.info("\n");
// };

export const logError = (error: unknown) => {
	console.info("\n");
	console.info(chalk.bold.rgb(...colors.red)("Error creating context."));
	console.info(chalk.rgb(...colors.red)(error));
	console.info("\n");
};

export const logConclusion = () => {
	console.info("\n");
	console.info(chalk.bold.rgb(...colors.green)("Context created!"));
	console.info(chalk.rgb(...colors.mediumGray)(sample(AFFIRMATIONS)));
	console.info("\n");
};
