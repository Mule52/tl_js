import { describe, expect, test } from "@jest/globals";
import { DataProcessor } from "../../../src/services/DataProcessor";
import { FileWriter } from "../../../src/services/FileWriter";
import { FileReader } from "../../../src/services/FileReader";

jest.mock("../../../src/services/FileWriter");
jest.mock("../../../src/services/FileReader");
jest.mock("../../../src/services/UserService");

beforeEach(() => {});

// TODO: need more tests

describe("DataProcessor tests", () => {
  test("when filterUsersToFile is called, it should process files", async () => {
    let processor = new DataProcessor(".", "records", ".", "test_output.json");

    const createEmptyFileSpy = jest
      .spyOn(FileWriter.prototype, "createEmptyFile")
      .mockImplementation(async () => {});

    const readFilesAsyncSpy = jest
      .spyOn(FileReader.prototype, "readFilesAsync")
      .mockImplementation(async () => {
        return [
          '{"_id":"1", "isActive": true, "balance":"$3,240.82", "registered": "Monday, July 03, 2017 2:07 PM"}',
          '{"_id":"2", "isActive": true, "balance":"$2,240.82", "registered": "Thursday, January 24, 2019 5:01 PM"}',
          '{"_id":"3", "isActive": true, "balance":"$4,240.82", "registered": "Wednesday, December 27, 2017 3:12 PM"}',
        ];
      });

    processor.filterUsersToFile(true, 2000, "01/01/2022");

    expect(createEmptyFileSpy).toHaveBeenCalled();
  });
});
