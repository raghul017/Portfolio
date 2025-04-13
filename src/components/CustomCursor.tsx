import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Smooth cursor following
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
      // Dot follows immediately
      setDotPosition({ x: e.clientX - 2, y: e.clientY - 2 });
    };

    const onMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        const isClickable = e.target.tagName.toLowerCase() === 'a' ||
                          e.target.tagName.toLowerCase() === 'button' ||
                          e.target.closest('a') ||
                          e.target.closest('button');
        setIsHovering(!!isClickable);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'scale-150' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${dotPosition.x}px, ${dotPosition.y}px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
