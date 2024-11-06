import * as React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import PageHeader from '../components/page_header';
import styles from '../styles/alteration.module.css';
import { categories } from '../constants/alteration.constants';
import informtaion from '../assets/icon/information.svg';

export const Route = createFileRoute('/alteration')({
  component: RouteComponent,
});

function RouteComponent() {
  const [step, setStep] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = React.useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate({ to: '/home' });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleNextClick = () => {
    if (step === 1 && selectedSubcategory) {
      console.log(`선택된 카테고리: ${selectedCategory}, 하위 카테고리: ${selectedSubcategory}`);
      setStep(2);
    } else if (step === 2) {
      console.log(`선택된 카테고리: ${selectedCategory}, 하위 카테고리: ${selectedSubcategory}`);
      console.log('선택된 옵션:', selectedOptions);
    }
  };

  return (
    <div className={styles.container}>
      <PageHeader title="수선 접수" onBackButtonClick={handleBackButtonClick} />
      {step === 1 ? (
        <div>
          <h2 className={styles.title}>수선 제품 선택</h2>
          <div className={styles.first_step}>
            {categories.map((category) => (
              <div
                key={category.label}
                onClick={() => handleCategoryClick(category.label)}
                className={`btn ${selectedCategory === category.label ? styles.btn_active : styles.btn}`}
              >
                {category.label}
              </div>
            ))}
          </div>

          {selectedCategory && (
            <div className={styles.second_step}>
              {categories
                .find((category) => category.label === selectedCategory)
                ?.subcategories.map((subcategory) => (
                  <div
                    key={subcategory}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className={`btn ${selectedSubcategory === subcategory ? styles.btn_active : styles.btn}`}
                  >
                    {subcategory}
                  </div>
                ))}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.third_step}>
          <div className={styles.caption}>※중복 선택 가능</div>
          <div className={styles.list}>
            {Array.from({ length: 10 }, (_, index) => `옵션 ${index + 1}`).map((option) => (
              <label key={option} className={styles.list_item}>
                <div className={styles.label_wrapper}>
                  <div>{option}</div>
                  <img src={informtaion} alt="" />
                </div>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
                <span className={styles.checkmark}></span>
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 1 ? (
        <button onClick={handleNextClick} className={styles.next} disabled={!selectedSubcategory}>
          다음
        </button>
      ) : (
        <div className={styles.btn_wrapper}>
          <div onClick={() => console.log('문의 버튼 클릭')} className={styles.inquiry}>
            수선 문의
          </div>
          <div onClick={handleNextClick} className={styles.go_step_four}>
            다음
          </div>
        </div>
      )}
    </div>
  );
}
