import * as React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import PageHeader from '../components/page_header';
import styles from '../styles/delivery-option.module.css';

export const Route = createFileRoute('/delivery-option')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = React.useState<string | null>('수거만 해주세요');

  const onBack = () => {
    navigate({ to: '/on-boarding' });
  };

  const onNext = () => {
    navigate({ to: '/done' });
  };

  const options = [
    { label: '수거만 해주세요', caption: '배달은 직접 찾으러 갈게요' },
    { label: '배달만 해주세요', caption: '수선집에 직접 맡기러 갈게요' },
    { label: '수거 / 배달 모두 이용', caption: '' },
    { label: '수거 / 배달 모두 이용 안함', caption: '' },
  ];

  const handleOptionChange = (optionLabel: string) => {
    setSelectedOption((prev) => (prev === optionLabel ? null : optionLabel));
  };

  return (
    <div className={styles.container}>
      <PageHeader onBackButtonClick={onBack} />
      <div className={styles.title}>
        이용하고 싶은
        <br />
        서비스를 골라주세요!
      </div>
      <div className={styles.option_list}>
        {options.map((item, index) => (
          <div key={index} className={styles.option_item}>
            <div>
              <div className={styles.label}>{item.label}</div>
              <div className={styles.caption}>{item.caption}</div>
            </div>
            <label className={styles.input}>
              <input
                type="checkbox"
                checked={selectedOption === item.label}
                onChange={() => handleOptionChange(item.label)}
              />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        ))}
      </div>
      <div className={styles.next_wrapper}>
        <div className={styles.next} onClick={onNext}>
          다음
        </div>
      </div>
    </div>
  );
}
