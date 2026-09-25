import siteConfig from '@/config/site.json';

export default function Home() {
  const phone = siteConfig.contact.phone.replace(/[^0-9]/g, '');
  return (
    <div className="homepage" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header>
        <h1>{siteConfig.businessName}</h1>
        <p className="tagline">{siteConfig.tagline}</p>
        <nav aria-label="Main navigation">
          <a href="#top">⌂ Home</a><a href="#pricing">$ Rental rates</a><a href="#contact">✉ Contact us</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-label="Crash pad rentals">
          <div className="scene">
            <svg className="climbing-animation" viewBox="0 0 1536 1024" role="img" aria-labelledby="climbing-title">
              <title id="climbing-title">A smiling climber gently swings by one hand from a cartoon cliff above a Mad Rock crash pad.</title>
              <defs>
                {/* Trace the original photo so the climber keeps his exact appearance. */}
                <clipPath id="climber-cutout">
                  <path d="M578 51 Q582 42 591 44 L602 49 611 65 613 99 621 136 641 181 664 224 682 256 695 264 702 248 693 233 691 215 700 202 703 188 Q727 168 754 180 Q778 190 773 222 L763 244 752 256 747 274 778 282 813 283 830 282 865 277 918 270 956 259 966 244 973 230 974 216 Q980 207 984 216 L987 236 1009 226 1026 223 Q1033 225 1029 230 L1001 241 1036 229 Q1043 229 1042 235 L1007 252 1037 241 Q1044 242 1040 248 L1009 263 1030 255 Q1038 257 1031 263 L1006 278 985 278 971 283 927 300 880 315 831 326 817 343 803 352 787 344 777 372 770 403 775 419 768 443 749 456 735 487 714 516 705 538 690 558 682 577 672 601 653 631 633 657 619 678 616 695 609 718 Q595 740 569 735 Q549 731 558 711 L568 698 577 682 591 666 603 638 617 605 627 576 633 546 634 530 610 520 581 502 564 523 559 548 549 572 537 593 540 609 Q546 625 533 630 L511 624 503 615 481 617 Q467 610 478 601 L501 593 515 588 526 565 535 535 540 512 Q540 498 554 487 L581 469 610 448 635 427 653 418 648 391 645 353 633 326 624 308 629 293 642 280 639 263 622 226 611 190 603 153 599 115 594 87 593 64 581 59 Z" />
                </clipPath>
              </defs>
              <image href="/images/cliff-background.png" width="1536" height="1024" />
              <g className="swinging-climber">
                <image href="/images/dangling-climber.png" width="1536" height="1024" clipPath="url(#climber-cutout)" />
              </g>
            </svg>
            <div className="photo-caption">V1 in my gym</div>
          </div>
          <div className="hero-note">
            <span className="starburst">Let&apos;s<br />go climb!</span>
            <p>{siteConfig.description}</p>
            <a className="big-link" href="#pricing">Check out the rates »</a>
            <p className="handwritten">↓ your landing starts here ↓</p>
          </div>
        </section>

        <div className="divider" aria-hidden="true">▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲</div>
        <section className="paper-section" id="pricing" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading">★ Crash pad rental rates ★</h2>
          <div className="sale-offer">
            <p className="sale-label">{siteConfig.pricing.pad.saleLabel}</p>
            <h3>{siteConfig.pricing.pad.size}</h3>
            <p className="regular-rate">Regular rate: <s>{siteConfig.pricing.pad.regularPrice}/day</s></p>
            <p className="sale-price">{siteConfig.pricing.pad.price}<span> / day</span></p>
          </div>
          <p className="fine-print">If needed, we can work out early drop off the next day. Just ask!</p>
          <a className="retro-button" href="#contact">Reserve a pad!</a>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="mail-art" aria-hidden="true">✉</div>
          <div>
            <h2 id="contact-heading">Let&apos;s make it happen.</h2>
            <p>{siteConfig.contact.reservationMessage}</p>
            <dl className="contact-list">
              <div><dt>Text us (preferred)</dt><dd><a href={`sms:${phone}`}>{siteConfig.contact.phone}</a></dd></div>
              <div><dt>More of a phone person?</dt><dd><a href={`tel:${phone}`}>Give us a call</a></dd></div>
              <div><dt>Electronic mail</dt><dd><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></dd></div>
              <div><dt>Find us on Instagram</dt><dd><a href={`https://instagram.com/${siteConfig.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">{siteConfig.contact.instagram}</a></dd></div>
            </dl>
            <p className="fine-print">We&apos;ll get back to you as soon as possible to confirm your reservation!</p>
          </div>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} {siteConfig.businessName} · Dallas–Fort Worth, TX</p>
        <p className="footer-note">No fancy stuff. Just crash pads.</p>
      </footer>
    </div>
  );
}
