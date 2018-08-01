## function-practice
An exercise to practice function syntax.


### Getting Started
- [Fork](https://help.github.com/articles/fork-a-repo/) this repository.
- Clone your fork to your local machine: `$ git clone https://github.com/<YOUR_GITHUB_USERNAME>/function-practice.git`
- Change Directory into the newly cloned function-practice project: `$ cd function-practice`
- Open the project in your favorite text editor, and begin editing the .js files located in `/app`.

### Testing your solutions
- Each problem has a corresponding `.test.js` file located in the `/tests` directory.
- This project utilizes the [jest](https://jestjs.io/) library, which must be installed in order for the tests to work! (Remember `npm`?)
- In order to install all of the project's dependencies, simply run `$ npm install`
  - This looks at your `package.json` file and then reachs to the npm registry to pull in any "dependencies" of the project.
- Run the corresponding test for each problem in your terminal after writing your solution: `$ npm run test FUNCTION_NAME`
  - An example of this would be: `$ npm run test sum`
  - This will automatically run all of the tests I have written surrounding the `sum` method, and supply you with details on whether or not your solution passes the tests cases.\
- After completing all of the problems, you should be able to run `$ npm run test` and see lots of Green :)

### Description
- There are (currently) 6 `.js` files in the `/app` directory that each contain a unique problem
- Each problem will require you to create a new function, and return a value based on the parameters.

### Objective
- To reinforce your understanding of function syntax, and expose you to working with unit tests.

