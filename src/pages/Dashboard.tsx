import { useState } from "react";

import Navbar from "../components/Navbar";
import DetailBoxes from "../components/DetailBoxes";
import Tasks from "../components/Tasks";
import Notes from "../components/Notes";

export default function Dashboard() {
  const [completed, setCompleted] = useState(0);
  const [active, setActive] = useState(0);
  const [notes, setNotes] = useState(0);

  return (
    <main className="min-h-screen bg-[#0B0E10] px-6 md:px-10">
      <Navbar completed={completed} active={active} />

      <DetailBoxes completed={completed} active={active} notes={notes} />

      <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Tasks
          onStatsChange={(stats) => {
            setCompleted(stats.completed);
            setActive(stats.active);
          }}
        />

        <Notes onNotesChange={(count) => setNotes(count)} />
      </section>
    </main>
  );
}
