import { useState, useEffect } from "react";
import { Plus } from "lucide-react";

interface Note {
  id: number;
  text: string;
  timeStamp: number;
}

interface NotesProps {
  onNotesChange: (count: number) => void;
}

export default function Notes({ onNotesChange }: NotesProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState("");

  function addNote(e: React.FormEvent) {
    e.preventDefault();
    if (!noteText.trim()) return;

    setNotes((prev) => [
      {
        id: Date.now(),
        text: noteText.trim(),
        timeStamp: Date.now(),
      },
      ...prev,
    ]);

    setNoteText("");
  }

  function formatTimeAgo(time: number) {
    const diff = Date.now() - time;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`;
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  useEffect(() => {
    onNotesChange(notes.length);
  }, [notes, onNotesChange]);

  return (
    <main className="rounded-3xl bg-gradient-to-br from-[#14181C] to-[#0E1114] px-8 py-6 text-white shadow-xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Quick Notes</h1>
        <p className="mt-1 text-sm text-gray-400">
          {notes.length} {notes.length === 1 ? "note" : "notes"} saved
        </p>
      </div>

      {/* Add note */}
      <form onSubmit={addNote} className="mt-4">
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write something..."
          className="h-[120px] w-full resize-none rounded-2xl bg-[#15191D] p-4 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500/40"
        />

        <div className="mt-3 flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-1 rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-600"
          >
            <Plus size={16} />
            Add Note
          </button>
        </div>
      </form>

      {/* Notes list */}
      <section className="mt-4 space-y-2">
        {notes.map((note) => (
          <div
            key={note.id}
            className="rounded-xl border border-green-500/10 bg-black/40 p-4 transition hover:border-green-500/30"
          >
            <p className="text-sm font-medium text-gray-100 whitespace-pre-wrap">
              {note.text}
            </p>
            <p className="mt-2 text-xs text-gray-400">
              {formatTimeAgo(note.timeStamp)}
            </p>
          </div>
        ))}

        {notes.length === 0 && (
          <p className="py-6 text-center text-sm text-gray-500">
            No notes yet ✍️
          </p>
        )}
      </section>
    </main>
  );
}
