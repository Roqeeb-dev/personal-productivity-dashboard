import Navbar from "../components/Navbar";
import DetailBoxes from "../components/DetailBoxes";
import Tasks from "../components/Tasks";
import Notes from "../components/Notes";

export default function Dashboard() {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <DetailBoxes />

      <section>
        <Tasks />
        <Notes />
      </section>
    </main>
  );
}
