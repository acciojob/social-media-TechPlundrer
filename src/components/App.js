import React from "react";
import { Switch, Route, Link } from "react-router-dom";


import PostsPage from "./PostsPage";
import UsersPage from "./UsersPage";
import UserPage from "./UserPage";
import NotificationsPage from "./NotificationsPage";
import SinglePostPage from "./SinglePostPage";

function App() {
  return (
    <div className="App">
      <h1>GenZ</h1>
<div></div>
      <nav>
        <Link to="/">Posts</Link>{" | "}
        <Link to="/users">Users</Link>{" | "}
        <Link to="/notifications">Notifications</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={PostsPage} />

        <Route exact path="/users" component={UsersPage} />

        <Route path="/users/:userId" component={UserPage} />

        <Route path="/posts/:postId" component={SinglePostPage} />

        <Route path="/notifications" component={NotificationsPage} />
      </Switch>
    </div>
  );
}

export default App;