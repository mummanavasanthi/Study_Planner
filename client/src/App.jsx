import "./App.css";
import { useEffect, useState } from "react";

import AssignmentForm from "./components/AssignmentForm";
import AssignmentList from "./components/AssignmentList";
import AIRecommendation from "./components/AIRecommendation";
import HighPriorityTasks from "./components/HighPriorityTasks";
import AIChat from "./components/AIChat";
import Schedule from "./components/Schedule";
import CoralQueries from "./components/CoralQueries";
function App() {
  const [assignments, setAssignments] =
    useState([]);

  const fetchAssignments = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/assignments"
      );

      const data = await response.json();

      setAssignments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const markAsCompleted = async (
    index
  ) => {
    try {
      await fetch(
        `http://localhost:5000/assignments/${index}`,
        {
          method: "PUT",
        }
      );

      fetchAssignments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>🎓 Study Planner</h1>

      <div className="card">
        <AssignmentForm
          fetchAssignments={fetchAssignments}
        />
      </div>

      <div className="card">
        <AssignmentList
          assignments={assignments}
          markAsCompleted={
            markAsCompleted
          }
        />
      </div>

      <div className="card ai-card">
        <AIRecommendation
          assignments={assignments}
        />
      </div>

          <div className="card">
              <Schedule />
          </div>

          <div className="card">
            <CoralQueries
              assignments={assignments}
            />
          </div>

      <div className="card high-priority">
        <HighPriorityTasks />
      </div>

      <div className="card ai-card">
        <AIChat
          assignments={assignments}
        />
      </div>
    </div>
  );
}

export default App;