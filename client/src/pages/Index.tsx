import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import { AnimationContext } from '@/contexts/AnimationContext';

// Cover media
const cover1Image = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566013/cover1_emzxqg.jpg';
const cover2Image = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566013/cover2_pii7wz.jpg';
const cover3Image = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566011/cover3_ouglyk.jpg';
const cover4Image = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566011/_JC17810_j5k3om.jpg';
const cover5Image = 'https://res.cloudinary.com/dsitzod3c/image/upload/v1763566012/_RON1982_zl4m5i.jpg';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);
    
    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Background music playback failed:', error);
      }
    }
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
        data-testid="background-audio"
        src="https://res.cloudinary.com/dnokhmes0/video/upload/v1762595790/ytmp3free.cc_rico-blanco-balisong-transformed-2016-youtubemp3free.org_w6epbo.mp3"
      />

      <MusicConsentPopup 
        onConsent={handleMusicConsent} 
        isVisible={showMusicConsent} 
      />

      <div className="min-h-screen relative">
        <Navigation />

        <main className="relative z-10 space-y-0">
          <HeroSection audioRef={audioRef} />
        <InvitationRevealSection />
        <CountdownSection />
        <ImageLoop />
        <StorySection />
        <ScrollTriggeredTimeline />
        <CoverSection
          imageUrl={cover4Image}
          alt="Neil & Precious Wedding Cover 4"
        />
        <VenueSection />
        <CoverSection
          imageUrl={cover2Image}
          alt="Neil & Precious Wedding Cover 2"
        />
        <DressCodeSection />
        <HashtagGiftsSection />
        <MemorableMomentsSection />
        <CoverSection
          imageUrl={cover1Image}
          alt="Neil & Precious Wedding Cover 1"
        />
        <RSVPSection />
        <EntourageSection />
        <CoverSection
          imageUrl={cover3Image}
          alt="Neil & Precious Wedding Cover 3"
        />
        <FAQSection />
        <CoverSection
          imageUrl={cover5Image}
          alt="Neil & Precious Wedding Cover 5"
        />
        <Footer />
      </main>
    </div>
    </AnimationContext.Provider>
  );
};

export default Index;