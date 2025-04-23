import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useState } from "react";

function Editor({ currentNote, updateNote }) {
  const [preview, setPreview] = useState("edit"); // 'edit' | 'preview' | 'live'

  // Custom button to toggle preview/edit
  const ToggleButton = () => {
    const toggle = () => {
      setPreview((prev) => (prev === "edit" ? "preview" : "edit"));
    };

    return (
    <>
        <button onClick={toggle}>{preview === "edit" ? "Preview" : "Edit"}</button>
    </>
    );
  };

  const PreviewToggle = {
    name: "preview",
    keyCommand: "preview",
    value: "preview",
    icon: <ToggleButton />,
  };

  // Custom disabled button based on preview state
  const DisableButton = () => (
    <button disabled={preview === "preview"}>
      <svg viewBox="0 0 16 16" width="12px" height="12px">
        <path
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm.9 13H7v-1.8h1.9V13Zm-.1-3.6v.5H7.1v-.6c.2-2.1 2-1.9 1.9-3.2.1-.7-.3-1.1-1-1.1-.8 0-1.2.7-1.2 1.6H5c0-1.7 1.2-3 2.9-3 2.3 0 3 1.4 3 2.3.1 2.3-1.9 2-2.1 3.5Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );

  const DisableCustom = {
    name: "disable",
    keyCommand: "disable",
    value: "disable",
    icon: <DisableButton />,
  };

  return <div className="editor">
    <MDEditor
        value={currentNote.body}
        preview={preview}
        onChange={updateNote}
        extraCommands={[PreviewToggle, DisableCustom]}
    />
  </div>;
}

export default Editor;
