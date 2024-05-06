import React from "react";


const UserInfo = ({ user }) => {
  return (
    <>
      <div className="info-item">
        <p className="info-item">ФИО</p>
        <div className="field">
          <p>
            <span>
              {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
            </span>
          </p>
        </div>
      </div>

      <div className="info-item">
        <p className="info-item">Логин</p>
        <div className="field">
          <p>
            <span>{user.username}</span>
          </p>
        </div>
      </div>

      <div className="info-item">
        <p className="info-item">Email</p>
        <div className="field">
          <p>
            <span>{user.email}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
