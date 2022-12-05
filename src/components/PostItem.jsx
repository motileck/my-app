import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {



    return(
        <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}

          </div>
            <div>
                #{props.post.tag}
            </div>
          <div className="post__btn">
              <MyButton onClick = {() => props.remove(props.post)}>Удалить</MyButton>
          </div>
            <div className="post__btn__red">
                <MyButton onClick = {() => {


                }}>Редактировать</MyButton>
            </div>
        </div>
      </div>
    );
};

export default PostItem;