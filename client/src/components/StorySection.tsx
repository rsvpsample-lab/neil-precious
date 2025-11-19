import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const storyCoupleImage = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566011/our_story_wkumes.jpg';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      data-testid="section-story"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center text-foreground mb-3" data-testid="text-story-title">
          OUR STORY
        </h2>
        <p className="text-center text-sm sm:text-base text-foreground/60 italic">
          A couple, a spark, and a shared love for tacos...
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
        >
          {/* Left Side - Text Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 relative">
            {/* Decorative Icon */}
            <div className="mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            {/* Complete Story */}
            <div className="space-y-6" data-testid="text-story-content">
              <p className="text-lg leading-relaxed text-foreground/80">
                It all began ten years ago within the humble grounds of Mindanao State University, where two hearts destined to meet found each other in the most unexpected way. He was a young engineering student, driven by numbers and dreams, while she was a budding elementary education major, filled with warmth, patience, and a heart as gentle as her smile.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Though their worlds were different and their schedules often kept them apart, love always found a way. Between busy classes, campus strolls under the golden sunset and late-night talks they found a love that grew stronger each day.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Through the years, their bond only grew stronger. What started as campus companionship blossomed into a love that withstood distance, challenges, and time. And now, after a decade of shared dreams and unwavering devotion, they are finally ready to begin their forever—a new chapter written with love, faith, and the promise of always choosing each other.
              </p>
            </div>

            {/* Decorative Rose - Bottom Right */}
            <div className="absolute bottom-6 right-6 text-red-500">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last">
            <img
              src={storyCoupleImage}
              alt="Our Love Story"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-testid="img-story-background"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
