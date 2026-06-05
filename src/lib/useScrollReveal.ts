"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Hook that detects when an element enters the viewport
 * and triggers a one-time "visible" state change.
 * Apple-style intersection observer for scroll animations.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: {
    threshold?: number;
    rootMargin?: string;
    delay?: number;
  } = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", delay = 0 } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delay]);

  return { ref, isVisible };
}

/**
 * Hook for staggered children reveal.
 * Returns a callback ref and the index-based visibility.
 */
export function useStaggerReveal(count: number, staggerMs = 100) {
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger children reveal
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleSet((prev) => new Set([...prev, i]));
            }, i * staggerMs);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, staggerMs]);

  const isChildVisible = useCallback(
    (index: number) => visibleSet.has(index),
    [visibleSet]
  );

  return { containerRef, isChildVisible };
}

/**
 * Hook for parallax-style translateY based on scroll position.
 */
export function useParallax(speed = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((progress - 0.5) * speed * 200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
}
