import { describe, expect, spyOn, test } from "@jest/globals";
import { FileReader } from "../../../src/services/FileReader.js";

beforeEach(() => {});

describe("FileReader tests", () => {
  test("When readFilesAsync is called with the project root directory and the records prefix, then 6 files should be returned", async () => {
    let reader = new FileReader(".", "records");
    let files = await reader.readFilesAsync();
    expect(files.length).toBe(6);
  });

  test("When readFilesAsync is called with the project root directory and an unknown prefix, then 0 files should be returned", async () => {
    let reader = new FileReader(".", "abc");
    let files = await reader.readFilesAsync();
    expect(files.length).toBe(0);
  });
});
