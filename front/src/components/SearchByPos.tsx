import { Fragment, Dispatch } from "react";
import { isSpeechPart } from "../predicators/speechPart";
import { SpeechPart } from "../types/speechPart";

interface SearchByPosTypes {
  setPos: Dispatch<React.SetStateAction<SpeechPart | undefined>>;
}

const SearchByPos = ({ setPos }: SearchByPosTypes) => {
  const handleSelect = (target: HTMLSelectElement) => {
    const pos = target.value;
    if (!isSpeechPart(pos)) {
      return setPos(undefined);
    }
    setPos(pos);
  };

  return (
    <Fragment>
      <select onChange={(e) => handleSelect(e.target)}>
        <option value="">specify a speach part</option>
        <option value="n">Noun</option>
        <option value="adv"> Adverb</option>
        <option value="adj">Adjective</option>
        <option value="v">Verb</option>
      </select>
    </Fragment>
  );
};

export default SearchByPos;
