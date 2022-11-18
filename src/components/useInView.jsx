import { useRef, useState, useEffect } from "react";

const useInView = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
  }, []);

  return { inView, ref };
};

export default useInView;
