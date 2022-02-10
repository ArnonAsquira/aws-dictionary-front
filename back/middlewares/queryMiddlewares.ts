import { RequestHandler } from "express";
import AWS, { DataBrew } from "aws-sdk";

const ddb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

const getEntriesByWord: RequestHandler = async (req, res, next) => {
  try {
    const items = await ddb
      .query({
        TableName: "dictionary",
        KeyConditionExpression: "#word = :word",
        ExpressionAttributeNames: { "#word": "word" },
        ExpressionAttributeValues: {
          ":word": req.params.word,
        },
      })
      .promise();
    res.locals.entries = items.Items;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err });
  }
};

const getEntriesbyPos: RequestHandler = async (req, res, next) => {
  try {
    const entries = await ddb
      .scan({
        TableName: "dictionary",
        FilterExpression: "contains(speachType, :pos)",
        ExpressionAttributeValues: { ":pos": req.params.pos },
      })
      .promise();
    if (entries.Items === undefined) throw "bad query";
    res.locals.entries = entries.Items;
    next();
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getEntriesByWord, getEntriesbyPos };
