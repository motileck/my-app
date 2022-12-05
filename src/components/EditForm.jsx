import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const EditForm = ({create}) => {
    const[post,setPost]=useState({
        title: '',
        body: '',
        tag: '',
    });

    function addNewPost(e){
        e.preventDefault();

        const newPost = {
            ...post,
            id: Date.now(),
        }
        create(newPost);
        setPost({title:'', body: '', tag: ''})
    }

    return (
        <form>
            <MyInput
                value = {post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                />
            <MyInput
                value = {post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type="text"
                />
            <MyInput
                value = {post.tag}
                onChange={e => setPost({...post, tag: e.target.value})}
                type="text"
                />
            <MyButton onClick={addNewPost}>Сохранить</MyButton>
        </form>
    );
};

export default EditForm;