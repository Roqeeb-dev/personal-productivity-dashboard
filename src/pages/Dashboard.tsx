import Navbar from "../components/Navbar";
import DetailBoxes from "../components/DetailBoxes";
import Tasks from "../components/Tasks";
import Notes from "../components/Notes";

export default function Dashboard() {
  return (
    <main className="bg-[#0B0E10] h-screen px-10">
      <Navbar />
      <div>
        <DetailBoxes />
      </div>

      <section>
        <Tasks />
        <Notes />
      </section>
    </main>
  );
}
