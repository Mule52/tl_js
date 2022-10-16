import { describe, expect, test } from "@jest/globals";
import { DirectoryPathValidator } from "../../../src/utils/DirectoryPathValidator";

beforeEach(() => {
  // initializeCityDatabase();
});

afterEach(() => {
  // clearCityDatabase();
});

describe("DirectoryPathValidator tests", () => {
  test("When dirPath is empty, then it should return .", () => {
    let result = DirectoryPathValidator.getValidPath("");
    expect(result).toBe(".");
  });

  test("When dirPath is /, then it should return .", () => {
    let result = DirectoryPathValidator.getValidPath("/");
    expect(result).toBe(".");
  });

  test("When dirPath is ./some/path/, then it should return ./some/path", () => {
    let result = DirectoryPathValidator.getValidPath("./some/path/");
    expect(result).toBe("./some/path");
  });
});
