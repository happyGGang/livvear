import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import styles from "../styles/signup.module.css";
import PageHeader from "../components/page_header";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인 추가
  const [name, setName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false); // 약관 동의 상태
  const [agreePrivacy, setAgreePrivacy] = useState(false); // 개인정보 동의 상태
  const [error, setError] = useState("");

  const handleBackClick = () => {
    navigate({ to: "/login" });
  };

  const handleSignup = () => {
    if (!username.trim()) {
      setError("아이디를 입력해주세요.");
      return;
    }
    if (!password.trim()) {
      setError("비밀번호를 입력해주세요.");
      return;
    }
    if (password.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!name.trim()) {
      setError("이름을 입력해주세요.");
      return;
    }
    if (!agreeTerms) {
      setError("이용 약관에 동의해주세요.");
      return;
    }
    if (!agreePrivacy) {
      setError("개인정보 수집에 동의해주세요.");
      return;
    }

    setError("");
    alert("회원가입 성공! 🎉");
    navigate({ to: "/login" });
  };

  return (
    <div className={styles.container}>
      <PageHeader onBackButtonClick={handleBackClick} title={"회원가입"} />
      <div className={styles.content}>
        <div className={styles.label}>아이디</div>
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <div className={styles.label}>비밀번호</div>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <div className={styles.label}>비밀번호 확인</div>
        <input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.input}
        />
        <div className={styles.label}>이름</div>
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="agreeTerms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <label htmlFor="agreeTerms">이용 약관에 동의합니다.</label>
        </div>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="agreePrivacy"
            checked={agreePrivacy}
            onChange={(e) => setAgreePrivacy(e.target.checked)}
          />
          <label htmlFor="agreePrivacy">개인정보 수집에 동의합니다.</label>
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </div>
      <div className={styles.submit} onClick={handleSignup}>
        회원가입
      </div>
    </div>
  );
}
