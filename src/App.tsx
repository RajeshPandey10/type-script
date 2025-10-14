// import { Suspense } from "react";
// import Routes from "./routes/Routes";
// import LoadingSpinner from "./components/LoadingSpinner";
// import { isAuth } from "./api/auth";

// const App = () => {
//   const user =isAuth() //if we want to call the state then we have to use useSelector
//   return (
//     <>
//       <Suspense fallback={<LoadingSpinner />}>
//         <Routes user={user} />
//       </Suspense>
//     </>
//   );
// };

// export default App;
import { Suspense } from "react";
import Routes from "./routes/Routes";
import LoadingSpinner from "./components/LoadingSpinner";
// import { isAuth } from "./api/auth";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

const App = () => {
  const isAuth = useSelector(
    (state: RootState) => state.auth.isAuth
  ); //if we want to call the state  then we have to use useSelector
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes user={isAuth} />
      </Suspense>
    </>
  );
};

export default App;
