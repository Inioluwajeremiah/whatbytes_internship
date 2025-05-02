export interface IStatsData {
  rank: number | string;
  percentile: number | string;
  correctAnswers: number | string;
}

export interface IQuickStats {
  statsData: IStatsData;
}

export interface IUpdateScores {
  statsData: IStatsData;
  totalQuestion: number;
  closeModal: () => void;
  handleFormInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IQuestionAnalysis {
  score: number;
  totalQuestion: number;
}

export interface IGraphData {
  name: string;
  value: number;
}
export interface IQuestionAnalysisGraphData {
  data: IGraphData[];
}
export interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: {
    name: string;
    value: number;
    [key: string]: any; // for extensibility
  };
  percent: number;
  value: number;
}
