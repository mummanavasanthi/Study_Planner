function Schedule() {
  const schedule = [
    {
      subject: "DBMS",
      time: "10:00 AM",
    },

    {
      subject: "AIML",
      time: "2:00 PM",
    },

    {
      subject: "Operating Systems",
      time: "4:00 PM",
    },
  ];

  return (
    <div>
      <h2>📅 Today's Schedule</h2>

      {schedule.map((item, index) => (
        <div
          key={index}
          className="assignment-card"
          style={{
            padding: "15px",
            marginTop: "10px",
          }}
        >
          <h3>{item.subject}</h3>

          <p>🕒 Time: {item.time}</p>
        </div>
      ))}
    </div>
  );
}

export default Schedule;