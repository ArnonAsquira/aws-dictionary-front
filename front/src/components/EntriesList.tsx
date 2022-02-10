import { IEntryItem } from "../types/db";
import { Dispatch } from "react";

interface EntriesListProps {
  entries: IEntryItem[];
  setEntry: Dispatch<React.SetStateAction<IEntryItem | undefined>>;
  openEntry: Dispatch<React.SetStateAction<boolean>>;
}

const EntriesList = ({ entries, setEntry, openEntry }: EntriesListProps) => {
  const chooseEntry = (entry: IEntryItem) => {
    setEntry(entry);
    openEntry(true);
  };
  return (
    <ul className="entries-list">
      {entries.map((entry, i) => (
        <li
          key={i}
          style={{ cursor: "pointer" }}
          onClick={() => chooseEntry(entry)}
        >
          {entry.word} {entry.speachType}
        </li>
      ))}
    </ul>
  );
};

export default EntriesList;
