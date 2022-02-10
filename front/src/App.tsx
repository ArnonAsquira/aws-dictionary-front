import { useState } from "react";
import EntriesList from "./components/EntriesList";
import EntryDisplay from "./components/EntryDisplay";
import SearchBar from "./components/SearchBar";
import SearchByPos from "./components/SearchByPos";
import { IEntryItem } from "./types/db";
import { SpeechPart } from "./types/speechPart";

const App = () => {
  const [entryList, setEntryList] = useState<IEntryItem[]>([]);
  const [pos, setPos] = useState<SpeechPart | undefined>();
  const [entry, setEntry] = useState<IEntryItem | undefined>(undefined);
  const [openEntryDialog, setOpenEntryDialog] = useState<boolean>(false);

  return (
    <div>
      <div>
        <SearchBar setEntryList={setEntryList} pos={pos} />
        <SearchByPos setPos={setPos} />
      </div>
      <EntriesList
        entries={entryList}
        setEntry={setEntry}
        openEntry={setOpenEntryDialog}
      />
      <EntryDisplay
        entry={entry}
        open={openEntryDialog}
        setOpen={setOpenEntryDialog}
      />
    </div>
  );
};

export default App;
