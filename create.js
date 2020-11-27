import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      // The attributes of the item to be created
      week: "28Nov20", // The id of the author
      fighter: 'Anderson Silva', // A unique uuid
      odds: data.odds, // Parsed from request body
      payout: data.payout, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});