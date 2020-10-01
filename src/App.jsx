import React from "react";
import { AppContainer } from "./containers/AppContainer/AppContainer";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { watchLoadJoke } from "./components/SignUpForm/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(watchLoadJoke);

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
