type Goal = {
  what: string;
  frequency: Frequency;
};

type Frequency = {
  time: "daily" | "weekly" | "monthly";
  amount?: number;
};

const SetupPage: React.FC = () => {
  // const [goals, setGoals] = useState<Goal[]>([]);
  const goals: Goal[] = [
    { what: "dance class", frequency: { time: "monthly", amount: 2 } },
    { what: "inger instagram post", frequency: { time: "weekly" } },
  ];

  return (
    <div className="about-page-container">
      <h1>Current goals</h1>
      <ul>
        {goals.map((goal) => (
          <li>
            <span>{goal.what}</span>
            {goal.frequency.amount ? (
              <span>
                {goal.frequency.amount} per {goal.frequency.time}
              </span>
            ) : (
              <span>{goal.frequency.time}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SetupPage;
