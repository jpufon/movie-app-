import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './features/store';
import { fetchPosts } from './components/posts/postsSlice';
import { fetchUsers } from './components/users/usersSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';




store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
