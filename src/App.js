import React, {useEffect, useMemo, useState} from "react";

import '../src/styles/App.css'
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/ModalWindow/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePost";

import EditForm from "./components/EditForm";



function App() {
    const [posts, setPosts] = useState([]);
    const[filter, setFilter] = useState({sort: '', search:''});
    const[modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);






    function createPost(newPost){
        setPosts([...posts, newPost])
        setModal(false)
    }

    function removePost(post){
        setPosts(posts.filter(p => p.id !== post.id))
    }

    function editPost(post){

    }




  return (
    <div className="App">

        <MyButton style = {{marginTop: 15}} onClick = {() => setModal(true)}>Создать заметку</MyButton>
        <MyModal
            visible={modal}
            setVisible={setModal}
        >
            <PostForm create={createPost}/>
        </MyModal>



       <PostFilter
           filter = {filter}
           setFilter={setFilter}
       />

        <PostList
            remove= {removePost}
            posts={sortedAndSearchedPosts}
            title="Заметки"
            visible={modal}
            setVisible={setModal}
        />


    </div>
  );
}

export default App;
