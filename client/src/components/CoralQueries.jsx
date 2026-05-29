function CoralQueries({
  assignments,
}) {
  const highPriorityTasks =
    assignments.filter(
      (assignment) =>
        assignment.priority ===
          "High" &&
        assignment.completed !== true
    );

  const pendingTasks =
    assignments.filter(
      (assignment) =>
        assignment.completed !== true
    );

  const completedTasks =
    assignments.filter(
      (assignment) =>
        assignment.completed === true
    );

  return (
    <div>
      <h2>
        🪸 Coral Query Demo
      </h2>

      <div
        className="assignment-card"
        style={{
          padding: "15px",
          marginTop: "10px",
        }}
      >
        <h3>
          SELECT * FROM assignments
          WHERE priority = 'High';
        </h3>

        <p>
          Result:{" "}
          {
            highPriorityTasks.length
          }{" "}
          High Priority Tasks Found
        </p>
      </div>

      <div
        className="assignment-card"
        style={{
          padding: "15px",
          marginTop: "10px",
        }}
      >
        <h3>
          SELECT * FROM assignments
          WHERE completed = false;
        </h3>

        <p>
          Result:{" "}
          {pendingTasks.length} Pending
          Tasks Found
        </p>
      </div>

      <div
        className="assignment-card"
        style={{
          padding: "15px",
          marginTop: "10px",
        }}
      >
        <h3>
          SELECT * FROM assignments
          WHERE completed = true;
        </h3>

        <p>
          Result:{" "}
          {
            completedTasks.length
          }{" "}
          Completed Tasks Found
        </p>
      </div>
    </div>
  );
}

export default CoralQueries;