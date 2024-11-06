import * as React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import styles from '../styles/done.module.css';

export const Route = createFileRoute('/done')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const onNext = () => {
    navigate({ to: '/home' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>일반 수선</div>
      <div className={styles.done_message}>신청 완료</div>
      <div className={styles.done_caption}>
        수거 신청이 완료되었습니다.
        <br />
        <span>5월 19일, 15:30까지</span> 문 앞에 수선물을 놓아주세요.
      </div>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <div className={styles.label}>접수 번호</div>
          <div className={styles.value}>240517-00223424</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <div className={styles.label}>접수 번호</div>
          <div className={styles.value}>240517-00223424</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <div className={styles.label}>접수 번호</div>
          <div className={styles.value}>240517-00223424</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.label}>접수 번호</div>
          <div className={styles.value}>240517-00223424</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.label}>접수 번호</div>
          <div className={styles.value}>240517-00223424</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <div className={styles.label}>접수 번호</div>
          <div className={styles.value}>240517-00223424</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.label}>접수 번호</div>
          <div className={styles.value}>240517-00223424</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <div className={styles.label}>접수 번호</div>
          <div className={styles.value}>240517-00223424</div>
        </div>
      </div>
      <div className={styles.done_wrapper}>
        <div className={styles.done} onClick={onNext}>
          확인
        </div>
      </div>
    </div>
  );
}
