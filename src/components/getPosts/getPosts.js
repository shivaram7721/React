import { useState, useEffect } from "react";
import axios from "axios";
import styles from './getPosts.module.css'

export function GetPosts() {

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => setData(response.data))
    },[])

    function handleRemove(id) {
        setData(data.filter( (item)=> item.id !== id))
    }

    return (
        <div>
            <h1>User Posts</h1>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( (item, index) => (
                            <tr>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td onClick={()=>handleRemove(item.id)} className={styles.removeBtn}>❌</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}