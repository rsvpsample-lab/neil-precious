import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    parents: [
      { label: "Parents of the Groom", names: ["Bonifacio Tamonman", "Lolita Tamonman", "Mark Ian Tamonman"] },
      { label: "Parents of the Bride", names: ["Alfred Patron", "Ruby Patron"] }
    ],
    principalSponsors: {
      title: "Principal Sponsors",
      couples: [
        { man: "Roger Patron", woman: "Eden Patron" },
        { man: "Alejandro Pineda", woman: "Leonorita Pineda" },
        { man: "Danilo Capares", woman: "Maysie Capares" },
        { man: "Alfonso Maraggun", woman: "Maricel Maraggun" },
        { man: "Joseph Lagura", woman: "Gina Lagura" },
        { man: "Edwin Saplad", woman: "Revelita Saplad" },
        { man: "Jacinto Tugade", woman: "Angelita Tugade" },
        { man: "Romulo Paclibar", woman: "Berly Paclibar" },
        { man: "Rolando Bandiola", woman: "Gemma Bandiola" },
        { man: "Edgar Saplad", woman: "Melly Saplad" },
        { man: "Edilberto Saplad", woman: "Lea Saplad" },
        { man: "Efren Canonigo", woman: "Feln Canonigo" }
      ],
      soloMen: [
        "PCOL. REYNALDO JR. DENILA",
        "PCOL. ALLADIN TAMAYO",
        "PCOL NOEL SILVOSA",
        "Arnold Campos",
        "Erwin Maglinte",
        "Jan Osorio",
        "Wilfredo Saplad",
        "Archimedes Labao"
      ],
      soloWomen: [
        "Carmelita Patron",
        "Michele Omgia",
        "Rizalyn Resicco",
        "Joermay Sala",
        "Jessica Verallo",
        "Rowena Acana",
        "Elma Saplad",
        "Mercy Baay",
        "Cora Jao",
        "Remia Carolino",
        "Judith Benito",
        "Lina Coloso",
        "Marina Gabato",
        "Leonisa Guirhem",
        "Armie Kusela Honesto",
        "Jocelyn Barredo"
      ]
    },
    secondarySponsors: {
      title: "Secondary Sponsors",
      roles: [
        { role: "Candle", names: ["Welcar Patron", "Annabelle Patron"] },
        { role: "Veil", names: ["Remart Saplad", "Kerjoy Saplad"] },
        { role: "Cord", names: ["Expedito Solis Jr", "Jennifer Solis"] }
      ]
    },
    bestMan: { name: "Omegs Gryeane Solis", role: "Best Man" },
    maidOfHonor: { name: "Shanaden D. Patron", role: "Maid of Honor" },
    groomsmen: [
      "Judah Ray Pagtalunan",
      "Alfon Philip Sabido",
      "Azarel John Siasico",
      "Wesley James Villaver",
      "Raven Dave Suarez"
    ],
    bridesmaids: [
      "Michaela Nicole Tuyco",
      "Chique Kyle Ann Florin",
      "Denisse Rianne Ferolino",
      "Mercianne Joy Siasico",
      "Christine Dale Yuson"
    ],
    bearers: [
      { role: "Ring Bearer", names: ["Kim Ivan M. Lastimosa"] },
      { role: "Coin Bearer", names: ["Toby Fennell L. Lagutan"] },
      { role: "Bible Bearer", names: ["Alwin L. Clavito"] }
    ],
    flowerGirls: [
      "Elle Viatrix P. Rabe",
      "Janiyah Zoe G. Palino",
      "Zhya Paulina L. Perez"
    ]
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold-bright mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        {/* Parents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                  {parent.label}
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`parent-name-${index}-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="principal-sponsors-title">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="max-w-4xl mx-auto space-y-2">
            {/* Couples - Side by Side */}
            {entourageData.principalSponsors.couples.map((couple, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 md:gap-8" data-testid={`principal-sponsor-couple-${index}`}>
                <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-right" data-testid={`principal-sponsor-couple-man-${index}`}>
                  {couple.man}
                </p>
                <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-left" data-testid={`principal-sponsor-couple-woman-${index}`}>
                  {couple.woman}
                </p>
              </div>
            ))}
            
            {/* Solo Men - Centered */}
            {entourageData.principalSponsors.soloMen.map((name, index) => (
              <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground text-center" data-testid={`principal-sponsor-solo-man-${index}`}>
                {name}
              </p>
            ))}
            
            {/* Solo Women - Centered */}
            {entourageData.principalSponsors.soloWomen.map((name, index) => (
              <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground text-center" data-testid={`principal-sponsor-solo-woman-${index}`}>
                {name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Secondary Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="secondary-sponsors-title">
            {entourageData.secondarySponsors.title}
          </h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.secondarySponsors.roles.map((item, index) => (
              <div key={index} className="text-center" data-testid={`secondary-sponsor-${item.role.toLowerCase()}`}>
                <h4 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-1 md:mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`${item.role.toLowerCase()}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Man and Maid of Honor */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.4 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="best-man-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.bestMan.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="best-man-name">
                {entourageData.bestMan.name}
              </p>
            </div>
            <div className="text-center" data-testid="maid-of-honor-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.maidOfHonor.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="maid-of-honor-name">
                {entourageData.maidOfHonor.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Groomsmen & Bridesmaids */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.6 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="groomsmen-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Groomsmen
              </h3>
              {entourageData.groomsmen.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-right" data-testid={`groomsman-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="bridesmaids-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Bridesmaids
              </h3>
              {entourageData.bridesmaids.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-left" data-testid={`bridesmaid-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bearers */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.bearers.map((item, index) => (
              <div key={index} className="text-center" data-testid={`bearer-${item.role.toLowerCase().replace(/\s+/g, '-')}`}>
                <h4 className="text-sm md:text-lg font-display font-semibold mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base font-telma text-foreground" data-testid={`${item.role.toLowerCase().replace(/\s+/g, '-')}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flower Girls */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.0 }}
        >
          <div className="text-center" data-testid="flower-girls-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Flower Girls
            </h3>
            <div className="grid grid-cols-3 gap-2 max-w-3xl mx-auto">
              {entourageData.flowerGirls.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`flower-girl-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
