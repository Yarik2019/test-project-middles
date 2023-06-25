
import './CardAlbum.css'
const CardAlbum = ({album}) =>{
    return(
        <div className="card-album">
           <h4> userId:  {album.userId}</h4>
            <div>
            {album.id}- {album.title}
            </div>
        </div>
    )
}

export default CardAlbum;