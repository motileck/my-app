import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
        tag: '',
    });


    function addNewPost(e) {
        e.preventDefault();
        const subString = post.body.match(/#\w+/g)
        const newPost = {
            ...post,
            tag: subString,
            id: Date.now(),
        }

        create(newPost);
        setPost({title: '', body: '', tag: ''})
    }


    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название заметки"/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание заметки"/>

            <MyButton onClick={addNewPost}>Создать заметку</MyButton>
        </form>
    );
};

export default PostForm;