import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.search}
                onChange={e => setFilter({...filter, search: e.target.value})}
                placeholder="поиск"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по"
                options={
                    [{value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                        {value: 'tag', name: 'По Тегу'}]
                }
            />
        </div>
    );
};

export default PostFilter;