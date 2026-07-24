import React from "react";
import { Switch, Route } from "react-router-dom";

import PostsPage from "./PostsPage";
import UsersPage from "./UsersPage";
import NotificationsPage from "./NotificationsPage";
import SinglePostPage from "./SinglePostPage";

function App() {
  return (
    <div className="App">
      <h1>GenZ</h1>

      {/* ✅ NAVBAR FIX (no <a>) */}
      <nav>
        <span onClick={() => window.location.href = "/"}>Posts</span>{" | "}
        <span onClick={() => window.location.href = "/users"}>Users</span>{" | "}
        <span onClick={() => window.location.href = "/notifications"}>Notifications</span>
      </nav>

      <Switch>
        <Route exact path="/" component={PostsPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/notifications" component={NotificationsPage} />
        <Route path="/posts/:id" component={SinglePostPage} />
      </Switch>
    </div>
  );
}

export default App;