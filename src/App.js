import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Title", "Hours per Day"],
  ["Континенталь", 15],
  ["История Джеффри Дамера", 3],
  ["Мандалорец", 1],
  ["Бумажный дом", 5],
  ["Ходячие мертвецы", 7],
];

export const options = {
  title: "Какие сериалы я смотрела за неделю",
  is3D: true,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}