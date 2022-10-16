import { DateFormatValidator } from "../utils/DateFormatValidator.js";
import { NumberValidator } from "../utils/NumberValidator.js";

class UserService {
  #users;

  constructor(users) {
    this.#users = users;
  }

  /**
   * Returns an array of user objects that have been filtered
   * by the provided criteria.
   * @param {*} isActive boolean
   * @param {*} balance number or numeric string
   * @param {*} dateString string representing a date
   * @returns array of users
   */
  filteredUsersBy(isActive, balance, dateString) {
    NumberValidator.validate(balance);
    DateFormatValidator.validate(dateString);

    var filteredUsers = [];

    this.#users.forEach((user) => {
      var balanceValue = Number(user.balance.replace(/[^0-9.-]+/g, ""));
      var regDate = new Date(user.registered);

      if (
        user.isActive == Boolean(isActive) &&
        balanceValue > Number(balance) &&
        new Date(regDate) > new Date(dateString)
      ) {
        filteredUsers.push(user);
      }
    });

    return filteredUsers;
  }
}

export { UserService };
