import { useState } from "react";
import { Plus } from "lucide-react";

interface Note {
  text: string;
  timeStamp: Date;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState<string>("");

  function addNote(e: React.FormEvent) {
    e.preventDefault();
    if (!noteText.trim()) return;

    setNotes((prev) => [
      ...prev,
      {
        text: noteText,
        timeStamp: new Date(),
      },
    ]);
  }

  return (
    <main className="bg-gradient-to-br from-[#14181C] to-[#0E1114] text-white py-6 px-10 rounded-3xl">
      <div>
        <h1 className="text-2xl font-medium">Quick Notes</h1>
        <p className="text-gray-400 font-medium">{notes.length} notes saved</p>
      </div>

      <form onSubmit={addNote}>
        <textarea
          name="note"
          value={noteText}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setNoteText(e.target.value);
          }}
          className="h-[200px] w-full bg-[#15191D] focus:bg-black focus:ring-1 focus:ring-green-500/40 focus:outline-none rounded-3xl my-4 p-2 text-md"
        ></textarea>
        <div className="flex items-center justify-end">
          <button className="flex items-center gap-1 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-600">
            <Plus size={16} /> <span>Add Note</span>
          </button>
        </div>
      </form>

      {/* Notes list */}
      <section className="mt-4">
        {notes.map((note) => (
          <div className="flex items-center gap-4 rounded-xl border border-green-500/10 bg-black/40 px-4 py-3 transition hover:border-green-500/30">
            <p>{note.text}</p>
            <p>{note.timeStamp.toISOString()}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
