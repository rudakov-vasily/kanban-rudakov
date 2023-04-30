import React, { useState } from 'react';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toogleProfileMenu = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  };

  return (
    <div className={styles.general}>
      <div className={styles.avatar} onClick={toogleProfileMenu}>
        <div className={styles.image}>
          <img
            src={require('../../img/ui/user-avatar.svg').default}
            alt="profile-ico"
          />
        </div>
        {isMenuActive ? (
          <div className={styles.button}>
            <img
              src={require('../../img/ui/open-menu.svg').default}
              alt="arrow-down"
            />
          </div>
        ) : (
          <div className={styles.button}>
            <img
              src={require('../../img/ui/close-menu.svg').default}
              alt="arrow-down"
            />
          </div>
        )}
      </div>
      <div className={styles.menu}>
        {isMenuActive ? (
          <>
            <div className={styles.cube}>
              <img src={require('../../img/ui/cube.svg').default} alt="cube" />
            </div>
            <ul className={styles.menuItems}>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/logout">Log Out</Link>
              </li>
            </ul>
          </>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Profile;
