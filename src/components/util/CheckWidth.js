import { useState, useEffect } from 'react';

const CheckWidth = (size) => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, [setWidth]);
  
  console.log(width);

  return [width >= size];
};

export default CheckWidth;