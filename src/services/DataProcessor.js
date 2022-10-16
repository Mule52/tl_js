import { FileReader } from "../services/FileReader.js";
import { FileWriter } from "../services/FileWriter.js";
import { UserService } from "../services/UserService.js";

class DataProcessor {
  #directoryToRead;
  #readFilePrefix;
  #directoryToWrite;
  #outputFile;

  constructor(
    readDir = ".",
    readFilePrefix = "records",
    writeDir = ".",
    outputFileName = "out.json"
  ) {
    this.#directoryToRead = readDir;
    this.#readFilePrefix = readFilePrefix;
    this.#directoryToWrite = writeDir;
    this.#outputFile = outputFileName;
  }

  /**
   * Reads the file system for JSON records, filters those records,
   * and writes the filtered output as JSON to a file.
   */
  async filterUsersToFile(isActive, balance, dateString) {
    try {
      // Create a new file, overwrite if exists.
      let fileWriter = new FileWriter(this.#directoryToWrite, this.#outputFile);
      fileWriter.createEmptyFile();

      // get all files in directory
      let fileReader = new FileReader(
        this.#directoryToRead,
        this.#readFilePrefix
      );
      let files = await fileReader.readFilesAsync();

      // Filter the files to create users.
      let filteredUsers = [];

      files.forEach((file) => {
        let users = JSON.parse(file);
        filteredUsers = filteredUsers.concat(
          new UserService(users).filteredUsersBy(
            isActive,
            balance,
            new Date(dateString)
          )
        );
      });

      // Write JSON output
      await fileWriter.writeJson(filteredUsers);
    } catch (error) {
      console.error(error);
    }
  }
}

export { DataProcessor };
