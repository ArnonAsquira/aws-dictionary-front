import { IEntryItem } from "../types/db";
import { Dispatch } from "react";

interface EntryDisplayProps {
  entry: IEntryItem | undefined;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const EntryDisplay = ({ entry, open, setOpen }: EntryDisplayProps) => {
  if (entry === undefined) return null;
  return (
    <dialog className="entry-display" open={open}>
      <h1>{entry.word}</h1>
      <div className="pso">{entry.speachType}</div>
      <div className="def">
        <span style={{ color: "InfoText" }}>defintion:</span> {entry.definition}
      </div>
      <button onClick={() => setOpen(false)}>close</button>
    </dialog>
  );
};

export default EntryDisplay;
