import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

export const initializeAnimations = () => {
  // Animate sections on scroll with stagger effect
  gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
    const childElements = section.children;
    
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 15%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      childElements,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 15%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Animate achievement cards with 3D effect
  gsap.utils.toArray<HTMLElement>('.achievement-card').forEach((card, index) => {
    const randomRotation = randomInRange(-15, 15);
    
    gsap.fromTo(
      card,
      {
        opacity: 0,
        scale: 0.8,
        rotationY: randomRotation,
        y: 100,
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'center center',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Add hover animation
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.03,
        y: -20,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      });
    });
  });

  // Animate certification cards with floating effect
  gsap.utils.toArray<HTMLElement>('.certification-card').forEach((card, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      card,
      {
        opacity: 0,
        scale: 0.8,
        y: 100,
        rotation: randomInRange(-5, 5),
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 1,
        ease: 'power3.out',
      }
    );

    // Add continuous floating animation
    gsap.to(card, {
      y: '+=10',
      rotation: randomInRange(-2, 2),
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Add hover animation
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.03,
        y: -20,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      });
    });
  });

  // Animate headings with text reveal effect
  gsap.utils.toArray<HTMLElement>('h1, h2, h3').forEach((heading) => {
    gsap.fromTo(
      heading,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
};
