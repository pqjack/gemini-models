
import React, { useState } from 'react';
import { GEMINI_MODELS } from './constants';
import { GeminiModelInfo, ModelSeries } from './types';
import ModelCard from './components/ModelCard';
import ComparisonChart from './components/ComparisonChart';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<GeminiModelInfo | null>(null);
  const [filter, setFilter] = useState<ModelSeries | 'All'>('All');

  const filteredModels = filter === 'All' 
    ? GEMINI_MODELS 
    : GEMINI_MODELS.filter(m => m.series === filter);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Gemini Explorer
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#models" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Models</a>
            <a href="#comparison" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Comparison</a>
            <a href="#assistant" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Assistant</a>
          </nav>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md">
            Get Started
          </button>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in">
            Next Generation AI
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Discover the <span className="text-indigo-600">Future</span> of Reasoning
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Google Gemini represents a paradigm shift in AI, offering unprecedented multimodal capabilities, 
            lightning-fast reasoning, and specialized tools for every creative and technical need.
          </p>
          <div className="flex justify-center space-x-4 pt-6">
            <a href="#models" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg">
              Explore Models
            </a>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">
              Documentation
            </button>
          </div>
        </section>

        {/* Model Filter and Grid */}
        <section id="models" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Model Lineup</h3>
              <p className="text-slate-500">Choose the right Gemini for your project</p>
            </div>
            <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-100 overflow-x-auto">
              {['All', ModelSeries.GEMINI_3, ModelSeries.GEMINI_2_5, ModelSeries.SPECIALIZED].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    filter === item 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModels.map((model) => (
              <ModelCard 
                key={model.id} 
                model={model} 
                onClick={(m) => setSelectedModel(m)}
              />
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">Technical Benchmarks</h3>
            <p className="text-lg text-slate-600">
              Our models are optimized for different performance profiles. Whether you need the deep logical reasoning 
              of <strong>Gemini 3 Pro</strong> or the near-instant responses of <strong>Gemini 3 Flash</strong>, 
              the radar chart visualizes the balance of capabilities.
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Extreme Reasoning', desc: 'Gemini 3 series handles complex chain-of-thought.' },
                { title: 'Native Multimodality', desc: 'Models process audio, video, and text seamlessly.' },
                { title: 'Infinite Context', desc: 'Handle massive datasets with large context windows.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-1 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-[10px]">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ComparisonChart />
        </section>

        {/* AI Assistant Section */}
        <section id="assistant" className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Still Not Sure?</h3>
              <p className="text-indigo-100 text-lg">
                Our AI-powered Gemini Expert is here to help you navigate the features and select the perfect 
                model for your specific use case. Ask about pricing, tokens, or performance benchmarks.
              </p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-indigo-600" src={`https://picsum.photos/seed/${i}/100/100`} alt="User" />
                ))}
                <div className="w-10 h-10 rounded-full bg-indigo-400 border-2 border-indigo-600 flex items-center justify-center text-xs font-bold">+5k</div>
              </div>
              <p className="text-xs text-indigo-200">Joined by 5,000+ developers this month</p>
            </div>
            <Assistant />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">G</div>
              <span className="font-bold">Gemini Explorer</span>
            </div>
            <p className="max-w-xs text-sm">
              Empowering the world with advanced AI capabilities. Built on the Google Gemini API.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} Gemini Explorer. All rights reserved. Google and Gemini are trademarks of Google LLC.
        </div>
      </footer>

      {/* Model Detail Modal */}
      {selectedModel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedModel(null)}></div>
          <div className="relative bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-scale-in">
            <button 
              onClick={() => setSelectedModel(null)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{selectedModel.capabilities[0].icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedModel.name}</h3>
                  <span className="text-indigo-600 font-medium text-sm">{selectedModel.series}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 border-b pb-2">Overview</h4>
                <p className="text-slate-600">{selectedModel.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Best For</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    {selectedModel.bestFor.map((b, i) => <li key={i}>• {b}</li>)}
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Technical Specs</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>Context: {selectedModel.technicalSpecs.contextWindow}</li>
                    {selectedModel.technicalSpecs.maxOutput && <li>Max Output: {selectedModel.technicalSpecs.maxOutput}</li>}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 border-b pb-2">Key Capabilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedModel.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center space-x-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                      <span className="text-xl">{cap.icon}</span>
                      <div>
                        <div className="font-bold text-sm">{cap.name}</div>
                        <div className="text-xs text-slate-500">{cap.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg">
                  Deploy this Model
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
