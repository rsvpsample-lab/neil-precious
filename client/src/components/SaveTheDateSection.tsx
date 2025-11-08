interface SaveTheDateSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const SaveTheDateSection = ({ audioRef }: SaveTheDateSectionProps) => {
  return (
    <section className="bg-white relative w-full overflow-hidden py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl text-center text-primary mb-8"
          style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
          data-testid="text-save-the-date-title"
        >
          Save the Date
        </h2>
        
        <div className="relative w-full flex items-center justify-center py-24">
          <p 
            className="text-6xl md:text-7xl text-center text-primary/30"
            style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
            data-testid="text-coming-soon"
          >
            Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDateSection;
