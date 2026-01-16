import Button from "./Button";

export default function Navbar() {
  return (
    <header className="bg-red-800 text-white p-3 flex items-center justify-between">
      {/* Logo and subtitle */}

      <div>
        <h1>Productivity Hub</h1>
        <p>Stay focused and organized</p>
      </div>

      {/* Text and theme toggle */}
      <div className="flex items-center space-x-3">
        <section>
          <p>Date</p>
          <p>Number of tasks remaining</p>
        </section>

        <button>Theme toggle</button>
      </div>
    </header>
  );
}
