import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  datasets: [
    {
      backgroundColor: ["#00ff00", "red"],
      data: [20, 10],
    },
  ],

  labels: ["Present", "Absent"],
};

const EmployeeCurrentAttendance = () => {
  return (
    <>
      <Pie
        height={200}
        width={180}
        data={data}
        options={{
          maintainAspectRatio: false,
          legend: {
            align: "start",
            position: "left",
            labels: {
              boxWidth: 15,
            },
          },
          title: {
            display: true,
            text: "Total Employee Present/Absent",
            fontSize: 22,
            fontColor: "#878787",
            fontStyle: "bold",
          },
        }}
      />
    </>
  );
};

export default EmployeeCurrentAttendance;
