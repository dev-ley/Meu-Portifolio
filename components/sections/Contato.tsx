
'use client'

import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { translations } from '../../features/language/translations'
import styles from '../../styles/components/Contato.module.css'
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiDownload,
  FiMessageCircle,
} from 'react-icons/fi'

export default function Contato() {
  const language = useSelector((state: RootState) => state.language.current)
  const t = translations[language]

  return (
    <section id="contact" className={styles.contato}>
      <h2 className={styles.title}>{t.contact.title}</h2>

      <p className={styles.subtitle}>
        {language === 'pt'
          ? 'Entre em contato para oportunidades, projetos ou colaborações.'
          : 'Get in touch for opportunities, projects, or collaborations.'}
      </p>

      <div className={styles.grid}>
        <a href="mailto:ley.desenvolvedor@gmail.com" className={styles.card}>
          <FiMail className={styles.icon} />
          <h3>Email</h3>
          <p>ley.desenvolvedor@gmail.com</p>
        </a>

        <a href="tel:+351924020289" className={styles.card}>
          <FiPhone className={styles.icon} />
          <h3>{language === 'pt' ? 'Telefone' : 'Phone'}</h3>
          <p>+351 924 020 289</p>
        </a>

        <a
          href="https://linkedin.com/in/wr-dev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <FiLinkedin className={styles.icon} />
          <h3>LinkedIn</h3>
          <p>/in/wr-dev</p>
        </a>

        <a
          href="https://github.com/dev-ley"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <FiGithub className={styles.icon} />
          <h3>GitHub</h3>
          <p>github.com/dev-ley</p>
        </a>
      </div>

      <div className={styles.buttons}>
        <a
          href="/Wesley-Rodrigues-CV.pdf"
          download
          className={styles.btn}
        >
          <FiDownload />
          {language === 'pt' ? 'Baixar CV' : 'Download CV'}
        </a>

        <a
          href="https://wa.me/351924020289"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnSecondary}
        >
          <FiMessageCircle />
          WhatsApp
        </a>
      </div>
    </section>
  )
}
