const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

/* HOME ROUTE */

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

/* GET ALL ASSIGNMENTS */

app.get("/assignments", (req, res) => {
  fs.readFile(
    "assignments.json",
    "utf8",
    (err, data) => {
      if (err) {
        return res.status(500).json({
          message: "Error reading file",
        });
      }

      const assignments =
        JSON.parse(data);

      res.json(assignments);
    }
  );
});

/* ADD ASSIGNMENT */

app.post("/assignments", (req, res) => {
  const newAssignment = req.body;

  fs.readFile(
    "assignments.json",
    "utf8",
    (err, data) => {
      if (err) {
        return res.status(500).json({
          message: "Error reading file",
        });
      }

      let assignments =
        JSON.parse(data);

      assignments.push(newAssignment);

      fs.writeFile(
        "assignments.json",
        JSON.stringify(
          assignments,
          null,
          2
        ),
        (err) => {
          if (err) {
            return res
              .status(500)
              .json({
                message:
                  "Error writing file",
              });
          }

          res.json({
            message:
              "Assignment Added Successfully",
          });
        }
      );
    }
  );
});

/* HIGH PRIORITY TASKS */

app.get("/high-priority", (req, res) => {
  fs.readFile(
    "assignments.json",
    "utf8",
    (err, data) => {
      if (err) {
        return res.status(500).json({
          message: "Error reading file",
        });
      }

      const assignments =
        JSON.parse(data);

      const highPriorityAssignments =
        assignments.filter(
          (assignment) =>
            assignment.priority ===
            "High"
        );

      res.json(
        highPriorityAssignments
      );
    }
  );
});

/* MARK TASK AS COMPLETED */

app.put(
  "/assignments/:index",
  (req, res) => {
    const index = req.params.index;

    fs.readFile(
      "assignments.json",
      "utf8",
      (err, data) => {
        if (err) {
          return res.status(500).json({
            message:
              "Error reading file",
          });
        }

        const assignments =
          JSON.parse(data);

        assignments[index].completed =
          true;

        fs.writeFile(
          "assignments.json",
          JSON.stringify(
            assignments,
            null,
            2
          ),
          (err) => {
            if (err) {
              return res
                .status(500)
                .json({
                  message:
                    "Error writing file",
                });
            }

            res.json({
              message:
                "Assignment marked completed",
            });
          }
        );
      }
    );
  }
);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});