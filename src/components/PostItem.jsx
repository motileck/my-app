import React, {} from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {





    return (
        <div className="post">
            <div className="post__content">
                <strong>Title: {props.number}. {props.post.title}</strong>
                <div>
                    Description: {props.post.body}

                </div>


                <div>

                    Hashtags: {props.post.tag}
                </div>
                <div className="post__btn">
                    <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                </div>
                <div className="post__btn__red">
                    <MyButton onClick={() => {
                        props.edit(props.post);
                    }}>Редактировать</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;