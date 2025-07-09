import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      return;
    }

    // Simple performance monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'paint') {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        }
        
        if (entry.entryType === 'layout-shift') {
          console.log('Layout shift detected:', entry);
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['paint', 'layout-shift', 'largest-contentful-paint'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.log('Performance monitoring not fully supported');
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Force hardware acceleration for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .will-change-transform {
        will-change: transform;
        transform: translateZ(0);
      }
      
      .hardware-accelerated {
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
};