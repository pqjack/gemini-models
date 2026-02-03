
export enum ModelSeries {
  GEMINI_3 = 'Gemini 3',
  GEMINI_2_5 = 'Gemini 2.5',
  SPECIALIZED = 'Specialized'
}

export interface ModelCapability {
  name: string;
  description: string;
  icon: string;
}

export interface GeminiModelInfo {
  id: string;
  name: string;
  alias: string;
  series: ModelSeries;
  description: string;
  bestFor: string[];
  capabilities: ModelCapability[];
  technicalSpecs: {
    contextWindow: string;
    maxOutput?: number;
    trainingData?: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
