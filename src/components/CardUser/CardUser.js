import "./cardUser.css";
import { Link } from "react-router-dom";
const CardUser = ({ user, setModal, setUserId }) => {
  const ClickModal = (id) => {
    setModal(true);
    setUserId(id);
  };

  return (
    <div className="card-user">
      <div className="block-user">
        <h1>Id: {user.id}</h1>
        <h3 className="name">Name: {user.name}</h3>
        <h4 className="username">Username: {user.username}</h4>
        <div>
          Phone: <a href={`tel:${user.phone}`}>{user.phone}</a>
        </div>
        <div>
          Website: <a href={user.website}> {user.website}</a>
        </div>
        <div>
          Email: <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
      </div>
      <div className="info-user">
        <div className="address-user">
          <h3 className="title"> Address</h3>
          <div>City: {user.address.city}</div>
          <div>Street: {user.address.street}</div>
          <div>Suite: {user.address.suite}</div>
          <div>Zipcode: {user.address.zipcode}</div>
        </div>
        <div className="company-user">
          <h3 className="title">Company</h3>
          <div>BS: {user.company.bs}</div>
          <div>catchPhrase: {user.company.catchPhrase}</div>
          <div>Company name: {user.company.name}</div>
        </div>
      </div>
      <div className="user-navigate">
        <Link className="nav-link" to={`/posts/${user.id}`}>Posts</Link>
        <button className="btn nav-btn" onClick={() => ClickModal(user.id)}>albums</button>
      </div>
    </div>
  );
};

export default CardUser;
