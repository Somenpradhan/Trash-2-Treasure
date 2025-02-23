
      
        import { gsap } from 'gsap';

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          const icon = menuToggle.querySelector('i');
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
          });
        });
        
        // Theme Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        const html = document.documentElement;
        const themeIcon = themeToggle.querySelector('i');
        
        function toggleTheme() {
          const currentTheme = html.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          
          html.setAttribute('data-theme', newTheme);
          themeIcon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
          
          localStorage.setItem('theme', newTheme);
        }
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        
        themeToggle.addEventListener('click', toggleTheme);
        
        // Initialize animations when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
          // Enhanced title animation
          const textElements = document.querySelectorAll('.text-animation');
          const subtitle = document.querySelector('.subtitle');
        
          // Create a GSAP timeline for the title animation
          const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        
          // Animate each text element
          tl.fromTo(textElements, 
            {
              opacity: 0,
              y: 100,
              rotationX: -90,
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 1.5,
              stagger: 0.3,
              onComplete: () => {
                textElements.forEach(el => el.classList.add('animated'));
              }
            }
          )
          // Animate the subtitle
          .fromTo(subtitle,
            {
              opacity: 0,
              y: 50,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              onComplete: () => {
                subtitle.classList.add('animated');
              }
            },
            "-=0.5"
          );
        
          // Add a floating animation to the "2"
          gsap.to(textElements[1], {
            y: "10px",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        });
        
        // Handle form submissions
        document.getElementById('productForm')?.addEventListener('submit', (e) => {
          e.preventDefault();
          // TODO: Implement product listing logic
          console.log('Product form submitted');
        });
        
        document.getElementById('eventForm')?.addEventListener('submit', (e) => {
          e.preventDefault();
          // TODO: Implement event planning logic
          console.log('Event form submitted');
        });
        
        // AI Advisor
        const generateBtn = document.querySelector('.generate-btn');
        generateBtn?.addEventListener('click', () => {
          const prompt = document.getElementById('wastePrompt').value;
          if (prompt) {
            // TODO: Implement AI generation logic
            console.log('Generating ideas for:', prompt);
          }
        });
        
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
        
        // Animate sections on scroll
        const sections = document.querySelectorAll('.section');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.fromTo(entry.target,
                {
                  opacity: 0,
                  y: 50
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out"
                }
              );
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1
        });
        
        sections.forEach(section => {
          observer.observe(section);
        });
        
        function openPage() {
                    window.location.href = "T2T/x.html"; // Redirect to x.html
                }
        
        
             