import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initialState } from './constants';
import TaskPage from './components/pages/TaskPage';
import TaskListPage from './components/pages/TaskList';
import rootReducer from './reducers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

ReactDOM.render(
  <Provider
    store={createStore(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <div>
        <Route exact path="/" component={TaskPage} />
        <Route exact path="/task-list" component={TaskListPage} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
