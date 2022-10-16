import fs from "fs";
import { DirectoryPathValidator as validator } from "../utils/DirectoryPathValidator.js";

class FileReader {
  #readDir;
  #filePrefix;

  constructor(directoryPath = ".", filePrefix = "records") {
    directoryPath = validator.getValidPath(directoryPath);
    this.#readDir = directoryPath;
    this.#filePrefix = filePrefix;
  }

  /**
   * Reads the file and returns a string of its contents. This
   * call wraps the Node.js readFile in a promise to await
   * its completion.
   * @param {*} fileName
   * @returns
   */
  async #readFileAsync(fileName) {
    try {
      let data = await fs.promises.readFile(
        this.#readDir + "/" + fileName,
        "utf8"
      );
      return Buffer.from(data).toString();
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Reads the contents of a directory, filtering to JSON files with
   * a specific prefix passed into the constructor. This call wraps
   * the Node.js readdir in a promise to know when all files have
   * been read.
   * @returns
   */
  async readFilesAsync() {
    try {
      let files = await fs.promises.readdir(this.#readDir);
      files = files.filter((file) => this.#isSpecificFile(file));
      return await Promise.all(files.map((file) => this.#readFileAsync(file)));
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Filter out specific files based on the file prefix and the JSON file type.
   * @param {*} fileName string name of the file
   * @returns true or false
   */
  #isSpecificFile(fileName) {
    let parts = fileName.split(".");
    return parts[1] === "json" && parts[0].startsWith(this.#filePrefix);
  }
}

export { FileReader };
