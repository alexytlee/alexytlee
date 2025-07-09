// Quotes for background display
const quotes = [
  { 'i will prepare and some day my chance will come.': 'abraham lincoln' },
  {
    'if you want to go fast, go alone. if you want to go far, go together.':
      'african proverb',
  },
  {
    'do not pray for an easy life, pray for the strength to endure a difficult one.':
      'bruce lee',
  },
  {
    'i think it is possible for ordinary people to choose to be extraordinary.':
      'elon musk',
  },
  {
    "when i was a little kid, i was really scared of the dark. but then i came to understand, dark just means the absence of photons in the visible wavelength. then i thought, well, it's really silly to be afraid of a lack of photons. then i wasn't afraid of the dark anymore after that.":
      'elon musk',
  },
  {
    'once we realize that imperfect understanding is the human condition there is no shame in being wrong, only in failing to correct our mistakes.':
      'george soros',
  },
  {
    'do not judge me by my successes, judge me by how many times i fell down and got back up again.':
      'nelson mandela',
  },
  { 'markets are never wrong, opinions often are.': 'jesse livermore' },
  {
    "when you grow up you tend to get told that the world is the way it is and your life is just to live your life inside the world. try not to bash into the walls too much. try to have a nice family life, have fun, save a little money. that's a very limited life. life can be much broader once you discover one simple fact: everything around you that you call life was made up by people that were no smarter than you. and you can change it, you can influence it. once you learn that, you'll never be the same again.":
      'steve jobs',
  },
  {
    "fearlessness means taking the first step, even if you don't know where it will take you. it means being driven by a higher purpose, rather than by applause. it means knowing that you reveal your character when you stand apart, more than when you stand with the crowd.":
      'tim cook',
  },
  {
    "the separation of talent and skill is one of the greatest misunderstood concepts for people who are trying to excel. talent you have naturally. skill is only developed by hours and hours and hours of beating on your craft. where i excel is ridiculous, sickening work ethic. while the other guy's sleeping, i'm working. while the other guy's eating, i'm working. there's no easy way around it. no matter how talented you are, your talent is going to fail you if you're not skilled. if you don't study, if you don't work really hard and dedicate yourself to being better every single day, you'll never be able to communicate with people the way that you want. the only thing that i see that is distinctly different about me is: i'm not afraid to die on a treadmill. you might have more talent than me; you might be smarter than me. but if we get on a treadmill together, there's two things: you're getting off first, or i'm gonna die. it's really that simple.":
      'will smith',
  },
  { '君子不患無位，患所以立。': '孔子' },
  { '做人如果冇夢想，同條咸魚有咩分别呀？': '周星馳' },
  { '金錢係上帝，健康係財富！': '老豆' },
];

let currentQuoteIndex = 0;

// Ticker quote rotation
function updateTicker() {
  const quoteTextElement = document.querySelector('.ticker-quote .quote-text');
  const quoteAuthorElement = document.querySelector(
    '.ticker-quote .quote-author'
  );

  if (!quoteTextElement || !quoteAuthorElement) {
    return;
  }

  // Get random quote (avoiding the same quote twice in a row)
  let newQuoteIndex;
  do {
    newQuoteIndex = Math.floor(Math.random() * quotes.length);
  } while (newQuoteIndex === currentQuoteIndex && quotes.length > 1);

  currentQuoteIndex = newQuoteIndex;

  const currentQuote = quotes[currentQuoteIndex];
  const quoteText = Object.keys(currentQuote)[0];
  const quoteAuthor = currentQuote[quoteText];

  // Update content
  quoteTextElement.textContent = quoteText;
  quoteAuthorElement.textContent = quoteAuthor;
}

// Initialize ticker quote system
function initTicker() {
  // Show first quote immediately
  updateTicker();

  // Rotate quotes every 35 seconds (matches animation duration)
  setInterval(updateTicker, 35000);
}

// Email obfuscation protection
function initEmailProtection() {
  const emailLink = document.getElementById('email-link');

  if (emailLink) {
    emailLink.addEventListener('click', function (e) {
      e.preventDefault();

      // Get obfuscated email parts
      const user = this.getAttribute('data-user');
      const domain = this.getAttribute('data-domain');

      // Additional obfuscation layer
      const atSymbol = String.fromCharCode(64); // @ symbol
      const dotSymbol = String.fromCharCode(46); // . symbol

      // Construct email
      const email = user + atSymbol + domain;

      // Create mailto link
      const mailtoLink = 'mailto:' + email;

      // Open email client
      window.location.href = mailtoLink;
    });

    // Add hover effect to show it's clickable
    emailLink.addEventListener('mouseenter', function () {
      this.style.cursor = 'pointer';
    });
  }
}

// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Initialize email protection
  initEmailProtection();

  // Initialize ticker quotes
  initTicker();

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });

  // Highlight active navigation link
  function highlightActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Add scroll listener for active navigation
  window.addEventListener('scroll', highlightActiveNav);

  // Animate elements on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.about-content');

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }

  // Initialize animation styles
  function initAnimations() {
    const elements = document.querySelectorAll('.about-content');

    elements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition =
        'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
  }

  // Initialize animations and scroll listener
  initAnimations();
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load

  // Handle navbar collapse on mobile
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse) {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  }

  // Add typing animation to hero text
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // Optional: Add typing effect to hero subtitle
  const subtitleElement = document.querySelector('.subtitle');
  if (subtitleElement) {
    const originalText = subtitleElement.textContent;
    setTimeout(() => {
      typeWriter(subtitleElement, originalText, 50);
    }, 1000);
  }

  // Add loading state management
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');

    // Trigger initial animations
    setTimeout(() => {
      animateOnScroll();
    }, 100);
  });

  // Email link validation (now handled by obfuscation)
  // Removed previous email validation since we're using obfuscation

  // Add smooth reveal animation for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections for reveal animation
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });
});

// Add a subtle parallax effect to hero section
window.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector('.hero-section');

  if (heroSection) {
    const rate = scrolled * -0.3;
    heroSection.style.transform = `translateY(${rate}px)`;
  }
});

// Handle external links (if any are added later)
document.addEventListener('click', function (e) {
  const link = e.target.closest('a');

  if (link && link.hostname !== window.location.hostname) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// Console easter egg
console.log(`
    ╔════════════════════════════════════════╗
    ║                                        ║
    ║     👋 Hello, fellow developer!        ║
    ║                                        ║
    ║     Thanks for checking out my         ║
    ║     portfolio source code!             ║
    ║                                        ║
    ║     Feel free to reach out if you      ║
    ║     have any questions or want to      ║
    ║     collaborate on something cool.     ║
    ║                                        ║
    ║     - Alex                             ║
    ║                                        ║
    ╚════════════════════════════════════════╝
`);
