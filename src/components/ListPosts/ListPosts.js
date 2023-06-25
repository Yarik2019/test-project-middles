import NavBar from "../NavBar/NavBar";

import { useGetUsersByNameQuery } from "../../sservices/users";
import { useParams } from "react-router-dom";

import CardPost from "../CardPost/CardPost";
import './listPosts.css';
import Loading from "../Loading/Loading";
const ListPosts = () => {
const params = useParams();
const { data, error, isLoading } = useGetUsersByNameQuery(`/posts?userId=${params.postsId}`);
// posts/${params.postsId}/comments пости коментарії
// /posts?userId=${params.postsId} пости користувача 
return (
    <div className="list-post">
        <NavBar/>
        {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loading/>
      ) : data ? (
       <>
       <h1 className="title-post">Posts</h1>
        {data.map((post)=> (
            <CardPost  key={post.id} post={post}/>
        ))}
       </>
      ) : null}
    </div>
)
}

export default ListPosts;