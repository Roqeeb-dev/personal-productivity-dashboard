import Button from "./Button";

export default function Navbar() {
  return (
    <header className="bg-red-800 text-white p-3 flex items-center justify-between">
      <p className="font-[cursive] font-bold text-2xl">Studify</p>

      {/* links */}
      <ul className="flex items-center space-x-4">
        <li>links</li>
        <li>links</li>
        <li>links</li>
        <li>links</li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center space-x-3">
        <Button
          text="Login"
          variant="Primary"
          onClick={() => {
            alert("Hello world");
          }}
        />
        <Button
          text="Register"
          variant="Secondary"
          onClick={() => {
            alert("Hello world, this is register button");
          }}
        />
      </div>
    </header>
  );
}
