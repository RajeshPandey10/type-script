import { Suspense } from "react";
import Routes from "./Routes/Routes";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes />
      </Suspense>
    </>
  );
};

export default App;
