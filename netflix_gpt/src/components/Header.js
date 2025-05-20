import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import {LOGO} from "../utils/constants"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
      });
  };


  
  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
          const {uid, email,displayName,photoURL} = user;
          dispatch(addUser({uid: uid, email: email,displayName: displayName,photoURL: photoURL}));
          navigate("/browse");
          } else {
              dispatch(removeUser());
              navigate("/");
          }
      });
  }
  ,[]);


  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix bg"
      />

      {user && (
        <div
          className="relative flex items-center"
        >
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={user?.photoURL}
            alt="User"
            onClick={() => setDropdownVisible((prev) => !prev)} // Toggle dropdown on click
          />
          {dropdownVisible && (
            <div className="absolute top-12 right-0 bg-black text-white rounded shadow-lg p-4 z-30">
              <p className="text-sm mb-2">{user?.displayName}</p>
              <button
                className="text-sm bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;