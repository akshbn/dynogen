# Dynogen

`dynogen` is a tool to create and manage Dynamodb tables locally and on aws.


## How to install

`npm i -g dynogen`

Check if installation was successful by running:

`dynogen --version`

If you see a version number then the installation was successful.

Follow this [link](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html) to setup a local instance of DynamoDb.

------

## Commands

`dynogen` offers a shorthand alias `dg`. You can use this interchangably in any of the below commands.

**Note**: Currently dynogen uses the default profile present in ~/.aws/credentials file.

### Run

`dynogen run <path to directory of local dynamodb installation>`

Use this command to run the local instance of dynamodb.

### Init

`dynogen init <tablename>`

Creates a config template for a dynamodb table. Edit the created file with relevant details for table creation.

### Create

`dynogen create <path to table config>`

Creates a table with the provided config. By default the region is set to `us-east-1`.
In order to change region pass it along with `-r` flag.

If you want to create a table in the local dynamodb instance use `-l` flag.

Example: `dynogen create <path to table config> -l`

----

## More functionality on the way





