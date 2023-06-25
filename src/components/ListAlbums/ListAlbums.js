
import { useGetUsersByNameQuery } from "../../sservices/users";
import CardAlbum from "../CardAlbum/CardAlbum";
import './listAlbums.css'
const ListAlbums = ({userId}) => {
  const { data, error, isLoading } = useGetUsersByNameQuery(`albums?userId=${userId}`);
  return (
    <div className="list-albums">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1 className="title-albums">Albums</h1>
          {data.map((album)=>(
            <CardAlbum key={album.id} album={album}/>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default ListAlbums;
