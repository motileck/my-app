import {useMemo} from "react";

const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() =>{
            if(sort){
                console.log("VIZVANO");
                return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))

            }
            return posts;
        }
        , [sort, posts]);
    return sortedPosts;
}

export const usePosts = (posts,sort, search) => {
    const sortedPosts = useSortedPosts(posts,sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.tag.toLowerCase().includes(search))
    }, [search, sortedPosts])

    return sortedAndSearchedPosts;
}