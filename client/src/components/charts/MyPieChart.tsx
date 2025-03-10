import { Cell, Pie, PieChart, Tooltip } from "recharts";


const MyPieChart = () => {
    const data = [
        { name: "Completed", value: 40 },
        { name: "Remaining", value: 100 - 40 },
      ];
    
      const COLORS = ["#4CAF50", "#8ec9e8"]; // Green for progress, light gray for background
    
      return (
        <PieChart width={69} height={69}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            // innerRadius={70}
            // outerRadius={85}
            startAngle={0}
            // endAngle={90 - (40 / 100) * 360}
            fill="#4CAF50"
            dataKey="value"
            stroke="none" // Remove default stroke
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          {/* Outer circle to create the blurred edge effect */}
          <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
        </PieChart>
      );
}

export default MyPieChart;