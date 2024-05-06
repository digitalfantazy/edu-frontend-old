import React from "react";
import { useSelector } from "react-redux";

import UserInfo from "./UserInfo";
import ChangePass from "./ChangePass";
import Loading from "../../../components/loading/Loading";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="main">
      <div className="container">
        <div className="profile-container">
          <h1 className="name">Учетные данные</h1>
          <h1 className="change-pass_title">Сменить пароль</h1>

          <ul className="user-info-container">
            {user ? (
              <li className="user-info">
                <UserInfo user={user} />
              </li>
            ) : (
              loading && <Loading />
            )}
            
            <li className="user-info">
              <ChangePass />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
