import { useRef } from "react";
import { randomWord, word } from "../utils/SearchWord";
import { Dispatch } from "react";
import { IEntryItem } from "../types/db";
import { SpeechPart } from "../types/speechPart";
import Swal from "sweetalert2";

interface searchBarProps {
  setEntryList: Dispatch<React.SetStateAction<IEntryItem[]>>;
  pos: SpeechPart | undefined;
}

const SearchBar = ({ setEntryList, pos }: searchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    if (inputRef.current === null) return;
    let entryList;
    if (inputRef.current.value === "") {
      entryList = await randomWord(pos);
    } else {
      entryList = await word(inputRef.current.value, pos);
    }
    if (entryList === undefined) return;
    if (entryList.length < 1) {
      return Swal.fire(
        `no entries found for "${inputRef.current.value}", this may be due to the insane amount of time it took to insert all the words to dynamoDb`
      );
    }
    setEntryList(entryList);
  };
  return (
    <form>
      <input ref={inputRef} placeholder="no text => random word" />
      <button type="button" onClick={() => handleSearch()}>
        search word
      </button>
    </form>
  );
};

export default SearchBar;
