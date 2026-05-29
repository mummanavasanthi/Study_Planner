function AIRecommendation({ assignments }) {
  // NO ASSIGNMENTS
  if (assignments.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>AI Study Recommendation</h2>

        <p>No assignments available.</p>
      </div>
    );
  }

  // ONLY PENDING TASKS
  const pendingAssignments =
    assignments.filter(
      (assignment) =>
        assignment.completed !== true
    );

  // ALL TASKS COMPLETED
  if (pendingAssignments.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>AI Study Recommendation</h2>

        <p>
          All assignments are completed 🎉
        </p>
      </div>
    );
  }

  const now = new Date();

  // SORT BY NEAREST DEADLINE
  const sortedAssignments = [
    ...pendingAssignments,
  ].sort((a, b) => {
    const dateTimeA = new Date(
      `${a.deadline}T${a.time}`
    );

    const dateTimeB = new Date(
      `${b.deadline}T${b.time}`
    );

    return dateTimeA - dateTimeB;
  });

  // MOST URGENT TASK
  const urgentTask =
    sortedAssignments[0];

  const urgentTaskDate = new Date(
    `${urgentTask.deadline}T${urgentTask.time}`
  );

  const difference =
    urgentTaskDate - now;

  const hoursRemaining =
    difference / (1000 * 60 * 60);

  let statusMessage = "";
  let statusColor = "";

  // URGENCY STATUS
  if (hoursRemaining < 0) {
    statusMessage =
      "⚫ This assignment is overdue!";
    statusColor = "black";
  } else if (hoursRemaining <= 6) {
    statusMessage =
      "🔴 Critical: Complete immediately!";
    statusColor = "red";
  } else if (hoursRemaining <= 24) {
    statusMessage =
      "🟠 Urgent: Finish today.";
    statusColor = "orange";
  } else {
    statusMessage =
      "🟢 You still have some time.";
    statusColor = "green";
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Study Recommendation</h2>

      <div
        style={{
          border: `2px solid ${statusColor}`,
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h3>{urgentTask.subject}</h3>

        <p>
          Deadline: {urgentTask.deadline}
        </p>

        <p>
          Time: {urgentTask.time}
        </p>

        <p>
          Priority: {urgentTask.priority}
        </p>

        <h4 style={{ color: statusColor }}>
          {statusMessage}
        </h4>

        <p>
          AI suggests focusing on this
          task first because its deadline
          is nearest.
        </p>
      </div>
    </div>
  );
}

export default AIRecommendation;