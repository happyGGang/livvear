import * as React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import GlobalNavBar from '../components/global_nav_bar';
import styles from '../styles/list.module.css';
import PageHeader from '../components/page_header';
import marker from '../assets/icon/marker.svg';
import information from '../assets/icon/information.svg';
import filter from '../assets/icon/filter.svg';

export const Route = createFileRoute('/list')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: '/map' });
  };

  const handleDone = () => {
    navigate({ to: '/apply' });
  };

  return (
    <div className={styles.container}>
      <PageHeader onBackButtonClick={handleClick} />
      <div className={styles.location} onClick={handleClick}>
        <img src={marker} alt="" />
        <div>부산 금정구</div>
      </div>
      <div className={styles.select_wrapper}>
        <select>
          <option>품목</option>
          <option>1</option>
          <option>2</option>
        </select>
        <div className={styles.caption}>
          <div>수선사 제휴 업체</div>
          <img src={information} alt="" />
        </div>
      </div>
      <div className={styles.filter_wrapper}>
        <div>수선 업체 찾기</div>
        <div className={styles.filter}>
          <img src={filter} alt="" />
          <div>필터</div>
        </div>
      </div>
      <div className={styles.promotion}>수선사 제휴 업체는 첫 결제 10% 할인!</div>
      <div className={styles.scroll}>
        <div className={styles.list_item}>
          <div>
            <div className={styles.name}>수선집 A</div>
            <div className={styles.description}>
              <div className={styles.description_text}>
                <span>작업</span>234건
              </div>
              <div className={styles.description_text}>
                <span>리뷰</span>234건
              </div>
              <div className={styles.description_text}>
                <span>만족도</span>234건
              </div>
            </div>
            <div className={styles.store_location}>부산광역시 금정구 장전동 XXX-XX</div>
            <div className={styles.badge}>신발</div>
          </div>
          <div className={styles.thumbnail}></div>
        </div>
        <div className={styles.list_item}>
          <div>
            <div className={styles.name}>수선집 A</div>
            <div className={styles.description}>
              <div className={styles.description_text}>
                <span>작업</span>234건
              </div>
              <div className={styles.description_text}>
                <span>리뷰</span>234건
              </div>
              <div className={styles.description_text}>
                <span>만족도</span>234건
              </div>
            </div>
            <div className={styles.store_location}>부산광역시 금정구 장전동 XXX-XX</div>
            <div className={styles.badge}>신발</div>
          </div>
          <div className={styles.thumbnail}></div>
        </div>
        <div className={styles.list_item}>
          <div>
            <div className={styles.name}>수선집 A</div>
            <div className={styles.description}>
              <div className={styles.description_text}>
                <span>작업</span>234건
              </div>
              <div className={styles.description_text}>
                <span>리뷰</span>234건
              </div>
              <div className={styles.description_text}>
                <span>만족도</span>234건
              </div>
            </div>
            <div className={styles.store_location}>부산광역시 금정구 장전동 XXX-XX</div>
            <div className={styles.badge}>신발</div>
          </div>
          <div className={styles.thumbnail}></div>
        </div>
        <div className={styles.list_item}>
          <div>
            <div className={styles.name}>수선집 A</div>
            <div className={styles.description}>
              <div className={styles.description_text}>
                <span>작업</span>234건
              </div>
              <div className={styles.description_text}>
                <span>리뷰</span>234건
              </div>
              <div className={styles.description_text}>
                <span>만족도</span>234건
              </div>
            </div>
            <div className={styles.store_location}>부산광역시 금정구 장전동 XXX-XX</div>
            <div className={styles.badge}>신발</div>
          </div>
          <div className={styles.thumbnail}></div>
        </div>
        <div className={styles.list_item}>
          <div>
            <div className={styles.name}>수선집 A</div>
            <div className={styles.description}>
              <div className={styles.description_text}>
                <span>작업</span>234건
              </div>
              <div className={styles.description_text}>
                <span>리뷰</span>234건
              </div>
              <div className={styles.description_text}>
                <span>만족도</span>234건
              </div>
            </div>
            <div className={styles.store_location}>부산광역시 금정구 장전동 XXX-XX</div>
            <div className={styles.badge}>신발</div>
          </div>
          <div className={styles.thumbnail}></div>
        </div>
      </div>
      <div className={styles.order_wrapper} onClick={handleDone}>
        <div className={styles.order}>최대 3개 견적 받기</div>
      </div>
      <GlobalNavBar />
    </div>
  );
}
