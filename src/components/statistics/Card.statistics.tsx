import './Card.statistics.css';

interface StatisticProps {
  icon: string;
  value: string;
  label: string;
}

export const StatisticCard = ({ icon, value, label }: StatisticProps) => {
  return (
    <div className="statistic-card">
      <span className="statistic-icon">{icon}</span>
      <h2 className="statistic-value">{value}</h2>
      <p className="statistic-label">{label}</p>
    </div>
  );
};