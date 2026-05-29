import { useState } from "react";

function AIChat({ assignments }) {
  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const handleAsk = (
    customQuestion = null
  ) => {
    const finalQuestion =
      customQuestion || question;

    const lowerQuestion =
      finalQuestion.toLowerCase();

    // HIGH PRIORITY TASKS
    if (
      lowerQuestion.includes(
        "high priority"
      ) ||
      lowerQuestion.includes(
        "important"
      ) ||
      lowerQuestion.includes(
        "urgent"
      )
    ) {
      const highPriorityTasks =
        assignments.filter(
          (assignment) =>
            assignment.priority ===
              "High" &&
            assignment.completed !==
              true
        );

      if (
        highPriorityTasks.length === 0
      ) {
        setAnswer(
          "You do not have any high priority assignments."
        );
      } else {
        const taskNames =
          highPriorityTasks.map(
            (task) => task.subject
          );

        setAnswer(
          `Your important tasks are: ${taskNames.join(
            ", "
          )}`
        );
      }
    }

    // OVERDUE TASKS
    else if (
      lowerQuestion.includes(
        "overdue"
      ) ||
      lowerQuestion.includes("late") ||
      lowerQuestion.includes(
        "missed"
      )
    ) {
      const now = new Date();

      const overdueTasks =
        assignments.filter(
          (assignment) => {
            const taskDate =
              new Date(
                `${assignment.deadline}T${assignment.time}`
              );

            return (
              taskDate < now &&
              assignment.completed !==
                true
            );
          }
        );

      if (
        overdueTasks.length === 0
      ) {
        setAnswer(
          "You do not have overdue assignments."
        );
      } else {
        const taskNames =
          overdueTasks.map(
            (task) => task.subject
          );

        setAnswer(
          `Overdue assignments: ${taskNames.join(
            ", "
          )}`
        );
      }
    }

    // STUDY RECOMMENDATION
    else if (
      lowerQuestion.includes(
        "study"
      ) ||
      lowerQuestion.includes(
        "what should i do"
      ) ||
      lowerQuestion.includes(
        "finish first"
      ) ||
      lowerQuestion.includes(
        "study today"
      )
    ) {
      const pendingAssignments =
        assignments.filter(
          (assignment) =>
            assignment.completed !==
            true
        );

      if (
        pendingAssignments.length === 0
      ) {
        setAnswer(
          "All assignments are completed 🎉"
        );
      } else {
        const sortedAssignments =
          [
            ...pendingAssignments,
          ].sort((a, b) => {
            const dateA =
              new Date(
                `${a.deadline}T${a.time}`
              );

            const dateB =
              new Date(
                `${b.deadline}T${b.time}`
              );

            return dateA - dateB;
          });

        setAnswer(
          `You should focus on ${sortedAssignments[0].subject} because its deadline is nearest.`
        );
      }
    }

    // TOTAL ASSIGNMENTS
    else if (
      lowerQuestion.includes(
        "how many"
      )
    ) {
      setAnswer(
        `You currently have ${assignments.length} assignments.`
      );
    }

    // PENDING TASKS
    else if (
      lowerQuestion.includes(
        "pending"
      )
    ) {
      const pendingTasks =
        assignments.filter(
          (assignment) =>
            assignment.completed !==
            true
        );

      setAnswer(
        `You have ${pendingTasks.length} pending assignments.`
      );
    }

    // COMPLETED TASKS
    else if (
      lowerQuestion.includes(
        "completed"
      )
    ) {
      const completedTasks =
        assignments.filter(
          (assignment) =>
            assignment.completed ===
            true
        );

      if (
        completedTasks.length === 0
      ) {
        setAnswer(
          "You have not completed any assignments yet."
        );
      } else {
        const taskNames =
          completedTasks.map(
            (task) => task.subject
          );

        setAnswer(
          `Completed assignments: ${taskNames.join(
            ", "
          )}`
        );
      }
    }

    // TODAY TASKS
    else if (
      lowerQuestion.includes(
        "today"
      )
    ) {
      const today = new Date()
        .toISOString()
        .split("T")[0];

      const todayTasks =
        assignments.filter(
          (assignment) =>
            assignment.deadline ===
              today &&
            assignment.completed !==
              true
        );

      if (todayTasks.length === 0) {
        setAnswer(
          "You do not have any tasks due today."
        );
      } else {
        const taskNames =
          todayTasks.map(
            (task) => task.subject
          );

        setAnswer(
          `Tasks due today: ${taskNames.join(
            ", "
          )}`
        );
      }
    }

    // DEFAULT RESPONSE
    else {
      setAnswer(
        "Sorry, I cannot understand that question yet."
      );
    }
  };

  return (
    <div>
      <h2>🤖 AI Study Assistant</h2>

      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
      />

      <button
        onClick={() => handleAsk()}
      >
        Ask AI
      </button>

      {/* SUGGESTED QUESTIONS */}

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <button
          onClick={() =>
            handleAsk(
              "What should I study today?"
            )
          }
        >
          📌 Study Today
        </button>

        <button
          onClick={() =>
            handleAsk(
              "Any overdue tasks?"
            )
          }
        >
          ⏰ Overdue Tasks
        </button>

        <button
          onClick={() =>
            handleAsk(
              "How many pending tasks?"
            )
          }
        >
          📚 Pending Tasks
        </button>

        <button
          onClick={() =>
            handleAsk(
              "Which tasks are completed?"
            )
          }
        >
          ✅ Completed Tasks
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default AIChat;