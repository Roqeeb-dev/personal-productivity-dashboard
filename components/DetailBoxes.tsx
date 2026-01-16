export default function DetailBoxes() {
  const details = [
    { icon: "", count: 0, text: "Completed" },
    { icon: "", count: 0, text: "Pending" },
    { icon: "", count: 0, text: "Notes" },
    { icon: "", count: "0%", text: "Focus Score" },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 space-x-5 px-4 my-4">
      {details.map((detail) => (
        <div className="p-4 bg-gray-900 text-white">
          <p>{detail.count}</p>
          <p>{detail.text}</p>
        </div>
      ))}
    </div>
  );
}
