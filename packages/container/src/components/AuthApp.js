// import { mount } from "marketing/MarketingApp";
// import React, { useRef, useEffect } from "react";
// import { useHistory } from "react-router-dom";

// const AuthApp = () => {
//   const ref = useRef(null);
//   let history = useHistory();
//   console.log("ides li ovde");
//   useEffect(() => {
//     if (ref.current) {
//       const { onParentNavigate } = mount(ref.current, {
//         initialPath: history.location.pathname,
//         onNavigate: ({ pathname: nextPathname }) => {
//           const { pathname } = history.location;
//           if (pathname !== nextPathname) {
//             history.push(nextPathname);
//           }
//         },
//       });
//       history.listen(onParentNavigate);
//     }
//   }, [ref]);
//   return <div ref={ref}></div>;
// };

// export default AuthApp;
import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        onSignIn(true);
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
