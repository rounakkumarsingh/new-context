import fs from "node:fs";
import path from "node:path";

export const requireOptional = (filePath: string) => {
	try {
		return require(filePath);
	} catch (e: unknown) {
		// We want to ignore 'MODULE_NOT_FOUND' errors, since all that means is that
		// the user has not set up a global overrides file.
		// All other errors should be thrown as expected.
		if (
			e instanceof Error &&
			(e as NodeJS.ErrnoException).code !== "MODULE_NOT_FOUND"
		) {
			throw e;
		}
	}
};

export const mkdirPromise = (dirPath: string) =>
	new Promise<void>((resolve, reject) => {
		fs.mkdir(dirPath, (err) => {
			err ? reject(err) : resolve();
		});
	});

export const readFilePromise = (fileLocation: string) =>
	new Promise<string>((resolve, reject) => {
		fs.readFile(fileLocation, "utf-8", (err, text) => {
			err ? reject(err) : resolve(text);
		});
	});

export const writeFilePromise = (fileLocation: string, fileContent: string) =>
	new Promise<void>((resolve, reject) => {
		fs.writeFile(fileLocation, fileContent, "utf-8", (err) => {
			err ? reject(err) : resolve();
		});
	});

export const readFilePromiseRelative = (fileLocation: string) =>
	readFilePromise(path.join(__dirname, fileLocation));

export const sample = <T>(arr: Array<T>): T => {
	return arr[Math.floor(Math.random() * arr.length)];
};
