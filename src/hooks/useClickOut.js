import { useEffect, useRef } from 'react';

const useClickOut = (onClickOut, externalRef) => {
  let ref = useRef();
  if (externalRef) {
    ref = externalRef;
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref && ref.current && ref.current.contains(event.target)) {
        return;
      }

      onClickOut(event);
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchend', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchend', handleOutsideClick);
    };
  }, [onClickOut]);

  return ref;
};

export default useClickOut;
