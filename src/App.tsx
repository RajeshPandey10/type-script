import { Suspense } from "react";
import Routes from "./Routes/Routes";
import LoadingSpinner from "./components/LoadingSpinner";
import { isAuth } from "./api/auth";

const App = () => {
  const user =isAuth() 
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes user={user} />
      </Suspense>
    </>
  );
};

export default App;
