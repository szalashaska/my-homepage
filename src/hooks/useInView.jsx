import { useRef, useState, useEffect } from "react";

const useInView = (threshold) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: threshold || 0.1 }
    );
    observer.observe(ref.current);
  }, [threshold]);

  return { inView, ref };
};

export default useInView;
