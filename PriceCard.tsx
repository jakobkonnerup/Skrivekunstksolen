import InfoBox from "./InfoBox";
import CTAButton from "./CTAButton";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  duration: string;
  hours: string;
  price: string;
}

export default function PriceCard({ title, duration, hours, price }: Props) 

{

    const navigate = useNavigate();
  return (
    <div className="bg-light-gold shadow-lg rounded-2xl p-6 border border-gray-200 space-y-6">
      <h2 className="text-4xl font-display text-black">{title}</h2>

      <div className="space-y-10">
        <InfoBox label="Forløbets varighed" value={duration} />
        <InfoBox label="Undervisningstimer" value={hours} />
        <InfoBox label="Pris" value={price} />
      </div>
        <div className="flex justify-end">
            <CTAButton variant="red" onClick={() => navigate("/ansog")}>Søg ind nu</CTAButton>
        </div>
      
    </div>
  );
}
