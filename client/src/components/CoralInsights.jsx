function CoralInsights({ assignments }) {
  const totalAssignments =
    assignments.length;

  const highPriority =
    assignments.filter(
      (assignment) =>
        assignment.priority === "High"
    ).length;

  const now = new Date();

  const overdueAssignments =
    assignments.filter((assignment) => {
      const assignmentDate = new Date(
        `${assignment.deadline}T${assignment.time}`
      );

      return assignmentDate < now;
    }).length;

  return (
    <div>
      <h2>🪸 Coral Query Insights</h2>

      <div className="card">
        <h3>
          SELECT * FROM assignments;
        </h3>

        <p>
          Total Assignments:{" "}
          {totalAssignments}
        </p>
      </div>

      <div className="card">
        <h3>
          SELECT * FROM assignments
          WHERE priority = 'High';
        </h3>

        <p>
          High Priority Tasks:{" "}
          {highPriority}
        </p>
      </div>

      <div className="card">
        <h3>
          SELECT * FROM assignments
          WHERE deadline &lt; NOW();
        </h3>

        <p>
          Overdue Tasks:{" "}
          {overdueAssignments}
        </p>
      </div>
    </div>
  );
}

export default CoralInsights;