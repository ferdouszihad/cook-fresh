import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Title from "../components/Title";

const Statistics = () => {
  const recipies = useLoaderData();
  const MyKitchen = JSON.parse(localStorage.getItem("kitchen-room")) || [];

  const data = [
    { name: "All Recipes", value: recipies.length },
    { name: "My kitchens recipe", value: MyKitchen.length },
  ];

  const COLORS = ["#FA490B", "#3AD166"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section
      id="stat"
      className=" content-box grid grid-cols-1 lg:grid-cols-2 items-center "
    >
      <Title>My Cooking State</Title>
      <div style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={200}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Statistics;
