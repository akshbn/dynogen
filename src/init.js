import table from "./utils/table.json";
import fs from "fs";
import emoji from "emojic";
import display from "./utils/display";

const command = "init <tablename>";

const describe =
  "Initializes Table config and creates a table json.";

const handler = (argv) => {
  try {
    let initTable = Object.assign({}, table);
    initTable.TableName = argv.tablename;
    fs.writeFileSync(`${argv.tablename}.json`, JSON.stringify(initTable));
    display(
      `${emoji.whiteCheckMark} ${argv.tablename}.json file created.\nEdit the contents of this file and pass it to create command to create the table`
    );
  } catch (error) {
    display("Something went wrong. Check the error below");
    console.error(error);
  }
};

export { command, describe, handler };
