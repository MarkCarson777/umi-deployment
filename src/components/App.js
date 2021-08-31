import React from 'react';
import UserList from './UserList';
import UserPosts from './UserPosts';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <UserList />
    </div>
  )
}

const App = () => {
  return (
    <div className="background">
      <BrowserRouter>
        <Route path="/" exact component={Root} />
        <Route path="/:id" exact component={UserPosts} />
      </BrowserRouter>
    </div>
  );
};

export default App;