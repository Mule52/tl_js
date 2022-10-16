
Please review the instructions below to complete the assignment. When complete, please share a private GitHub repository with the user [recursivefunk](https://github.com/recursivefunk), containing your solution.

## Instructions

There are 6 `json` files, each of which contains 100 people records. In the language of your choice (although, JavaScript is preferred), please sift through the records in each of the files and distill the total records (across _all_ files) down to people who:

- Are `active`
- Have a balance exceeding $2000
- Have a `registered` timestamp _after_ January 1st, 2016

Write the records (in `json` format) which meet the above criteria to a new file. Assume your scaling upper-bound is a single process on a single machine.

## Evaluation Criteria

- Efficiency
  - Memory consumption
  - Number of concurrently open files
- Reusability
- Testing
  - Are there tests?
  - Which test cases are account for?
- Documentation
  - How do I run this thing?
  - Are there code comments and are they useful?

### Write Up
Imagine you have unlimted time and budget, how would you approach this solution differently if there were 500,000 files, each containing an indeterminate number of records? Assume the same efficiency evaluation criteria.


You're free to make any assumptions you like outside of what I've outlined and would be helpful if you'd document them. If you require external dependencies, they should **not** be submitted with solution - an install and/or compilation step should included as part of the documentation.
