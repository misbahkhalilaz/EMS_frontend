import React from "react";
import { Typography, Row, Col } from "antd";
import moment from "moment";
import { Pie } from "react-chartjs-2";

const { Title } = Typography;

var date = moment();
date = date.format("MMMM, YYYY");

const data = {
  datasets: [
    {
      backgroundColor: ["red", "#1890ff"],

      data: [10, 20],
    },
  ],

  labels: ["Presents", "Absents"],
};

const data1 = {
  datasets: [
    {
      backgroundColor: ["#CCCC00", "#00ff00", "#ff9700"],

      data: [10, 20, 30],
    },
  ],

  labels: ["Over Times", "Full Times", "Less Times"],
};

const AttendancePanel2 = () => {
  return (
    <>
      <Row style={{ width: "100%" }}>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col>
            <Title style={{ color: "#878787" }} level={3}>
              {date}
            </Title>
          </Col>
        </Row>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col flex="260px">
            <Pie
              height={200}
              width={230}
              data={data}
              options={{
                responsive: false,
                maintainAspectRatio: false,
                legend: {
                  align: "start",
                  position: "left",
                  labels: {
                    boxWidth: 15,
                  },
                },
              }}
            />
          </Col>
          <Col flex="260px">
            <Pie
              height={200}
              width={245}
              data={data1}
              options={{
                responsive: false,
                maintainAspectRatio: false,
                legend: {
                  align: "start",
                  position: "right",
                  labels: {
                    boxWidth: 15,
                  },
                },
              }}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default AttendancePanel2;
