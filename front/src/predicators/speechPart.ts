import { SpeechPart } from "../types/speechPart";

const isSpeechPart = (value: any): value is SpeechPart => {
  if (value === "v" || value === "n" || value === "adj" || value === "adv") {
    return true;
  }
  return false;
};

export { isSpeechPart };
