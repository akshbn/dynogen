import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";
import emoji from "emojic";
import fs from "fs";

import { awsRegions } from "./utils/constants";
import display from "./utils/display";

const command = "create <path> [region]";

const describe =
  "Starts local instance of dynamodb present at given path. Needs dynamodb jar file present.";

const builder = {
  region: {
    describe: "The aws region in which the table has to be created",
    alias: "r",
    default: "us-east-1",
  },
  profile: {
    describe: "Use the given profile info when executing commands",
    alias: "P"
  }
};

const handler = async (argv) => {
  try {
    if (!awsRegions.includes(argv.region)) {
      let err = new Error();
      err.name = "InvalidAwsRegion";
      throw err;
    }

    if(argv.profile) {
      process.env.AWS_PROFILE = argv.profile;
    }

    let client;
    if (argv.l) {
      client = new DynamoDBClient({ endpoint: "http://localhost:8000" });
    } else {
      client = new DynamoDBClient({ region: argv.region });
    }

    display(`Processing ${argv.path}`);
    let tableConfig = fs.readFileSync(argv.path).toString();
    let config = JSON.parse(tableConfig);

    display(`${emoji.informationSource} Creating table in region ${argv.region}`);
    let resp = await client.send(new CreateTableCommand(config));
    display(`${emoji.whiteCheckMark} Table created. See the details below`);
    console.log(resp);
  } catch (error) {
    if (error.name === "InvalidAwsRegion") {
      display(`${emoji.x} The region you passed is an invalid aws region`);
    } else {
      display(
        `${emoji.warning}   Oops, check the error log below. ${emoji.warning}`
      );
      console.error(error);
    }
  }
};

export { command, describe, builder, handler };
