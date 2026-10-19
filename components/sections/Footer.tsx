
'use client'

import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import styles from '../../styles/components/Footer.module.css'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

export default function Footer() {
  const language = useSelector((state: RootState) => state.language.current)

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://linkedin.com/in/wr-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>

        <a
          href="https://github.com/dev-ley"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FiGithub />
        </a>

        <a href="mailto:ley.desenvolvedor@gmail.com" aria-label="Email">
          <FiMail />
        </a>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Wesley Rodrigues —{' '}
        {language === 'pt' ? 'Desenvolvedor Full Stack' : 'Full Stack Developer'}
      </p>

      <p className={styles.made}>
        {language === 'pt' ? 'Criado por' : 'Created by'}{' '}
        <span>Wesley Rodrigues</span>
      </p>
    </footer>
  )
}
