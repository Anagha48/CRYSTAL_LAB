
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.testimonial-slider-container');
    const sliderTrack = document.querySelector('.testimonial-slider-track');
    const cards = document.querySelectorAll('.Testimonial-card');
    const cardWidth = sliderContainer.offsetWidth;
    let currentIndex = 0;
    
    // Clone the first card and append to end for seamless looping
    const firstCardClone = cards[0].cloneNode(true);
    sliderTrack.appendChild(firstCardClone);
    
    // Set initial position
    sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    
    // Auto slide function
    function autoSlide() {
      currentIndex++;
      sliderTrack.style.transition = 'transform 0.5s ease';
      sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      
      // When we reach the clone (which is the first card), reset without animation
      if (currentIndex >= cards.length) {
        setTimeout(() => {
          sliderTrack.style.transition = 'none';
          currentIndex = 0;
          sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }, 500);
      }
    }
    
    // Start auto sliding
    let slideInterval = setInterval(autoSlide, 3000);
    
    // Pause on hover
    sliderContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
      slideInterval = setInterval(autoSlide, 3000);
    });
    
    // Handle transition end to make looping seamless
    sliderTrack.addEventListener('transitionend', () => {
      if (currentIndex >= cards.length) {
        sliderTrack.style.transition = 'none';
        currentIndex = 0;
        sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        // Force reflow to apply the change immediately
        void sliderTrack.offsetWidth;
      }
    });
    
    // Responsive adjustments
    window.addEventListener('resize', () => {
      const newCardWidth = sliderContainer.offsetWidth;
      sliderTrack.style.transform = `translateX(-${currentIndex * newCardWidth}px)`;
    });
  });


  
  
  document.addEventListener('DOMContentLoaded', function() {
    const welcomeSection = document.querySelector('.welcome_section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          welcomeSection.classList.add('scrolled');
        } else {
          welcomeSection.classList.remove('scrolled');
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of element is visible
    });

    observer.observe(welcomeSection);
  });
















  