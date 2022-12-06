import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove, visible, setVisible, edit}) => {
    if (!posts.length) {
        return <h1 style={{textAlign: "center"}}>Заметки не были найдены</h1>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem
                    edit={edit}
                    remove={remove}
                    number={index + 1}
                    post={post}
                    key={post.id}
                    visible={visible}
                    setVisible={setVisible}
                />
            )}
        </div>
    );
};

export default PostList;