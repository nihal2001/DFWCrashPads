import siteConfig from '@/config/site.json';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-20"
        style={{ background: 'var(--background)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <div
              className="inline-block mb-4 px-8 py-3 rounded-full text-sm font-medium"
              style={{
                background: '#e8f5e9',
                color: 'var(--moss)',
                border: '2px solid #7cb342'
              }}
            >
              Dallas-Fort Worth
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
              style={{
                color: 'var(--forest)',
                fontFamily: 'var(--font-display)'
              }}
            >
              {siteConfig.businessName}
            </h1>

            <p
              className="text-xl sm:text-2xl md:text-3xl mb-4"
              style={{
                color: 'var(--moss)',
                fontFamily: 'var(--font-display)',
                fontWeight: 400
              }}
            >
              {siteConfig.tagline}
            </p>

            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto mb-12"
              style={{ color: 'var(--foreground)' }}
            >
              {siteConfig.description}
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s backwards' }}
          >
            <a
              href="#pricing"
              className="px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{
                background: '#7cb342',
                color: 'var(--white)',
                boxShadow: '0 6px 20px rgba(124, 179, 66, 0.4)'
              }}
            >
              View Pricing
            </a>

            <a
              href="#contact"
              className="px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{
                background: '#ff9800',
                color: 'var(--white)',
                boxShadow: '0 6px 20px rgba(255, 152, 0, 0.4)'
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="relative py-24 px-6 sm:px-12"
        style={{
          background: '#fff9f0'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              style={{
                color: 'var(--forest)',
                fontFamily: 'var(--font-display)'
              }}
            >
              Daily Rental Rates
            </h2>
            <p
              className="text-lg sm:text-xl"
              style={{ color: 'var(--moss)' }}
            >
              All prices are per day. If needed we can work out early drop off the next day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
            {Object.entries(siteConfig.pricing).map(([key, plan], index) => {
              const isPopular = 'popular' in plan && plan.popular;

              // Use a simple color scheme - just alternate between two soft colors
              const cardColor = isPopular ? '#e8f5e9' : '#ffffff';

              return (
                <div
                  key={key}
                  className="relative"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}
                >
                  {isPopular && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 text-sm font-bold rounded-full z-10"
                      style={{
                        background: '#7cb342',
                        color: 'var(--white)',
                        boxShadow: '0 4px 12px rgba(124, 179, 66, 0.3)'
                      }}
                    >
                      ⭐ POPULAR
                    </div>
                  )}

                  <div
                    className="h-full p-10 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-center"
                    style={{
                      background: cardColor,
                      border: isPopular ? '3px solid #7cb342' : '2px solid #e0e0e0',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div
                      className="text-sm font-medium mb-2 uppercase tracking-wider"
                      style={{ color: 'var(--sage)' }}
                    >
                      {plan.size}
                    </div>

                    <div
                      className="text-5xl font-bold mb-2"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: 'var(--forest)'
                      }}
                    >
                      {plan.price}
                      <span
                        className="text-lg font-normal"
                        style={{ color: 'var(--moss)' }}
                      >
                        /day
                      </span>
                    </div>

                    <div
                      className="text-sm font-medium mb-4 pb-4"
                      style={{
                        color: 'var(--moss)',
                        borderBottom: '1px solid var(--sand)'
                      }}
                    >
                      {plan.dimensions}
                    </div>

                    <p
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {plan.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 sm:px-12"
        style={{ background: 'var(--background)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              style={{
                color: 'var(--forest)',
                fontFamily: 'var(--font-display)'
              }}
            >
              Contact Us
            </h2>
            <p
              className="text-lg sm:text-xl font-medium"
              style={{ color: 'var(--terracotta)' }}
            >
              {siteConfig.contact.reservationMessage}
            </p>
          </div>

          <div
            className="p-12 sm:p-16 rounded-3xl"
            style={{
              background: '#ffffff',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
              border: '3px solid #e0e0e0'
            }}
          >
            <div className="space-y-6">
              {/* Email */}
              <div
                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{
                  background: '#f5f5f5',
                  border: '2px solid #e0e0e0'
                }}
              >
                <div
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{ color: 'var(--moss)' }}
                >
                  📧 Email
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="contact-link text-2xl font-medium"
                  style={{
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Phone */}
              <div
                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{
                  background: '#f5f5f5',
                  border: '2px solid #e0e0e0'
                }}
              >
                <div
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{ color: 'var(--moss)' }}
                >
                  📱 Phone
                </div>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
                  className="contact-link text-2xl font-medium"
                  style={{
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              {/* Instagram */}
              <div
                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{
                  background: '#f5f5f5',
                  border: '2px solid #e0e0e0'
                }}
              >
                <div
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{ color: 'var(--moss)' }}
                >
                  📸 Instagram
                </div>
                <a
                  href={`https://instagram.com/${siteConfig.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link text-2xl font-medium flex items-center gap-3"
                  style={{
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {siteConfig.contact.instagram}
                </a>
              </div>
            </div>

            <div
              className="mt-10 pt-8"
              style={{
                borderTop: '2px solid #e0e0e0'
              }}
            >
              <p
                className="text-center text-lg"
                style={{ color: 'var(--moss)' }}
              >
                We'll get back to you as soon as possible to confirm your reservation!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-16 px-6 text-center"
        style={{ background: 'var(--cream)' }}
      >
        <p
          className="text-sm font-medium"
          style={{ color: 'var(--moss)' }}
        >
          © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
