import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        absolute top-10 left-5 z-50
        text-sand
        transition-all duration-300 ease-out
        hover:opacity-80 hover:-translate-x-1
      "
      aria-label="Gå tilbage"
    >
      <ArrowLeft size={42} />
    </button>
  );
}
