import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setNickname, setProfileImg } from '../actions/userAction';
import MyInfoModal from './MyInfoModal';
import '../styles/Mypage/Profile.scss';

function Profile() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const { nickName, profileImg } = userState;

  const [isOpenMyInfo, setIsOpenMyInfo] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userType, setUserType] = useState('');

  const openModalHandler = () => {
    setIsOpenMyInfo(!isOpenMyInfo);
  };

  // * 처음 랜더링 될 때 회원정보를 가져온다.
  useEffect(() => {
    axios
      .get('/users')
      .then((res) => {
        const {
          email, nickname, profileImage, type,
        } = res.data.userInfo;
        dispatch(setNickname(nickname));
        dispatch(setProfileImg(profileImage));
        setUserEmail(email);
        setUserType(type);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);

  return (
    <>
      <div id="profile_container">
        <div id="profile_info">
          <img
            className="profile_img"
            src={profileImg || '/images/profile-min.jpg'}
            alt="profile"
          />
          <div id="nickname-email_container">
            <span className="profile_nickname">{nickName}</span>
            <span id="profile_email">{userEmail}</span>
          </div>
        </div>
        <img
          id="profile_set"
          src="/icons/icon_gear.svg"
          alt="gear"
          onClick={openModalHandler}
          aria-hidden="true"
        />
      </div>
      {isOpenMyInfo && (
        <MyInfoModal openModalHandler={openModalHandler} userType={userType} />
      )}
    </>
  );
}

export default Profile;
