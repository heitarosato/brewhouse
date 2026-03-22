export interface Work {
  category: string;
  title: string;
  description: string;
}

export const works: Work[] = [
  {
    category: '中長期戦略・計画',
    title: '和食業態ポートフォリオ企業の中計策定',
    description: '5ヶ年計画策定、業態間の選択と集中、積極出店戦略の意思決定支援',
  },
  {
    category: '経営機能強化',
    title: '経営企画部門ハンズオン支援',
    description: '外食・リテール企業で経営アジェンダ推進・KPI管理・投資判断を右腕として支援',
  },
  {
    category: 'M&A',
    title: 'ラーメン業態のビジネスDD',
    description: '業態強みの言語化、出店ポテンシャル・収益改善余地特定、将来計画策定',
  },
  {
    category: 'M&A',
    title: 'ラーメン・アパレル業態のPMI',
    description: '経営管理・商品開発分野を中心にPMI活動を支援',
  },
  {
    category: '海外事業',
    title: '海外不採算飲食事業の再建',
    description: 'コスト削減推進、第三者への売却・FC化を実現',
  },
  {
    category: '業態開発・進化',
    title: 'ファミレス業態の業態進化支援',
    description: '業態価値の再定義、店舗モデル見直し、インナーコミュニケーション支援',
  },
];
