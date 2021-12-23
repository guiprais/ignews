// import Image from 'next/image';

import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Hedaer() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href="#home" className={styles.active}>
            Home
          </a>
          <a href="#posts">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
