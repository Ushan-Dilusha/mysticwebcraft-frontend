import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'chart.js/auto';

function AdminDashboard() {
  const [selectedAdmin, setSelectedAdmin] = useState('quiz');


  const handleSidebarSelect = (adminType) => {
    setSelectedAdmin(adminType);
  };

  return (
    <div>
      {/* Header component */}
      <header className="flex items-center justify-between p-4 border-b-2">
        <div>
          <Link to="/admindashboard" className="text-2xl font-semibold text-black ">
            Sk<span className='text-blue-700'>i</span>llSpan
          </Link>
        </div>
      </header>

      <div className="container p-4 mx-auto">
        <h2 className="mb-4 text-2xl font-semibold text-center">Admin Dashboard</h2>
        <br />
        <br />

        <div className="grid grid-cols-3 ">
          {/* Sidebar */}
          <Sidebar selectedAdmin={selectedAdmin} onSelect={handleSidebarSelect} />

          {/* Content based on selected admin */}
          <section className="w-4/5 p-4 mb-4 bg-white rounded-lg shadow">
            {selectedAdmin === 'quiz' && (
              <div>
                <h3 className="mb-4 text-xl font-semibold">Quiz Admin Actions</h3>
                <Link to="/addQuestion">
                  <button className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300">
                    Add Question
                  </button>
                </Link>
                <Link to="/qadmin">
                  <button
                    className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300"
                  >
                    View Questions
                  </button>
                </Link>
                <Link to="/addQuiz">
                  <button
                    className="w-full bg-blue-200 hover.bg-blue-300 text-black font-semibold py-2 px-4 rounded-lg mb-2"
                  >
                    Add Quiz
                  </button>
                </Link>
                <Link to="/qadminquizview">
                  <button
                    className="w-full px-4 py-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300"
                  >
                    View Quizzes
                  </button>
                </Link>
                {/* Include the ViewQuizzesGraph component here */}

              </div>
            )}
            {selectedAdmin === 'company' && (
              <div>
                <h3 className="mb-4 text-xl font-semibold ">Company Admin Actions</h3>
                <Link to="/manageCompany">
                  <button
                    className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300"
                  >
                    Manage Company
                  </button>
                </Link>
                <Link to="/company/addCompany">
                  <button
                    className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300"
                  >
                    Add or Edit Company Details
                  </button>
                </Link>
                <Link to="/addRoadMaps">
                  <button
                    className="w-full px-4 py-2 mb-2 font-semibold text-black bg-blue-200 rounded-lg hover:bg-blue-300"
                  >
                    Add roadmaps
                  </button>
                </Link>

              </div>
            )}
          </section>
          <section className="p-4 bg-white rounded-lg ">
            {selectedAdmin === 'quiz' && (
              <div>
                <ViewQuizzesGraph className="mt-5" />
              </div>
            )}
            {selectedAdmin === 'company' && (
              <div>
                <ViewCompany className="mt-5" />
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ selectedAdmin = '', onSelect }) {
  const getButtonStyle = (adminType) => {
    return selectedAdmin === adminType
      ? 'bg-blue-500 text-white py-3 px-6'
      : 'bg-blue-200 text-black py-2 px-4';
  };

  return (
    <div className="w-2/5 p-4 mb-4 bg-white rounded-lg shadow"> {/* Adjust width as needed */}
      <h3 className="mb-4 text-xl font-semibold">Admin Actions</h3>
      <button
        onClick={() => onSelect('quiz')}
        className={`${getButtonStyle('quiz')} hover:bg-blue-500 font-semibold rounded-lg mb-2 block w-full text-left`}
      >
        Learning Management
      </button>
      <button
        onClick={() => onSelect('company')}
        className={`${getButtonStyle('company')} hover:bg-blue-500 font-semibold rounded-lg block w-full text-left`}
      >
        Company Management
      </button>
    </div>
  );
}
function ViewCompany() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Mock data for registered company count and student count for each company for all months
    const data = {
      labels: ['Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023'],
      datasets: [
        {
          label: 'Enrolled Student Count',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [15, 20, 30, 25, 18], // Replace with actual data for Company A
        },
        {
          label: ' Registered Company count',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: [10, 15, 22, 18, 30], // Replace with actual data for Company B
        },
        // Add more datasets for additional companies
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
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-center">Registered Company Count and Student Count</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
}

function ViewQuizzesGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Mock data
    const data = {
      labels: ['Java script', 'Object-Oriented Concepts Quiz', 'Java Array', 'JavaScript Basics', 'Python Fundamentals'],
      datasets: [
        {
          label: 'Student Count',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <h2 className="mt-10 mb-4 text-2xl font-semibold text-center"> Quizzes Graph</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
}

export default AdminDashboard;
