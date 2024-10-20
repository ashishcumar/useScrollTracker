import { useState, useEffect, useRef } from "react";

interface ThresholdEvents {
  [threshold: number]: (scrollPercentage: number) => void;
}

interface useScrollTrackerOptions {
  thresholdEvents?: ThresholdEvents;
  horizontalScroll?: boolean;
}

const useScrollTracker = (
  targetElement: Window | HTMLElement = window,
  {
    thresholdEvents = {},
    horizontalScroll = false,
  }: useScrollTrackerOptions = {}
) => {
  const lastScrollPos = useRef<number>(0);
  const lastScrollPercentage = useRef<number>(0);
  const thresholdEventTriggered = useRef<Record<number, boolean>>({});
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<
    "up" | "down" | "left" | "right" | null
  >(null);

  useEffect(() => {
    const element =
      targetElement === window ? document.documentElement : targetElement;
    if (!element || !(element instanceof HTMLElement)) {
      console.error(
        "Invalid targetElement provided. Please provide a valid HTMLElement or use the default window."
      );
      return;
    }

    const handleScroll = () => {
      const {
        scrollTop = 0,
        scrollLeft = 0,
        scrollHeight = 0,
        scrollWidth = 0,
        clientHeight = 0,
        clientWidth = 0,
      } = element as HTMLElement;

      const scrollPos = horizontalScroll ? scrollLeft : scrollTop;
      const maxScroll = horizontalScroll
        ? scrollWidth - clientWidth
        : scrollHeight - clientHeight;

      if (maxScroll <= 0) return;

      const currentScrollPercentage = (scrollPos / maxScroll) * 100;

      if (currentScrollPercentage !== lastScrollPercentage.current) {
        lastScrollPercentage.current = currentScrollPercentage;
        setScrollPercentage(currentScrollPercentage);

        const newScrollDirection =
          scrollPos > lastScrollPos.current
            ? horizontalScroll
              ? "right"
              : "down"
            : horizontalScroll
            ? "left"
            : "up";

        setScrollDirection(newScrollDirection);
        lastScrollPos.current = scrollPos;

        Object.keys(thresholdEvents).forEach((threshold) => {
          const numThreshold = Number(threshold);
          if (currentScrollPercentage >= numThreshold) {
            if (!thresholdEventTriggered.current[numThreshold]) {
              thresholdEvents[numThreshold](currentScrollPercentage);
              thresholdEventTriggered.current[numThreshold] = true;
            }
          } else {
            // Reset the triggered state if below threshold
            thresholdEventTriggered.current[numThreshold] = false;
          }
        });
      }
    };

    // Add the scroll event listener
    targetElement?.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      targetElement?.removeEventListener("scroll", handleScroll);
    };
  }, [targetElement, thresholdEvents, horizontalScroll]);

  return { scrollPercentage, scrollDirection };
};

export { useScrollTracker };
