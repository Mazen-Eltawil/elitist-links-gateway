const AboutPage = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Main Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wider">The Elitist Links Story</h1>
      </div>

      {/* Two-Column Layout for Story and Logo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
        {/* Left Column: Text Content */}
        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
          <p>
            Founded from a passion for horological excellence, Elitist Links has become the trusted bridge between discerning collectors and their dream timepieces. Our expertise spans decades of watch curation, authentication, and advisory services.
          </p>
          <p>
            We understand that each watch tells a story – of craftsmanship, heritage, and personal significance. That's why we're dedicated to ensuring every timepiece in our collection meets the highest standards of quality and authenticity.
          </p>
        </div>

        {/* Right Column: Logo and Stats */}
        <div className="space-y-8">
          <div className="flex justify-center items-center h-80">
            <img
              src="/images/logo-shield-transparent.png"
              alt="Elitist Links Shield Logo"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-primary-accent">500+</p>
              <p className="text-sm text-gray-400">Watches Curated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-accent">15+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-accent">200+</p>
              <p className="text-sm text-gray-400">Happy Collectors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="text-center py-16 border-t border-secondary-accent">
        <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-secondary-accent flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Authentication</h3>
            <p className="text-gray-400">Every timepiece is thoroughly authenticated by our expert team using advanced verification processes.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-secondary-accent flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Curation</h3>
            <p className="text-gray-400">We carefully select only the finest examples, ensuring each watch meets our exacting standards.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-secondary-accent flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Service</h3>
            <p className="text-gray-400">Our personalized service ensures a seamless experience from discovery to delivery.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;