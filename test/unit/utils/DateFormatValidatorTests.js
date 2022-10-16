import { describe, expect, test } from "@jest/globals";
import { DateFormatException } from "../../../src/exceptions/DateFormatException.js";
import { DateFormatValidator } from "../../../src/utils/DateFormatValidator.js";

describe("DateFormatValidator tests", () => {
  test("When dateString is valid mm/dd/yyyy, then it should return true", () => {
    let isValid = DateFormatValidator.validate("01/01/2016");
    expect(isValid).toBe(true);
  });

  test("When dateString is valid yyyy-mm-dd, then it should return true", () => {
    let isValid = DateFormatValidator.validate("2022-01-01");
    expect(isValid).toBe(true);
  });

  test("When dateString is invalid 01/01/2022x, then it should return false", () => {
    expect(() => {
      DateFormatValidator.validate("01/01/2022x");
    }).toThrow(DateFormatException);
  });

  test("When dateString is empty, then it should return false", () => {
    expect(() => {
      DateFormatValidator.validate("");
    }).toThrow(DateFormatException);
  });

  test("When dateString is null, then it should return false", () => {
    expect(() => {
      DateFormatValidator.validate();
    }).toThrow(DateFormatException);
  });
});
