import { spawn } from "child_process";

const command = "run <path>";

const describe =
  "Starts local instance of dynamodb present at given directory path. Needs dynamodb jar file present.";

const handler = (argv) => {
  let path = argv.path;
  let localLib = `-Djava.library.path=${path}/DynamoDBLocal_lib`;
  let localJar = `${path}/DynamoDBLocal.jar`;
  let db = spawn("java", [localLib, "-jar", localJar, "-sharedDb"]);
  console.log("executing run now");
  db.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  db.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  db.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });

  db.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

export { command, describe, handler };
