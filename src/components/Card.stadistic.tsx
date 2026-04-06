import './Card.stadistic.css';

interface StadisticProps {
  icon: string;
  value: string;
  label: string;
}

export const StadisticCard = ({ icon, value, label }: StadisticProps) => {
  return (
    <div className="stadistic-card">
      <span className="stadistic-icon">{icon}</span>
      <h2 className="stadistic-value">{value}</h2>
      <p className="stadistic-label">{label}</p>
    </div>
  );
};