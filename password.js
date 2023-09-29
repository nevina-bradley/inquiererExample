import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: 'password',
      name: 'secret',
      message: 'Tell me a secret',
    },
  ])
  .then(answers => {
    // Displaying the password for debug purposes only.
    console.info('Answer:', answers.secret);
  });