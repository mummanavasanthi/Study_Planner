import { useState } from "react";

function AssignmentForm({
  fetchAssignments,
}) {
  const [subject, setSubject] =
    useState("");

  const [deadline, setDeadline] =
    useState("");

  const [time, setTime] =
    useState("");

  const [priority, setPriority] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAssignment = {
      subject,
      deadline,
      time,
      priority,
      notes,
      completed: false,
    };

    try {
      await fetch(
        "http://localhost:5000/assignments",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            newAssignment
          ),
        }
      );

      alert(
        "Assignment Added Successfully"
      );

      // CLEAR INPUTS
      setSubject("");
      setDeadline("");
      setTime("");
      setPriority("");
      setNotes("");

      fetchAssignments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Assignment</h2>

      <form onSubmit={handleSubmit}>
        {/* SUBJECT */}

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          required
        />

        {/* DEADLINE */}

        <input
          type="date"
          value={deadline}
          onChange={(e) =>
            setDeadline(e.target.value)
          }
          required
        />

        {/* TIME */}

        <input
          type="time"
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
          required
        />

        {/* PRIORITY */}

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          required
        >
          <option value="">
            Select Priority
          </option>

          <option value="High">
            High
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Low">
            Low
          </option>
        </select>

        {/* NOTES */}

        <input
          type="text"
          placeholder="Add Notes"
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
        />

        {/* SUBMIT BUTTON */}

        <button type="submit">
          Add Assignment
        </button>
      </form>
    </div>
  );
}

export default AssignmentForm;