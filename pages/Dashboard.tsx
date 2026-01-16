import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

export default function Dashboard() {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />

      <section className="flex flex-1">
        <Sidebar />
        <Content />
      </section>
    </main>
  );
}
