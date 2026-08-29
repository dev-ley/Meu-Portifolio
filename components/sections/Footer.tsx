'use client'

import styles from '../../styles/components/Footer.module.css'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer id='footer' className={styles.footer}>
      
      <div className={styles.socials}>
        <a href="https://linkedin.com/in/wr-dev" target="_blank">
          <FiLinkedin />
        </a>

        <a href="https://github.com/dev-ley" target="_blank">
          <FiGithub />
        </a>

        <a href="mailto:ley.desenvolvedor@gmail.com">
          <FiMail />
        </a>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Wesley Rodrigues — Desenvolvedor Full Stack
      </p>

      <p className={styles.made}>
        Criado por <span>Wesley Rodrigues</span>
      </p>
    </footer>
  )
}
