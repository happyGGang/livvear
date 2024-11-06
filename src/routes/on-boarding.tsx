import * as React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import styles from '../styles/on-boarding.module.css';
import { useState } from 'react';
import group from '../assets/icon/group.svg';
import user from '../assets/icon/user.svg';

export const Route = createFileRoute('/on-boarding')({
  component: RouteComponent,
});

function RouteComponent() {
  const [isActive, setIsActive] = useState('user');
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive('user');
    navigate({ to: '/home' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        어떻게
        <br />
        찾아오셨나요?
      </div>
      <div className={styles.caption}>사용 목적을 알려주세요</div>

      <div className={styles.btn_wrapper}>
        <div
          className={`${styles.btn} ${isActive === 'user' ? styles.active : ''}`}
          onClick={handleClick}
        >
          <img src={group} alt="" />
          <div>고객님</div>
        </div>
        <div
          className={`${styles.btn} ${isActive === 'admin' ? styles.active : ''}`}
          onClick={() => setIsActive('user')}
        >
          <img src={user} alt="" />
          <div>사장님</div>
        </div>
      </div>
    </div>
  );
}
