const { DynamoDBClient, CreateTableCommand,PutItemCommand, GetItemCommand } = require("@aws-sdk/client-dynamodb");

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

async function addMovie() {
    const params = {
      TableName: "Movies",
      Item: {
        title: { S: "title" },
        rtScore: { S: "Number" },
      },
    };
    
    const command = new PutItemCommand(params);
    const response = await client.send(command);
    console.log(response);
}

// Get item in table
async function getItem() {
    const params = {
        TableName: "Movies",
        Key: {
            title: { S: "title" },
        },
    };
    const command = new GetItemCommand(params);
    const response = await client.send(command);
    console.log(response.Item);
}


//addMovie();
//getItem();