import { DataProcessor } from "./src/services/DataProcessor.js";
import * as dotenv from "dotenv";
import { DateFormatValidator } from "./src/utils/DateFormatValidator.js";
import { NumberValidator } from "./src/utils/NumberValidator.js";

// Read in environment variables from .env
dotenv.config();

// Edit local environment variables in the .env file in this project.
/**
 * Name of the directory relative to this project.
 * Examples:
 *  "." is the root of this project.
 *  "./tempFiles" if you created a tempFiles directory in this project.
 */
const inputDirectory = process.env.JSON_USER_PARSER_INPUT_DIRECTORY || ".";

/**
 * The string prefix of the JSON files to parse within the readDirectory.
 */
const inputFilePrefix =
  process.env.JSON_USER_PARSER_INPUT_FILE_PREFIX || "records";

/**
 * Name of the directory relative to this project.
 * Examples:
 *  "." is the root of this project.
 *  "./out" if you created an out directory in this project.
 */
const outputDirectory = process.env.JSON_USER_PARSER_OUTPUT_DIRECTORY || ".";

/**
 * The string name of the JSON output file to create
 * in the writeDirectory. The filtered JSON users will be
 * written to this file. If this file exists, it will be
 * overwritten.
 */
const outputFile =
  process.env.JSON_USER_PARSER_OUTPUT_FILE_NAME || "filteredRecords.json";

/**
 * The isActive value used to filter users.
 */
const isActive = process.env.JSON_USER_PARSER_USER_ISACTIVE || true;

/**
 * The dollar amount used to filter users.
 */
const balance = process.env.JSON_USER_PARSER_USER_BALANCE || 2000;

/**
 * The date string used to filter users.
 */
const dateString = process.env.JSON_USER_PARSER_USER_DATESTRING || "01/01/2016";

// Save start time
const startTime = new Date();
console.log("Beging file processing.");

// Create the DataProcessor, passing in env variables.
let dataProcessor = new DataProcessor(
  inputDirectory,
  inputFilePrefix,
  outputDirectory,
  outputFile
);

// Process all the files, filter users, and write output as JSON.
await dataProcessor.filterUsersToFile(isActive, balance, dateString);

// Log duration in seconds
var endTime = new Date();
console.log(
  "File processing completed in",
  Math.abs(endTime.getTime() - startTime.getTime()) / 1000,
  "seconds."
);
