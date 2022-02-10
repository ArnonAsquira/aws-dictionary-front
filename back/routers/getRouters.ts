import express from "express";
const router = express();
import AWS from "aws-sdk";
import {
  getEntriesByWord,
  getEntriesbyPos,
} from "../middlewares/queryMiddlewares";
import { IEntryItem } from "../types/dbItems";
import { isString, isUndefined } from "../predicators/normalTypes";

const ddb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

router.get("/part/:pos", getEntriesbyPos, (req, res) => {
  const entries: IEntryItem[] = res.locals.entries;
  const letterQuery = req.query.letter;
  const randomNumber = Math.floor(Math.random() * 15);
  if (
    isUndefined(letterQuery) ||
    !isString(letterQuery) ||
    letterQuery.length > 1
  ) {
    return res.send(entries[randomNumber]);
  } else {
    return res.send(
      entries.filter((entry) => entry.word.includes(letterQuery))[randomNumber]
    );
  }
});

router.get("/:word", getEntriesByWord, (req, res) => {
  res.send(res.locals.entries);
});

router.get("/:word/:pos", getEntriesByWord, (req, res) => {
  const entriesByPos = res.locals.entries.filter((entry: any) =>
    entry.speachType.includes(req.params.pos)
  );
  res.send(entriesByPos);
});

export default router;
