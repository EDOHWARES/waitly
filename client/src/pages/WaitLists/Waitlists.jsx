import { useState, useMemo } from "react";
import { toast } from "react-toastify";

const demoWaitlists = [
  { id: 1, name: "John Doe", email: "johndoe@example.com", createdAt: "2025-03-10" },
  { id: 2, name: "Jane Smith", email: "janesmith@example.com", createdAt: "2025-02-15" },
  { id: 3, name: "Michael Johnson", email: "michaelj@example.com", createdAt: "2025-03-01" },
  { id: 4, name: "Emily Davis", email: "emilydavis@example.com", createdAt: "2025-02-25" },
  { id: 5, name: "James Wilson", email: "jamesw@example.com", createdAt: "2025-03-05" },
  { id: 6, name: "Sarah Miller", email: "sarahm@example.com", createdAt: "2025-01-20" },
  { id: 7, name: "David Taylor", email: "davidtaylor@example.com", createdAt: "2025-03-12" },
  { id: 8, name: "Laura Moore", email: "lauramoore@example.com", createdAt: "2025-02-28" },
  { id: 9, name: "Chris Anderson", email: "chrisanderson@example.com", createdAt: "2025-03-08" },
  { id: 10, name: "Olivia Thomas", email: "oliviat@example.com", createdAt: "2025-02-10" },
];

const formatTimeAgo = (date) => {
  const now = new Date();
  const createdDate = new Date(date);
  const diffInMinutes = Math.floor((now - createdDate) / 60000);
  
  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day ago`;
};

export default function WaitlistsPage() {
  const [search, setSearch] = useState("");
  const [waitlists, setWaitlists] = useState(demoWaitlists);

  const filteredWaitlists = useMemo(() => {
    return waitlists.filter((wl) =>
      wl.name.toLowerCase().includes(search.toLowerCase()) || 
      wl.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, waitlists]);

  const handleExport = () => {
    toast.success("Exporting waitlist data...");
  };

  const handleImport = () => {
    toast.success("Import feature coming soon!");
  };

  return (
    <div className="w-full bg-[#161716] text-white p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">📋 Waitlists</h1>
      
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search waitlists..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3 p-2 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <div className="flex gap-2">
          <button onClick={handleImport} className="px-4 py-2 bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] rounded">Import</button>
          <button onClick={handleExport} className="px-4 py-2 bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] rounded">Export</button>
          <button className="px-4 py-2 bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] rounded">+ New Waitlist</button>
        </div>
      </div>
      
      <div className="overflow-x-auto bg-[#1d1d1dea] rounded-lg p-4 shadow-lg flex-grow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Created At</th>
            </tr>
          </thead>
          <tbody>
            {filteredWaitlists.map((wl) => (
              <tr key={wl.id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-3">{wl.id}</td>
                <td className="p-3">{wl.name}</td>
                <td className="p-3">{wl.email}</td>
                <td className="p-3">{formatTimeAgo(wl.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
