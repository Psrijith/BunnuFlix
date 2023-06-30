import React from "react";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="pscreen">
      <Nav />
      <div className="pbody">
        <h1>Edit profile</h1>
        <div className="pinfo">
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-400-x-400-88wkdmjrorckekha.jpg"
            alt=""
          />
          <div className="pdetails">
            <h2>{user.email}</h2>
            <div className="pplans">
                <h3>Plans </h3>
                <h5>Use Stripe for Payment process</h5>
              <button onClick={() => auth.signOut()} className="psignout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
