import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Split from "react-split";
import Sidebar from "./component/Sidebar";

function App(){
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);
  const [currentActiveNoteId, setCurrentActiveNoteId] = useState(notes[0]?.id || null);

  useEffect(() => {
    localStorage.setItem("notes",JSON.stringify(notes));
  }, [notes])

  function handleCreate(){
    const newData = {
      id: nanoid(),
      body: "Enter title here \n\n",
    };
    setNotes((prevNotes) => [...prevNotes, newData])
    setCurrentActiveNoteId(newData.id);
  };
  // console.log(currentActiveNoteId);

  function handleToDelete(id){
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }
  
  return <>
      {
        notes.length > 0 ? (
          <Split sizes={[15,85]} direction="horizontal" className="split">
            <Sidebar notes={notes} create={handleCreate} setCurrentActiveNoteId={setCurrentActiveNoteId} handleToDelete={handleToDelete} currentActiveNoteId={currentActiveNoteId}/>
            <div>main</div>
          </Split>
        ) : (
          <div className="empty-notes w-[100vw] h-[100vh] flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-5">You have no notes</h1>
            <button className="py-3 px-10 bg-[#3c91e6] text-white text-xl rounded-3xl font-medium cursor-pointer" onClick={handleCreate}>Create one now</button>
          </div>
        )
      }
  </>;
}

export default App;