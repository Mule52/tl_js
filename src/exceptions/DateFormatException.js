/**
 * Exception class representing an invalid date format in JavaScript.
 */
class DateFormatException extends Error {
  constructor(dateString) {
    super(
      `${dateString} is not a valid JavaScript date string format. JavaScript considers multiple formats ` +
        `to be valid, examples: yyyy-mm-dd and dd/mm/yyyy. Research valid JavaScript data formats.`
    );
  }
}
export { DateFormatException };
