import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import BaseLayout from "./components/baselayout/BaseLayout";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PostsList from "./components/posts/PostsList";
import AddPostForm from "./components/posts/AddPostForm";
import SinglePostPage from "./components/posts/SinglePostPage";
import EditPostForm from "./components/posts/EditPostForm";
import Layout from "./routes/Layout";
import "./App.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function App() {
  return (
    <div className="app">
      <Router>
       
        <BaseLayout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route index element={<PostsList />} />
            
            <Route path="/post" element={<Layout  />}>
              
              <Route index element={<AddPostForm />} />
              <Route path=":postId" element={<SinglePostPage />} />
              <Route path="edit/:postId" element={<EditPostForm />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
      
          </BaseLayout>
      </Router>
    </div>
  );
}

export default App;
