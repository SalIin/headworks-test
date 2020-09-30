import React from "react";
import { AppContainer } from "./containers/AppContainer/AppContainer";
import { ClientsProvider } from "./providers/ClientsProvider/ClientsProvider";

function App() {
  console.log();
  return (
    <div className="app">
      <ClientsProvider>
        <AppContainer />
      </ClientsProvider>
    </div>
  );
}

export default App;
