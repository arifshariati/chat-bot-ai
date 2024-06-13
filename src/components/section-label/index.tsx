type SectionProps = {
  label: string;
  message: string;
};

const Section = ({ label, message }: SectionProps) => {
  return (
    <div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm font-light">{message}</p>
    </div>
  );
};

export default Section;
