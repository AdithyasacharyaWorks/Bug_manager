import React, { useState } from "react";

function CreateBug() {
  const [bugName, setBugName] = useState("");
  const [bugDescription, setBugDescription] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [priority, setPriority] = useState("");
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic here
  };

  return (
    <div className="">
      <div className=" p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Create New Bug
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Bug Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={bugName}
              onChange={(e) => setBugName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Bug Description</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={bugDescription}
              onChange={(e) => setBugDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Assign To</label>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
            >
              <option value="">Select...</option>
              {/* Add options for Assign To dropdown */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Priority</label>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="">Select...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Project Name</label>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            >
              <option value="">Select...</option>
              {/* Add options for Project Name dropdown */}
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[rgb(255,153,0)]  text-gray-900 py-2 px-6 rounded-md hover:bg-blue-600"
            >
              Create Bug
            </button>
            <button
              type="button"
              className="bg-gray-400 text-gray-900 py-2 px-6 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBug;
