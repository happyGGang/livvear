import * as React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import earth from '../assets/img/earth.svg';
import top from '../assets/img/top.svg';
import bottom from '../assets/img/bottom.svg';
import star from '../assets/icon/star.svg';
import styles from '../styles/home.module.css';
import GlobalNavBar from '../components/global_nav_bar';
import washing_machine from '../assets/img/washing_machine.svg';
import designer from '../assets/img/designer.svg';
import girl from '../assets/img/girl.svg';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const onNext = () => {
    navigate({ to: '/alteration' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>LIVVEAR</div>
      <div className={styles.earth_wrapper}>
        <div className={styles.earth_text}>
          버리던 옷<br />
          <span>수선한다면 지구를 지킬 수 있어요</span>
        </div>
        <img src={earth} alt="" />
      </div>

      <div className={styles.second_content}>
        <div className={styles.like}>
          <img src={star} alt="" />
          <div>즐겨찾기</div>
        </div>

        <div className={styles.bottom_list}>
          <div className={styles.list_wrapper}>
            <img src={top} alt="" />
            <div>상의 수선</div>
          </div>
          <div className={styles.list_wrapper}>
            <img src={bottom} alt="" />
            <div>하의 수선</div>
          </div>
          <div className={styles.alteration} onClick={onNext}>
            바로
            <br />
            수선
          </div>
        </div>
      </div>

      <div className={styles.third_wrapper}>
        <div className={styles.third_btn}>
          <img src={washing_machine} alt="" />
          <div>세탁 신청</div>
        </div>
        <div className={styles.third_btn}>
          <img src={designer} alt="" />
          <div>디자이너 수선</div>
        </div>
      </div>

      <div className={styles.promotion}>
        <div>
          기간 한정 이벤트
          <br />
          <span>
            디자이너 수선 맡기면
            <br />
            수선료 10% 할인!
          </span>
        </div>
        <img src={girl} alt="" />
      </div>
      <GlobalNavBar />
    </div>
  );
}
