import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../styles/App.css";

import Navbar from "./Navbar";
import PostList from "./PostList";
import UsersPage from "./UsersPage";
import UserPostsPage from "./UserPostsPage";
import NotificationsPage from "./NotificationsPage";
import CreatePostForm from "./CreatePostForm";
import SinglePostPage from "./SinglePostPage";
import EditPostPage from "./EditPostPage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>

        <Navbar />

        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/users" component={UsersPage} />
          <Route path="/users/:userId" component={UserPostsPage} />
          <Route path="/notifications" component={NotificationsPage} />
          <Route path="/post" component={CreatePostForm} />
          <Route path="/posts/:postId/edit" component={EditPostPage} />
          <Route path="/posts/:postId" component={SinglePostPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;