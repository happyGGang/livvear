import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import styles from "../styles/login.module.css";
import { useState } from "react";
import logo from "../assets/img/logo.svg";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleDone = () => {
    if (!id.trim()) {
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

    setError("");
    navigate({ to: "/on-boarding" });
  };

  const handleSignUp = () => {
    navigate({ to: "/signup" });
  }

  return (
    <div className={styles.container}>
      <img src={logo} alt="" />
      <input
        type="text"
        placeholder="아이디를 입력해주세요"
        style={{ marginBottom: "5px" }}
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.join} onClick={handleSignUp}>회원가입 하기</div>
      <div className={styles.login} onClick={handleDone}>
        로그인
      </div>
    </div>
  );
}
