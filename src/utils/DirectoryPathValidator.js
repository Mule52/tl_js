class DirectoryPathValidator {
  /**
   * Returns a string representing the directory path
   * to be formatted without a trailing /.
   * @param {*} dirPath String representing a directory path
   * @returns String
   */
  static getValidPath(dirPath) {
    if (dirPath.endsWith("/")) {
      dirPath = dirPath.slice(0, -1);
    }

    if (dirPath.length < 1) {
      // value was not provided or value was /
      dirPath = ".";
    }

    return dirPath;
  }
}

export { DirectoryPathValidator };
