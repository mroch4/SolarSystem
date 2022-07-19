import ContextProvider from "./contexts/Context";
import Layout from "./components/_Layout";

const App = (): JSX.Element => {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
};

export default App;
