function AssignmentList(props) {
  const assignments =
    props.assignments || [];

  const markAsCompleted =
    props.markAsCompleted;

  // PENDING TASKS
  const pendingTasks =
    assignments.filter(
      (assignment) =>
        assignment.completed !== true
    );

  // COMPLETED TASKS
  const completedTasks =
    assignments.filter(
      (assignment) =>
        assignment.completed === true
    );

  return (
    <div>
      {/* PENDING TASKS */}

      <h2>📚 Pending Tasks</h2>

      {pendingTasks.length === 0 ? (
        <p>No pending tasks.</p>
      ) : (
        pendingTasks.map(
          (assignment, index) => (
            <div
              key={index}
              className="card assignment-card"
            >
              <h3>{assignment.subject}</h3>

              <p>
                📅 Deadline:{" "}
                {assignment.deadline}
              </p>

              <p>
                ⏰ Time: {assignment.time}
              </p>

              <p>
                🚨 Priority:{" "}
                {assignment.priority}
              </p>

              <p>
                📝 Notes:{" "}
                {assignment.notes ||
                  "No notes"}
              </p>

              <p>
                📌 Status: Pending
              </p>

              <button
                onClick={() =>
                  markAsCompleted(index)
                }
              >
                Mark Complete
              </button>
            </div>
          )
        )
      )}

      {/* COMPLETED TASKS */}

      <h2
        style={{
          marginTop: "40px",
        }}
      >
        ✅ Completed Tasks
      </h2>

      {completedTasks.length === 0 ? (
        <p>
          No completed tasks yet.
        </p>
      ) : (
        completedTasks.map(
          (assignment, index) => (
            <div
              key={index}
              className="card assignment-card"
            >
              <h3>{assignment.subject}</h3>

              <p>
                📅 Deadline:{" "}
                {assignment.deadline}
              </p>

              <p>
                  ⏰ Time:{" "}
                  {new Date(
                    `2000-01-01T${assignment.time}`
                  ).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })}              
                </p>

              <p>
                🚨 Priority:{" "}
                {assignment.priority}
              </p>

              <p>
                📝 Notes:{" "}
                {assignment.notes ||
                  "No notes"}
              </p>

              <p>
                📌 Status: Completed
              </p>
            </div>
          )
        )
      )}
    </div>
  );
}

export default AssignmentList;