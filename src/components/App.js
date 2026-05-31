import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import AddPostForm from "./AddPostForm";
import PostList from "./PostList";
import UserPage from "./UserPage";
import NotificationsPages from "./NotificationsPages";
import EditPost from "./EditPost";

function Home() {
  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/users"
          component={UserPage}
        />

        <Route
          exact
          path="/notifications"
          component={NotificationsPages}
        />

        <Route
          exact
          path="/editPost/:id"
          component={EditPost}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;








































