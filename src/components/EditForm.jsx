import React, {useEffect, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const EditForm = ({edit, initial}) => {

    useEffect(() => {
        setPost({
            title: initial.title || '',
            body: initial.body || '',
            tag: initial.tag || '',
        })
    }, [initial])

    const [post, setPost] = useState({
        title: initial.title || '',
        body: initial.body || '',
        tag: initial.tag || '',
    });

    function editPost(e) {
        e.preventDefault();

        const newPost = {
            ...post,
            id: initial.id,
        }
        edit(newPost);
        setPost({title: '', body: '', tag: ''})

    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
            />
            <MyInput
                value={post.tag}
                onChange={e => setPost({...post, tag: e.target.value})}
                type="text"
            />
            <MyButton onClick={editPost}>Сохранить</MyButton>
        </form>
    );
};

export default EditForm;