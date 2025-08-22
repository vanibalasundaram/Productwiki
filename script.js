// Product Team Wiki - Interactive JavaScript

class ProductTeamWiki {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupButtonEffects();
    this.setupCardAnimations();
    this.setupAccessibility();
    this.preloadCriticalResources();
    
    // Initialize animations when DOM is ready
    this.animateOnLoad();
  }

  setupEventListeners() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Handle external links with proper targeting
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
      link.addEventListener('click', (e) => {
        // Add small delay for better UX
        e.preventDefault();
        setTimeout(() => {
          window.open(link.href, '_blank', 'noopener,noreferrer');
        }, 100);
      });
    });

    // Window resize handler
    window.addEventListener('resize', this.throttle(() => {
      this.handleResize();
    }, 250));

    // Scroll handler for header effects
    window.addEventListener('scroll', this.throttle(() => {
      this.handleScroll();
    }, 16));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      this.handleKeyboard(e);
    });
  }

  setupButtonEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.createRipple(e, button);
      });

      // Add focus and hover states
      button.addEventListener('mouseenter', () => {
        this.animateButton(button, 'hover');
      });

      button.addEventListener('mouseleave', () => {
        this.animateButton(button, 'normal');
      });

      button.addEventListener('focus', () => {
        this.animateButton(button, 'focus');
      });

      button.addEventListener('blur', () => {
        this.animateButton(button, 'normal');
      });
    });
  }

  setupCardAnimations() {
    // Animate cards on hover
    const cards = document.querySelectorAll('.service-card, .update-card, .gallery-item');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.animateCard(card, 'hover');
      });

      card.addEventListener('mouseleave', () => {
        this.animateCard(card, 'normal');
      });

      card.addEventListener('focus', () => {
        this.animateCard(card, 'focus');
      });

      card.addEventListener('blur', () => {
        this.animateCard(card, 'normal');
      });
    });

    // Setup intersection observer for fade-in animations
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll('.hero-section, .quick-links-section, .recent-updates-section, .gallery-section, .roadmap-hero, .cta-section');
    sections.forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
    });

    // Observe individual cards with staggered delays
    const cards = document.querySelectorAll('.service-card, .update-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('fade-in');
      observer.observe(card);
    });
  }

  setupAccessibility() {
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .service-card, .update-card');
    
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent || element.querySelector('.card-title')?.textContent;
        if (text) {
          element.setAttribute('aria-label', text.trim());
        }
      }
    });

    // Add keyboard navigation for cards
    const cards = document.querySelectorAll('.service-card, .update-card');
    cards.forEach(card => {
      if (!card.getAttribute('tabindex')) {
        card.setAttribute('tabindex', '0');
      }
      
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const link = card.querySelector('a') || card;
          if (link.href) {
            link.click();
          }
        }
      });
    });
  }

  animateOnLoad() {
    // Animate hero section elements
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    
    if (heroTitle) {
      setTimeout(() => {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        requestAnimationFrame(() => {
          heroTitle.style.opacity = '1';
          heroTitle.style.transform = 'translateY(0)';
        });
      }, 100);
    }

    if (heroDescription) {
      setTimeout(() => {
        heroDescription.style.opacity = '0';
        heroDescription.style.transform = 'translateY(20px)';
        heroDescription.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        requestAnimationFrame(() => {
          heroDescription.style.opacity = '1';
          heroDescription.style.transform = 'translateY(0)';
        });
      }, 300);
    }

    // Animate chart bars if visible
    this.animateChartBars();
  }

  animateChartBars() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.transform = 'scaleY(0)';
        bar.style.transformOrigin = 'bottom';
        bar.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        requestAnimationFrame(() => {
          bar.style.transform = 'scaleY(1)';
        });
      }, index * 200);
    });
  }

  createRipple(event, button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
    `;
    
    // Ensure button has relative positioning
    if (getComputedStyle(button).position === 'static') {
      button.style.position = 'relative';
    }
    
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  animateButton(button, state) {
    switch (state) {
      case 'hover':
        button.style.transform = 'translateY(-2px)';
        break;
      case 'focus':
        button.style.transform = 'translateY(-1px)';
        button.style.boxShadow = '0 0 0 3px rgba(13, 57, 216, 0.3)';
        break;
      case 'normal':
      default:
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '';
        break;
    }
  }

  animateCard(card, state) {
    switch (state) {
      case 'hover':
        card.style.transform = 'translateY(-4px)';
        break;
      case 'focus':
        card.style.transform = 'translateY(-2px)';
        card.style.outline = '2px solid #0d39d8';
        card.style.outlineOffset = '2px';
        break;
      case 'normal':
      default:
        card.style.transform = 'translateY(0)';
        card.style.outline = '';
        card.style.outlineOffset = '';
        break;
    }
  }

  handleScroll() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  handleResize() {
    // Handle responsive behavior if needed
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 768) {
      // Mobile optimizations
      this.optimizeForMobile();
    } else {
      // Desktop optimizations
      this.optimizeForDesktop();
    }
  }

  handleKeyboard(e) {
    // Handle keyboard shortcuts
    if (e.key === 'Escape') {
      // Remove focus from any focused element
      document.activeElement?.blur();
    }
    
    // Handle tab navigation enhancements
    if (e.key === 'Tab') {
      this.handleTabNavigation(e);
    }
  }

  handleTabNavigation(e) {
    // Enhance tab navigation for better accessibility
    const focusableElements = document.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"]), .service-card, .update-card'
    );
    
    const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
    
    if (e.shiftKey) {
      // Tab backwards
      if (currentIndex === 0) {
        e.preventDefault();
        focusableElements[focusableElements.length - 1].focus();
      }
    } else {
      // Tab forwards
      if (currentIndex === focusableElements.length - 1) {
        e.preventDefault();
        focusableElements[0].focus();
      }
    }
  }

  optimizeForMobile() {
    // Mobile-specific optimizations
    const cards = document.querySelectorAll('.service-card, .update-card');
    cards.forEach(card => {
      // Reduce animation intensity on mobile
      card.style.transition = 'all 0.2s ease';
    });
  }

  optimizeForDesktop() {
    // Desktop-specific optimizations
    const cards = document.querySelectorAll('.service-card, .update-card');
    cards.forEach(card => {
      // Full animation on desktop
      card.style.transition = 'all 0.3s ease';
    });
  }

  preloadCriticalResources() {
    // Preload critical fonts
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=DM+Sans:wght@400&family=Epilogue:wght@600&display=swap'
    ];
    
    fonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = fontUrl;
      document.head.appendChild(link);
    });
  }

  // Utility methods
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  debounce(func, wait, immediate) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Performance monitoring
  measurePerformance() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
          console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
          
          // Log paint metrics
          const paintEntries = performance.getEntriesByType('paint');
          paintEntries.forEach(entry => {
            console.log(`${entry.name}:`, entry.startTime);
          });
        }, 0);
      });
    }
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .fade-in.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .header.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  }
  
  /* Smooth transitions for all interactive elements */
  .service-card,
  .update-card,
  .btn-primary,
  .btn-secondary {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  /* Enhanced focus indicators */
  .service-card:focus,
  .update-card:focus {
    outline: 2px solid #0d39d8;
    outline-offset: 2px;
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    .fade-in {
      opacity: 1;
      transform: none;
    }
  }
`;
document.head.appendChild(style);

// Service Worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNavigation = document.getElementById('mainNavigation');
    
    if (mobileMenuToggle && mainNavigation) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNavigation.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (mainNavigation.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu when clicking on mobile nav links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mainNavigation.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNavigation.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && mainNavigation.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mainNavigation.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu on window resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileMenuToggle.classList.remove('active');
                mainNavigation.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const app = new ProductTeamWiki();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Enable performance monitoring in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    app.measurePerformance();
  }
  
  // Global error handling
  window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
  });
  
  // Unhandled promise rejection handling
  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
  });
});

// Expose app instance globally for debugging
window.ProductTeamWiki = ProductTeamWiki;