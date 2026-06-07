import React from 'react';
import { motion } from 'framer-motion';

interface DataPoint {
  label: string;
  value: number;
}

interface AnalyticsChartProps {
  title: string;
  data: DataPoint[];
  color?: string;
  suffix?: string;
}

export default function AnalyticsChart({ title, data, color = "bg-primary", suffix = "" }: AnalyticsChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="p-6 bg-surface border border-surface/50 rounded-2xl flex flex-col h-full">
      <h3 className="text-sm font-medium text-text-muted mb-6 uppercase tracking-wider">{title}</h3>
      
      <div className="flex-grow flex items-end gap-3 min-h-[150px]">
        {data.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] font-bold px-2 py-1 rounded pointer-events-none whitespace-nowrap z-10">
              {item.value}{suffix}
            </div>
            
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: `${(item.value / maxValue) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className={`w-full ${color} rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity min-h-[4px]`}
            />
            <span className="text-[10px] text-text-muted font-medium truncate w-full text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}