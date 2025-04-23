import { IoMdAdd } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
function Sidebar({ notes,create,setCurrentActiveNoteId,handleToDelete,currentActiveNoteId }){

    const renderNotesList = notes.map((note) =>
        <li onClick={()=> setCurrentActiveNoteId(note.id)} className={`flex items-center gap-10 text-xl w-full py-3 px-4 cursor-pointer ${note.id === currentActiveNoteId ? "active-note" : ""}`} key={note.id}><span>{note.body.split("\n")[0]}</span>
        <button className="trash" onClick={(e) => {e.stopPropagation(); handleToDelete(note.id);}}><FaTrash /></button>
        </li>
    )

    return (
        <section className="sidebar min-h-screen">
            <div className="sidebar__header flex p-4 gap-4 justify-center flex-wrap">
                <h1 className="text-3xl font-mono font-bold">NOTES</h1>
                <button className="bg-[#3c91e6] px-2 py-1 rounded-full text-xl text-white cursor-pointer" onClick={create}><IoMdAdd /></ button>
            </div>
            <div className="notes">
                <ul className="notes_list flex flex-col items-center">{renderNotesList}</ul>
            </div>
        </section>
    )
}

export default Sidebar;