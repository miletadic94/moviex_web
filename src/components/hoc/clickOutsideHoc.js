import React, { useRef, useState, useEffect } from "react";

const clickOutsideHOC = (WrappedComponent) => (props) => {
  const hocRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (hocRef && hocRef.current && !hocRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <div ref={hocRef} onClick={() => setOpen(true)}>
      <WrappedComponent {...props} open={open} />
    </div>
  );
};

export default clickOutsideHOC;
