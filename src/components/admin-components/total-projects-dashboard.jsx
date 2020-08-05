import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  datasets: [
    {
      backgroundColor: ["#CCCC00", "#ff9700", "#00ff00"],
      data: [300, 73, 200],
    },
  ],

  labels: ["Total Active", "Total Delayed", "Total Completed"],
};

const TotalProjects = () => {
  return (
    <>
      <Pie
        height={160}
        width={120}
        data={data}
        options={{
          maintainAspectRatio: false,
          legend: {
            align: "start",
            position: "right",
            labels: {
              boxWidth: 15,
            },
          },
          title: {
            display: true,
            text: "Total Projects",
            fontSize: 22,
            fontColor: "#878787",
            fontStyle: "bold",
          },
        }}
      />
    </>
  );
};

export default TotalProjects;
