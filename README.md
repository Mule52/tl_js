<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Homework Assignment - Filter Users

This project is a Node.js app developed using [ES modules](https://nodejs.org/api/esm.html). I am not providing further details because it is a homework assignment and it should remain confidential.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With and Requirements

This application was build for Node.js. For building and running the application you need the following installed on your target machine.

- <a href="https://nodejs.org/en/">Node.js version 14 or later</a>
- <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm latest</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get started, clone the project repository to you local machine. Node.js and npm need to be installed.

Open a terminal from the root of this project. From a terminal, run the following commands.

Edit the **.env** file that exists in the rool of this project. Read through the .env file and update the configurable settings. These settings will be read in by the application and the output results will change based on the valued provided.

```
# Set environment variables

# Name of the directory relative to this project.
JSON_USER_PARSER_INPUT_DIRECTORY="."

# The string prefix of the JSON files to parse within the readDirectory.
JSON_USER_PARSER_INPUT_FILE_PREFIX="records"

# Name of the directory relative to this project.
JSON_USER_PARSER_OUTPUT_DIRECTORY="."

# The string name of the JSON output file to create in the writeDirectory.
JSON_USER_PARSER_OUTPUT_FILE_NAME="filteredRecords.json"

# The isActive value to filter users.
JSON_USER_PARSER_USER_ISACTIVE=true

# The dollar amount to filter users.
JSON_USER_PARSER_USER_BALANCE=2000

# The timestamp to filter users.
JSON_USER_PARSER_USER_DATESTRING="01/01/2016"
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Running the application locally

There are multiple ways to run the application. The details below will refer to running the application via terminal.

From terminal, run the following to start the application after following all previous steps in this document.

This will download all supporting packages required to run the application.

```
npm install
```

Start the application. The application will require 6 record JSON files to process and will output to one JSON file.
From terminal, start the application.

```
npm run start
```

An alternative way to start the application from terminal.

```
node index.js
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing the application locally

From the root of the project in terminal, run the following.

```
npm run test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Write Up

I initially solved this problem using Node.js’s readdir and readfile. I realized I needed promises in order await the result of all asynchronous reads. I needed to know when all files were
read in order to process them. I created functionality to wrap those calls in promises. After I got that working, I then rewrote the app using ES Modules, because I wanted something that
felt better to test. I am used to Java and TypeScript, and there was something more comfortable with testing functions within classes. I took my one file index.js and modularized it into
the project it is in this repo. Perhaps all of it is overkill, but I think it is more testable.

If I had unlimited time and budget, and if there were 500K files, each containing any number of records, there are several approaches to break this larger problem up into more manageable chunks.

The result of this program is to consolidate six JSON files into one file that shows the filtered users. If we have 500K file, with a varying number of users in each, then I would want to ask
the end user how they expect to view this data. It would help to understand the end user of this system and ask questions about usability and availability. A file that large or larger may need
to be distributed across servers, or maybe we need to determine a UI for the user to read the file where they pull chunks of data to append to what they are reading.

This is hypothetical. Assume there are 500K JSON files in one directory.

I would containerize this app and get it running as a GCP Cloud Run service (or equivalent in AWS or Azure). I could scale those service out to N number to accommodate multiple requests being
sent to it. I would scale this app horizontally to N number of running instances. I would break down the larger problem into smaller pieces.

I would create a program to read the files from the directory and write them to a GCP Pub/Sub topic. I would not want a topic to have 500K files, so I there would need to be some logic to send
files to multiple topics. It is possible to have 500K, but maybe we can have multiple topics to distribute the load. We could distribute the files based on a modulus using the suffix index of
the file. For example, when the program reads in records1.json, it can write all records that end in 1 to a topic specific for 1, and then apply the same logic for 2, 3, etc.

Performance testing would need to be done to determine how many files can be written to topics and processed by microservices to meet what acceptance criteria. Maybe we discover we need to
have 100 topics and not just 10, or maybe more.

Once the data is in a topic, I would create push subscriptions to send those files to multiple Cloud Run services to process the data, as my index.js has done in this project. If we need to
merge all outputted JSON files into one large file (for all 500K files), then we may need to discuss alternatives.

There are more solutions. I think it would be useful to discuss this approach and alternatives in person. There are many questions to ask to help achieve a solution that works for the customer.
It is a fun problem to consider.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

I time-boxed this project. These are my considerations what is next after receiving feedback.

- More tests, for all classes.
- Dockerfile to containerize the app.
- Terraform to deploy the container to a Cloud Run service or similar.
- Improve the README.md.
- Add changelog.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
