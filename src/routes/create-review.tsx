import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import PageHeader from "../components/page_header";
import { useState } from "react";
import styles from "../styles/create-review.module.css";

export const Route = createFileRoute("/create-review")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); // 리뷰 제목
  const [content, setContent] = useState(""); // 리뷰 내용
  const [rating, setRating] = useState(0); // 별점 (1~5)
  const [error, setError] = useState(""); // 에러 메시지

  const handleBackClick = () => {
    navigate({ to: "/home" });
  };

  const handleSubmit = () => {
    if (!title.trim()) {
      setError("제목을 입력해주세요.");
      return;
    }
    if (!content.trim()) {
      setError("리뷰 내용을 입력해주세요.");
      return;
    }
    if (rating < 1 || rating > 5) {
      setError("별점을 선택해주세요. (1~5)");
      return;
    }

    setError("");
    alert("리뷰가 작성되었습니다! 🎉");
    navigate({ to: "/home" }); // 리뷰 작성 완료 후 홈으로 이동
  };

  return (
    <div className={styles.container}>
      <PageHeader onBackButtonClick={handleBackClick} title={"리뷰 작성"} />
      <div className={styles.content}>
        <div className={styles.label}>제목</div>
        <input
          type="text"
          placeholder="리뷰 제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        <div className={styles.label}>내용</div>
        <textarea
          placeholder="리뷰 내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.textarea}
        />
        <div className={styles.label}>별점</div>
        <div className={styles.rating}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? styles.starFilled : styles.starEmpty}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </div>
      <div className={styles.submit} onClick={handleSubmit}>
        리뷰 작성 완료
      </div>
    </div>
  );
}
