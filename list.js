import inquirer from "inquirer";

inquirer
  .prompt([
    {
        type: 'list',
        name: 'reptile',
        message: 'What is your favorite reptile?',
        choices: ['alligator', 'crocodile'],
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.reptile);
  });