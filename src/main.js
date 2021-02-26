import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as run from "./run";
import * as create from "./create";
import * as init from "./init";

const main = async (argv) => {
  let parsedArgs = yargs(argv.slice(2))
    .usage("Usage: $0 <command> [options]")
    .command(run)
    .command(init)
    .command(create)

    .example("$0 run ~/DynamoDb")
    .example("$0 init random-table")
    .example("$0 create random-table.json -r ap-south-1")

    .help("h")
    .alias("h", "help").argv;
};

export { main };
