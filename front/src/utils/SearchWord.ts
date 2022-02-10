import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../constants/general";
import { IEntryItem } from "../types/db";
import { SpeechPart } from "../types/speechPart";

const word = async (
  word: string,
  pos: SpeechPart | undefined
): Promise<IEntryItem[] | void> => {
  try {
    if (pos === undefined) {
      const { data }: { data: IEntryItem[] } = await axios.get(
        `${baseUrl}/get/${word}`
      );
      return data;
    }
    const { data }: { data: IEntryItem[] } = await axios.get(
      `${baseUrl}/get/${word}/${pos}`
    );
    return data;
  } catch (err) {
    console.log(err);
    Swal.fire("something went wrong");
  }
};

const randomWord = async (
  pos: SpeechPart | undefined
): Promise<IEntryItem[] | void> => {
  if (pos === undefined) {
    Swal.fire("please provide a part of speech for random word search");
    return;
  }
  try {
    const { data } = await axios.get(`${baseUrl}/get/part/${pos}`);
    console.log(data);
    return [data];
  } catch (err) {
    console.log(err);
    Swal.fire("something went wrong");
  }
};

export { word, randomWord };
