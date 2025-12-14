interface Props {
    label: string;
    value: string;
  }
  
  export default function InfoBox({ label, value }: Props) {
    return (
      <div className="flex flex-row justify-between items-center rounded-2xl pl-4 bg-white font-light">
        <p className="text-black font-normal">{label}</p>
        <p className="text-black bg-standard-blue rounded-2xl py-2 px-4">{value}</p>
      </div>
    );
  }
  