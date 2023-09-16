const { DynamoDBClient, CreateTableCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({ region: "us-east-1", profile: "mtwdeveloper" });

async function createTable() {
    const params = {
      TableName: "Movies",
      KeySchema: [{ AttributeName: "title", KeyType: "HASH" }],
      AttributeDefinitions: [{ AttributeName: "title", AttributeType: "S" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    };
    const command = new CreateTableCommand(params);
    const response = await client.send(command);
    console.log(response);
}

//createTable();
