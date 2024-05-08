import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export function ViewQuizzesGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Mock data
    const data = {
      labels: [
        "Java script",
        "Object-Oriented Concepts Quiz",
        "Java Array",
        "JavaScript Basics",
        "Python Fundamentals",
      ],
      datasets: [
        {
          label: "Student Count",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          data: [20, 45, 30, 10, 15],
        },
      ],
    };

    // Chart options
    const options = {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    };

    new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <h2 className="mt-10 mb-4 text-2xl font-semibold text-center">
        {" "}
        Quizzes Summary
      </h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
}

export function ViewCoursesGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Mock data for courses
    const data = {
      labels: ["JavaScript", "Python", "Java", "React", "HTML/CSS"],
      datasets: [
        {
          label: "View Count",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          data: [150, 100, 120, 80, 70],
        },
        {
          label: "In Progress Count",
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
          data: [50, 30, 40, 20, 10],
        },
        {
          label: "Completed Count",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          data: [100, 70, 80, 60, 60],
        },
      ],
    };

    // Chart options
    const options = {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    };

    new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <h2 className="mt-10 mb-4 text-2xl font-semibold text-center">
        Courses Summary
      </h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
}

export function CommunityManagementLineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Mock data for users' preferred languages over time
    const languageDataOverTime = {
      JavaScript: [10, 20, 30, 40, 50], // Example data for JavaScript users over 5 time periods
      Python: [5, 10, 15, 20, 30],
      Java: [5, 10, 15, 20, 20],
      "C#": [3, 5, 8, 10, 15],
      PHP: [2, 3, 5, 7, 10],
    };

    // Extracting language labels and counts from languageDataOverTime
    const labels = Object.keys(languageDataOverTime);
    const datasets = labels.map((label) => ({
      label: label,
      data: languageDataOverTime[label],
      fill: false,
      borderColor: getRandomColor(), // Random color for each dataset
      tension: 0.4,
    }));

    // Data for the line chart
    const data = {
      labels: ["Period 1", "Period 2", "Period 3", "Period 4", "Period 5"],
      datasets: datasets,
    };

    new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Users by Preferred Language Over Time",
          },
        },
      },
    });
  }, []);

  // Function to generate a random color
  const getRandomColor = () => {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 1)`;
  };

  return (
    <div>
      <h2 className="mt-10 mb-4 text-2xl font-semibold text-center">
        Community Summary Over Time
      </h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
}
export function UserManagementChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Mock data for daily user management
    const userData = {
      Registered: [100, 120, 110, 130, 140, 150, 160], // Daily registered users
      Unregistered: [80, 90, 100, 110, 120, 130, 140], // Daily unregistered users
      Other: [50, 60, 70, 80, 90, 100, 110], // Daily other
// Mock data for daily user management continued...
};

// Data for the line chart
const data = {
  labels: [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
  ], // Days of the week
  datasets: [
    {
      label: "Registered Users",
      data: userData.Registered,
      fill: false,
      borderColor: "rgba(255, 99, 132, 0.6)",
      tension: 0.1,
    },
    {
      label: "Unregistered Users",
      data: userData.Unregistered,
      fill: false,
      borderColor: "rgba(54, 162, 235, 0.6)",
      tension: 0.1,
    },
    {
      label: "Other Users",
      data: userData.Other,
      fill: false,
      borderColor: "rgba(255, 206, 86, 0.6)",
      tension: 0.1,
    },
  ],
};

new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "User Management - Daily Activity",
      },
    },
  },
});
}, []);

return (
<div>
  <h2 className="mt-10 mb-4 text-2xl font-semibold text-center">
    User Summary
  </h2>
  <canvas ref={chartRef} width="400" height="200"></canvas>
</div>
);
}
