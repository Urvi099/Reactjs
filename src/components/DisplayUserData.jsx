import React, {useState, useEffect} from "react";
import axios from "axios";
import { ViewData } from "./ViewData";

const DisplayUserData = () => {
    const [postType, setPostType] = useState('posts');
    const [data, setData] = useState([]);

    useEffect(() => {
        getData(postType);
    },[postType]);

    function getData(postType) {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        if(postType=== 'posts') {
        url= 'https://jsonplaceholder.typicode.com/posts';
        } else if( postType === 'albums') {
        url = 'https://jsonplaceholder.typicode.com/albums';
        } else if (postType === 'photos') {
        url = 'https://jsonplaceholder.typicode.com/photos';
        }
        axios.get(url)
        .then((response) => {
            let data = response.data;
            setData(data.slice(0,10));
        })
        .catch((e) => {
            console.log(e);
        });
    }

    return(
        <>
            <h1>User's {postType} Data !</h1>
            <input type="button" name="posts" onClick={() => setPostType('posts')} value="Posts"/>
            <input type="button" name="Albums" onClick={() => setPostType('albums')} value="Albums"/>
            <input type="button" name="photos" onClick={() => setPostType('photos')} value="Photos"/>
            <ViewData 
            list={data} 
            postType={postType}
            />
        </>
    );
}
export default DisplayUserData;