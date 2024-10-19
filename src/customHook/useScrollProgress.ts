import { useState, useEffect } from 'react';

// Define the type for the target element, which can be an HTMLElement or null (default)
type TargetElement = HTMLElement | null | Window;

function useScrollProgress(targetElement: TargetElement = window): number {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const element = targetElement === window ? document.documentElement : (targetElement as HTMLElement);
    
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;

      const currentScrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(currentScrollPercentage);
    };

    // Add the scroll event listener
    targetElement?.addEventListener('scroll', handleScroll);

    // Calculate initial scroll position
    handleScroll();

    // Cleanup function to remove the event listener
    return () => {
      targetElement?.removeEventListener('scroll', handleScroll);
    };
  }, [targetElement]);

  return scrollPercentage;
}

export default useScrollProgress;
