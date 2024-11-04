import React from "react";
import back from "../assets/icon/back.svg";
import styles from "./page_header.module.css";

interface PageHeaderProps {
  title: string;
  onBackButtonClick: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  onBackButtonClick,
}) => {
  return (
    <div className={styles.container}>
      <img src={back} alt="back" onClick={onBackButtonClick} />
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeader;
