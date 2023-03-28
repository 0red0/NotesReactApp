import { NoteData } from "./App";
import { NoteForm } from "./NoteForm";

type NewNoteProps = {
   onSubmit: (data: NoteData) => void;
};

export function NewNote({ onSubmit }: NewNoteProps) {
   return (
      <>
         <h2 className="mb-4">Hello New Note</h2>
         <NoteForm onSubmit={onSubmit} />
      </>
   );
}
