import * as React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import styles from '../styles/map.module.css';
import GlobalNavBar from '../components/global_nav_bar';
import dummy from '../assets/img/dummy_map.svg';
import search from '../assets/icon/search.svg';

export const Route = createFileRoute('/map')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: '/list' });
  };

  return (
    <div className={styles.container}>
      <input type="text" placeholder={'수선할 옷, 업체명을 검색해주세요'} />
      <img src={search} alt="" className={styles.search} />
      <img src={dummy} alt="" />
      <div className={styles.list} onClick={handleClick}>
        목록보기
      </div>
      <GlobalNavBar />
    </div>
  );
}
