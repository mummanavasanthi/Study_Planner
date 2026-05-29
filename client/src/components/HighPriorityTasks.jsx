import { useEffect, useState } from "react";

function HighPriorityTasks() {
  const [tasks, setTasks] = useState([]);

  const fetchHighPriorityTasks = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/high-priority"
      );

      const data = await response.json();

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHighPriorityTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>High Priority Tasks</h2>

      {tasks.length === 0 ? (
        <p>No high priority tasks.</p>
      ) : (
        tasks.map((task, index) => (
          <div
            key={index}
            style={{
              border: "1px solid red",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>{task.subject}</h3>

            <p>Deadline: {task.deadline}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default HighPriorityTasks;