import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import GlobalNavBar from '../components/global_nav_bar';
import styles from '../styles/apply.module.css';
import character from '../assets/img/character.svg';

export const Route = createFileRoute('/apply')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        접수완료
        <br />
        됐어요
        <br />
        <span>예쁘게 고쳐주세요 !</span>
      </div>
      <img src={character} alt="" className={styles.character} />
      <GlobalNavBar />
    </div>
  );
}
