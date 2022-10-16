import { DateFormatException } from "../exceptions/DateFormatException.js";

class DateFormatValidator {
  /**
   * Returns true if the dateString is a valid JavaScript date string format,
   * otherwise it throws a DateFormatException.
   * @param {*} dateString String representing a valid JavaScript date.
   * @returns true or throws a DateFormatException error.
   */
  static validate(dateString = "") {
    // Date format from input = DD, MMMM dd, YYYY h:MM A
    let date = new Date(dateString);
    let isValid = date instanceof Date && !isNaN(date);
    if (!isValid) {
      throw new DateFormatException(dateString);
    }
    return true;
  }
}

export { DateFormatValidator };
