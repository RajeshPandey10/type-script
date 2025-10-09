import { Suspense } from "react";
import Routes from "./Routes/Routes";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const user =true
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes user={user} />
      </Suspense>
    </>
  );
};

export default App;
