import Navbar from "../components/Navbar";
import DetailBoxes from "../components/DetailBoxes";
import Tasks from "../components/Tasks";
import Notes from "../components/Notes";

export default function Dashboard() {
  return (
    <main className="bg-[#0B0E10] min-h-screen px-10">
      <Navbar />
      <div>
        <DetailBoxes />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 space-x-3">
        <Tasks />
        <Notes />
      </section>
    </main>
  );
}
