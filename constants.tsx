
import { GeminiModelInfo, ModelSeries } from './types';

export const GEMINI_MODELS: GeminiModelInfo[] = [
  {
    id: 'gemini-3-pro-preview',
    name: 'Gemini 3 Pro Preview',
    alias: 'The Brain',
    series: ModelSeries.GEMINI_3,
    description: 'The most capable model for complex reasoning, coding, and multi-step tasks.',
    bestFor: ['Advanced Coding', 'Scientific Research', 'Complex Logical Reasoning'],
    capabilities: [
      { name: 'Reasoning', description: 'Exceptional deep-thinking capabilities.', icon: '🧠' },
      { name: 'Coding', description: 'Top-tier code generation and debugging.', icon: '💻' }
    ],
    technicalSpecs: {
      contextWindow: 'Large (Preview)',
      maxOutput: 8192
    }
  },
  {
    id: 'gemini-3-flash-preview',
    name: 'Gemini 3 Flash Preview',
    alias: 'The Speedster',
    series: ModelSeries.GEMINI_3,
    description: 'Optimized for speed and efficiency while maintaining high performance across text tasks.',
    bestFor: ['Summarization', 'Chatbots', 'Fast Q&A'],
    capabilities: [
      { name: 'Speed', description: 'Ultra-low latency responses.', icon: '⚡' },
      { name: 'Efficiency', description: 'Cost-effective high performance.', icon: '📊' }
    ],
    technicalSpecs: {
      contextWindow: 'Standard',
      maxOutput: 4096
    }
  },
  {
    id: 'gemini-2.5-flash-native-audio-preview-12-2025',
    name: 'Gemini 2.5 Flash Native Audio',
    alias: 'The Listener',
    series: ModelSeries.GEMINI_2_5,
    description: 'Specialized for low-latency, real-time audio and video conversations.',
    bestFor: ['Voice Assistants', 'Real-time Translation', 'Interactive Audio'],
    capabilities: [
      { name: 'Native Audio', description: 'Direct audio input/output processing.', icon: '🎙️' },
      { name: 'Low Latency', description: 'Designed for fluid conversation.', icon: '🕒' }
    ],
    technicalSpecs: {
      contextWindow: 'Multimodal',
    }
  },
  {
    id: 'veo-3.1-generate-preview',
    name: 'Veo 3.1',
    alias: 'The Director',
    series: ModelSeries.SPECIALIZED,
    description: 'State-of-the-art video generation capable of 1080p high-quality cinematics.',
    bestFor: ['Cinematic Video', 'Content Creation', 'Visual Storytelling'],
    capabilities: [
      { name: 'Video Gen', description: '720p/1080p video creation.', icon: '🎬' },
      { name: 'Animation', description: 'Fluid motion and realistic physics.', icon: '✨' }
    ],
    technicalSpecs: {
      contextWindow: 'Video Prompt',
    }
  },
  {
    id: 'gemini-3-pro-image-preview',
    name: 'Gemini 3 Pro Image',
    alias: 'The Artist',
    series: ModelSeries.SPECIALIZED,
    description: 'High-quality image generation supporting up to 4K resolution with search grounding.',
    bestFor: ['Professional Artwork', 'Marketing Assets', 'High-res Visualization'],
    capabilities: [
      { name: '4K Rendering', description: 'Ultra-high definition imagery.', icon: '🖼️' },
      { name: 'Search Grounding', description: 'Real-time info for accurate visuals.', icon: '🔍' }
    ],
    technicalSpecs: {
      contextWindow: 'Visual Prompt',
    }
  }
];
