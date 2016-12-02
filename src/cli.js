const program = require('commander')
const version = require('./../package.json').version
const chalk = require('chalk')

program
  .version(version)

// program
//   .command('init')
//   .description('Initialise a new blitzen project')
//   .action(init)

if (!process.argv.slice(2).length) {
  program.outputHelp(chalk.cyan)
}

program.parse(process.argv)
