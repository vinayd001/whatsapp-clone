import { lazy, Suspense, useContext } from "react";

//components
// import UserProvider from './context/UserProvider';
import AccountProvider from "./context/AccountProvider";

// import TemplateProvider from './templates/TemplateProvider';
import Loader from "./components/Loader";

const Messenger = lazy(() => import("./components/Messenger"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </Suspense>
  );
}

export default App;
