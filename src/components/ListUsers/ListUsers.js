import CardUser from "../CardUser/CardUser";
import "./listUsers.css";
import { useState } from "react";
import MyModal from "../MyModal/MyModal";
import ListAlbums from "../ListAlbums/ListAlbums";

const ListUsers = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [userId, setUserId] = useState(null);
  return (
    <div>
      <MyModal visible={modal} setVisible={setModal}>
        <ListAlbums userId={userId} />
      </MyModal>
      <h1 className="title-users">Users</h1>
      <div className="list-users">
        {data.map((user) => (
          <CardUser
            key={user.id}
            user={user}
            setModal={setModal}
            setUserId={setUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
