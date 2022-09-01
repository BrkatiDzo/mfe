import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const ref = useRef(null);
  let history = useHistory();

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location;
          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
      });
      history.listen(onParentNavigate);
    }
  }, [ref]);
  return <div ref={ref}></div>;
};

export default MarketingApp;
