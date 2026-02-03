
import React from 'react';
import { GeminiModelInfo } from '../types';

interface ModelCardProps {
  model: GeminiModelInfo;
  onClick: (model: GeminiModelInfo) => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onClick }) => {
  return (
    <div 
      onClick={() => onClick(model)}
      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold uppercase tracking-wider">
          {model.series}
        </span>
        <span className="text-2xl">{model.capabilities[0].icon}</span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
        {model.name}
      </h3>
      <p className="text-sm italic text-slate-500 mb-4">{model.alias}</p>
      
      <p className="text-slate-600 text-sm mb-6 flex-grow">
        {model.description}
      </p>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {model.bestFor.map((item, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-50 flex items-center text-indigo-500 font-semibold text-sm">
        View Details 
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default ModelCard;
