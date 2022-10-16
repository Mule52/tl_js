import { describe, expect, test } from "@jest/globals";
import { DateFormatException } from "../../../src/exceptions/DateFormatException";
import { UserService } from "../../../src/services/UserService";

let testUsers = [
  {
    _id: "634c4daa59d51076a1ac3657",
    isActive: true,
    balance: "$3,415.53",
    registered: "Wednesday, July 12, 2017 2:07 AM",
  },
  {
    _id: "634c4daa5e6f082e48afc838",
    isActive: false,
    balance: "$1,031.83",
    registered: "Saturday, December 28, 2019 3:12 PM",
  },
  {
    _id: "634c4daaa5e9247b690395bf",
    isActive: true,
    balance: "$2,845.03",
    registered: "Thursday, March 31, 2016 2:03 PM",
  },
  {
    _id: "634c4daae1df4c5d384870e9",
    isActive: true,
    balance: "$2,290.86",
    registered: "Wednesday, May 11, 2014 9:05 AM",
  },
  {
    _id: "634c4daa4313153b2554352f",
    isActive: false,
    balance: "$2,433.18",
    registered: "Friday, November 16, 2018 8:11 PM",
  },
  {
    _id: "634c4daafa37fd41cbb07b2c",
    isActive: false,
    balance: "$3,437.14",
    registered: "Friday, December 05, 2014 9:12 AM",
  },
  {
    _id: "634c4daa9061dc30a6c70658",
    isActive: true,
    balance: "$3,303.50",
    registered: "Sunday, February 02, 2020 6:02 AM",
  },
  {
    _id: "634c4daa9bb8294943a177a8",
    isActive: true,
    balance: "$3,447.59",
    registered: "Wednesday, February 19, 2020 5:02 PM",
  },
  {
    _id: "634c4daa718671860aa530e0",
    isActive: true,
    balance: "$3,503.14",
    registered: "Tuesday, June 30, 2015 10:06 PM",
  },
  {
    _id: "634c4daa48557379892dd2b0",
    isActive: true,
    balance: "$4,387.41",
    registered: "Monday, July 16, 2018 12:07 PM",
  },
];

let service;

beforeEach(() => {
  service = new UserService(testUsers);
});

describe("DirectoryPathValidator tests", () => {
  test("When balance is 2000 and date is 01/01/2016, then 5 users should be returned", () => {
    const results = service.filteredUsersBy(true, 2000, "01/01/2016");
    expect(results.length).toBe(5);
  });

  test("When balance is 4000 and date is 01/01/20186, then 1 user should be returned", () => {
    const results = service.filteredUsersBy(true, 4000, "01/01/2018");
    expect(results.length).toBe(1);
  });

  test("When isActive is false and balance is 1000 and date is 01/01/2017, then 2 users should be returned", () => {
    const results = service.filteredUsersBy(false, 1000, "01/01/2017");
    expect(results.length).toBe(2);
  });

  test("When date is invalid 01/01/2022X, then iit should throw a DateFormatException", () => {
    expect(() => {
      service.filteredUsersBy(true, 2000, "01/01/2022X");
    }).toThrow(DateFormatException);
  });

  test("When balance is 2,000, then it should throw an Error", () => {
    expect(() => {
      service.filteredUsersBy(true, "2,000", "01/01/2022");
    }).toThrow(Error);
  });
});
