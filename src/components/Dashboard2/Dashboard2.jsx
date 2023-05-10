import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';


const Dashboard2 = () => {
     const marksArray = [
        {
          id: 1,
          name: "Student 1",
          physics: 75,
          chemistry: 85,
          math: 90
        },
        {
          id: 2,
          name: "Student 2",
          physics: 80,
          chemistry: 70,
          math: 95
        },
        {
          id: 3,
          name: "Student 3",
          physics: 90,
          chemistry: 60,
          math: 75
        },
        {
          id: 4,
          name: "Student 4",
          physics: 65,
          chemistry: 65,
          math: 85
        },
        {
          id: 5,
          name: "Student 5",
          physics: 70,
          chemistry: 90,
          math: 80
        },
        {
          id: 6,
          name: "Student 6",
          physics: 85,
          chemistry: 65,
          math: 70
        },
        {
          id: 7,
          name: "Student 7",
          physics: 80,
          chemistry: 90,
          math: 85
        },
        {
          id: 8,
          name: "Student 8",
          physics: 75,
          chemistry: 95,
          math: 90
        },
        {
          id: 9,
          name: "Student 9",
          physics: 90,
          chemistry: 70,
          math: 80
        },
        {
          id: 10,
          name: "Student 10",
          physics: 70,
          chemistry: 75,
          math: 95
        },
        {
          id: 11,
          name: "Student 11",
          physics: 80,
          chemistry: 85,
          math: 65
        },
        {
          id: 12,
          name: "Student 12",
          physics: 75,
          chemistry: 90,
          math: 70
        }
      ];
     return (
          <div>
              <AreaChart
              width={800}
              height={400}
              data={marksArray}
              >
                    <Area type="monotone" dataKey="chemistry" stroke="##052900" fill="#052900"></Area>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
              </AreaChart> 
          </div>
     );
};

export default Dashboard2;