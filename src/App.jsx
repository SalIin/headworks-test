import React from "react";
import { AppContainer } from "./containers/AppContainer/AppContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </div>
  );
}

export default App;
