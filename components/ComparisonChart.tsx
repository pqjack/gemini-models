
import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend 
} from 'recharts';

const data = [
  { subject: 'Reasoning', A: 98, B: 75, fullMark: 150 },
  { subject: 'Speed', A: 65, B: 99, fullMark: 150 },
  { subject: 'Coding', A: 95, B: 70, fullMark: 150 },
  { subject: 'Multimodal', A: 90, B: 85, fullMark: 150 },
  { subject: 'Cost', A: 60, B: 95, fullMark: 150 },
];

const ComparisonChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-[400px]">
      <h3 className="text-lg font-bold mb-6 text-slate-800">Performance Comparison</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Gemini 3 Pro"
            dataKey="A"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.5}
          />
          <Radar
            name="Gemini 3 Flash"
            dataKey="B"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.5}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;
