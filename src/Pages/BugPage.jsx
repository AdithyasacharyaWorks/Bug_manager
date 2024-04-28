import React from "react";
import { useForm } from "react-hook-form";

function BugPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    // Logic to handle form submission (data contains form values)
    console.log(data);
    reset(); // Reset form after submission
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 bg-gray-100 rounded-lg p-4 shadow">
        <span className="font-bold text-lg">
          Bug Id: <span className="text-[rgb(255,153,0)]">5223</span>
        </span>
        <p className="mt-2">
          The refresh page is not working and throwing error
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="assignee" className="block mb-1">
              Assign To:
            </label>
            <select
              id="assignee"
              className="w-full p-2 border rounded"
              {...register("assignee", { required: true })}
            >
              <option value="">Select Assignee</option>
              <option value="developer1">Developer 1</option>
              <option value="developer2">Developer 2</option>
              <option value="developer3">Developer 3</option>
            </select>
            {errors.assignee && (
              <span className="text-red-500">Assignee is required</span>
            )}
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="bugState" className="block mb-1">
              Bug State:
            </label>
            <select
              id="bugState"
              className="w-full p-2 border rounded"
              {...register("bugState", { required: true })}
            >
              <option value="">Select Bug State</option>
              <option value="new">New</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
            {errors.bugState && (
              <span className="text-red-500">Bug State is required</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="bugDescription" className="block mb-1">
            Bug Description:
          </label>
          <textarea
            id="bugDescription"
            className="w-full p-2 border rounded"
            {...register("bugDescription")}
            readOnly // Make it readonly
          ></textarea>
        </div>

        {/* Priority, Created By, Date Created */}
        <div className="mb-4 bg-gray-100 rounded-lg p-4 shadow flex items-center">
          <label htmlFor="priority" className="block mb-1 font-bold mr-4">
            Priority:
          </label>
          <span id="priority" className="text-[rgb(255,153,0)]">
            High
          </span>{" "}
          | <span className="font-bold mr-4">Created By:</span> John Doe |{" "}
          <span className="font-bold">Date Created:</span> April 30, 2024
        </div>

        <div className="mb-4">
          <label htmlFor="rootCause" className="block mb-1">
            Root Cause:
          </label>
          <input
            type="text"
            id="rootCause"
            className="w-full p-2 border rounded"
            {...register("rootCause", { required: true })}
          />
          {errors.rootCause && (
            <span className="text-red-500">Root Cause is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="rootCauseFix" className="block mb-1">
            Root Cause Fix:
          </label>
          <input
            type="text"
            id="rootCauseFix"
            className="w-full p-2 border rounded"
            {...register("rootCauseFix", { required: true })}
          />
          {errors.rootCauseFix && (
            <span className="text-red-500">Root Cause Fix is required</span>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className={`bg-[rgb(255,153,0)]  text-white py-2 px-6 rounded-md hover:scale-105 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Save
          </button>
          <button
            type="button"
            onClick={reset}
            className="bg-[rgb(23,25,30)] text-white py-2 px-6 rounded-md hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BugPage;
