import { useState, useEffect } from 'react';
import '../componentsStyle/windowSize.css'

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="window-size-container">
      {windowSize.width && windowSize.height && (
        <>
          <p className="window-size-text">Ширина окна: {windowSize.width}px</p>
          <p className="window-size-text">Высота окна: {windowSize.height}px</p>
        </>
      )}
    </div>
  );
};

export default WindowSize;
