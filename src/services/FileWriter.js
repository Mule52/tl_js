import fs from "fs";
import { DirectoryPathValidator as validator } from "../utils/DirectoryPathValidator.js";

class FileWriter {
  #writeFilePath;

  constructor(writeDirectory = ".", writeFileName = "out.json") {
    writeDirectory = validator.getValidPath(writeDirectory);
    this.#writeFilePath = writeDirectory + "/" + writeFileName;
  }

  /**
   * Creates a new empty file using the file name
   * and path passed into the construtor.
   */
  async createEmptyFile() {
    try {
      fs.writeFile(this.#writeFilePath, "", () => {});
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Appends content to the file that was created
   * in the constructor.
   * @param {*} content
   */
  async writeJson(content) {
    try {
      fs.appendFile(
        this.#writeFilePath,
        JSON.stringify(content, null, 2),
        () => {}
      );
    } catch (err) {
      console.log(err);
    }
  }
}

export { FileWriter };
