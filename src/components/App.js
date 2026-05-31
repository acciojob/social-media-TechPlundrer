
import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Navbar from "./Navbar"
import AddPostForm from "./AddPostForm"
import PostList from "./PostList"
import UserPage from "./UserPage";
import NotificationPage from './NotificationsPages';
import EditPost from "./EditPost"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
        <AddPostForm />
        <PostList />
        </>
      }
      />

      <Route path="/users" element={<UserPage />} />

      <Route path="/notifications"
      element={<NotificationPage />}
      />

      <Route path="/editPost/:id"
      element={<EditPost />}
      />
    </Routes>
    </BrowserRouter>
  )
}





export default App;











































