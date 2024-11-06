import * as React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import PageHeader from '../components/page_header';
import styles from '../styles/alteration.module.css';
import { categories } from '../constants/alteration.constants';
import informtaion from '../assets/icon/information.svg';
import information_purple from '../assets/icon/information_purple.svg';
import { useState } from 'react';

export const Route = createFileRoute('/alteration')({
  component: RouteComponent,
});

function RouteComponent() {
  const [step, setStep] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = React.useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = React.useState<string>(''); // 4단계에서 필요한 입력 값
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // 선택된 옵션을 추적

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleBackButtonClick = () => {
    navigate({ to: '/home' });
  };

  const handleMap = () => {
    navigate({ to: '/map' });
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

  const handleOptionClick = (option: string) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const handleNextClick = () => {
    if (step === 1 && selectedSubcategory) {
      console.log(`선택된 카테고리: ${selectedCategory}, 하위 카테고리: ${selectedSubcategory}`);
      setStep(2);
    } else if (step === 2) {
      console.log(`선택된 카테고리: ${selectedCategory}, 하위 카테고리: ${selectedSubcategory}`);
      console.log('선택된 옵션:', selectedOptions);
      setStep(3);
    } else if (step === 3) {
      console.log('선택된 옵션:', selectedOptions);
    } else if (step === 4) {
      console.log('추가 정보:', additionalInfo);
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
      ) : step === 2 ? (
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
      ) : step === 3 ? (
        <div>
          {selectedFile ? (
            <div>
              <div className={styles.picture}>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="선택된 파일 미리보기"
                  style={{ width: '200px', height: 'auto' }}
                />
              </div>
              <div className={styles.four_content}>
                <div className={styles.four_title}>수선할 부위를 선택해주세요</div>
                <div className={styles.option_wrapper}>
                  <div
                    className={`${styles.option_btn} ${selectedOption === '기본형' ? styles.option_btn_active : ''}`}
                    onClick={() => handleOptionClick('기본형')}
                  >
                    기본형
                  </div>
                  <div
                    className={`${styles.option_btn} ${selectedOption === '단추구멍형' ? styles.option_btn_active : ''}`}
                    onClick={() => handleOptionClick('단추구멍형')}
                  >
                    단추구멍형
                  </div>
                  <div
                    className={`${styles.option_btn} ${selectedOption === '지퍼형' ? styles.option_btn_active : ''}`}
                    onClick={() => handleOptionClick('지퍼형')}
                  >
                    지퍼형
                  </div>
                </div>

                <div className={styles.four_description}>
                  줄이고자 하는 단면 치수를 입력해주세요
                </div>
                <input type="text" placeholder={'예) -3cm'} />
                <div className={styles.four_caption}>
                  <img src={information_purple} alt="" />
                  <div>둘레가 아닌 단편기준의 cm을 알려주세요.</div>
                </div>

                <div className={styles.four_done} onClick={handleMap}>
                  <div className={styles.four_done_btn}>다음</div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.picture}>
                <label htmlFor="fileInput">사진을 업로드 해주세요.</label>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>
              <div className={styles.four_content}>
                <div className={styles.four_title}>수선할 부위를 선택해주세요</div>
                <div className={styles.option_wrapper}>
                  <div
                    className={`${styles.option_btn} ${selectedOption === '기본형' ? styles.option_btn_active : ''}`}
                    onClick={() => handleOptionClick('기본형')}
                  >
                    기본형
                  </div>
                  <div
                    className={`${styles.option_btn} ${selectedOption === '단추구멍형' ? styles.option_btn_active : ''}`}
                    onClick={() => handleOptionClick('단추구멍형')}
                  >
                    단추구멍형
                  </div>
                  <div
                    className={`${styles.option_btn} ${selectedOption === '지퍼형' ? styles.option_btn_active : ''}`}
                    onClick={() => handleOptionClick('지퍼형')}
                  >
                    지퍼형
                  </div>
                </div>

                <div className={styles.four_description}>
                  줄이고자 하는 단면 치수를 입력해주세요
                </div>
                <input type="text" placeholder={'예) -3cm'} />
                <div className={styles.four_caption}>
                  <img src={information_purple} alt="" />
                  <div>둘레가 아닌 단편기준의 cm을 알려주세요.</div>
                </div>

                <div className={styles.four_done} onClick={handleMap}>
                  <div className={styles.four_done_btn}>다음</div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}

      {step === 1 ? (
        <button onClick={handleNextClick} className={styles.next} disabled={!selectedSubcategory}>
          다음
        </button>
      ) : step === 2 || step !== 3 ? (
        <div className={styles.btn_wrapper}>
          <div onClick={() => console.log('문의 버튼 클릭')} className={styles.inquiry}>
            수선 문의
          </div>
          <div onClick={handleNextClick} className={styles.go_step_four}>
            다음
          </div>
        </div>
      ) : null}
    </div>
  );
}
