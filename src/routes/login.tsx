import * as React from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import styles from '../styles/login.module.css';
import { useState } from 'react';
import logo from '../assets/img/logo.svg'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const handleDone = () => {
    navigate({ to: '/on-boarding' });
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="" />
      <input type="text" placeholder={'아이디를 입력해주세요'} style={{ marginBottom: '5px' }} />
      <input type="password" placeholder={'비밀번호를 입력해주세요'} />
      <div className={styles.join}>회원가입 하기</div>
      <div className={styles.login} onClick={handleDone}>로그인</div>
    </div>
  )
}
