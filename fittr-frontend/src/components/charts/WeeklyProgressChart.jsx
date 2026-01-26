import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import { getProgress } from "../../services/progressService";
import "./WeeklyProgressChart.css";

function WeeklyProgressChart({ userId }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!userId) return;

    getProgress(userId)
      .then(res => {
        const arr = Array.isArray(res.data) ? res.data : [];
        setLabels(arr.map(p => p.date));
        setData(arr.map(p => p.totalCalories));
      })
      .catch(() => {
        setLabels([]);
        setData([]);
      });
  }, [userId]);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (labels.length === 0 || data.length === 0) return;

    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Calories Burned",
            data,
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            borderWidth: 2,
            tension: 0.3,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: "#e5e7eb"
            }
          }
        },
        scales: {
          x: {
            ticks: { color: "#cbd5f5" }
          },
          y: {
            ticks: { color: "#cbd5f5" }
          }
        }
      }
    });

    chartRef.current = chart;

    return () => chart.destroy();
  }, [labels, data]);

  if (labels.length === 0) {
    return (
      <div className="weekly-progress-container">
        <h3 className="weekly-progress-title">📈 Weekly Progress</h3>
        <p className="no-progress">No progress data available</p>
      </div>
    );
  }

  return (
    <div className="weekly-progress-container">
      <h3 className="weekly-progress-title">📈 Weekly Calories Burned</h3>

      <div className="weekly-progress-canvas">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default WeeklyProgressChart;
