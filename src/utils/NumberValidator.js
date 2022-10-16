class NumberValidator {
  /**
   * Returns true if the number is a valid JavaScript number,
   * otherwise it throws an error.
   * @param {*} number Number or string representing a number.
   * @returns true or throws an Error.
   */
  static validate(number) {
    if (isNaN(Number(number))) {
      throw new Error(
        `${number} is not in a valid numeric format. It may not contain ` +
          `string characters like command and currency symbols.`
      );
    }
    return true;
  }
}

export { NumberValidator };
