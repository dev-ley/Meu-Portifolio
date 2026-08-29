'use client'

import styles from '../../styles/components/Contato.module.css'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiDownload, FiMessageCircle } from 'react-icons/fi'

export default function Contato() {
  return (
    <section id="contact" className={styles.contato}>
      <h2 className={styles.title}>Contato</h2>
      <p className={styles.subtitle}>
        Entre em contato para oportunidades, projetos ou colaborações.
      </p>

      <div className={styles.grid}>

        <a href="mailto:ley.desenvolvedor@gmail.com" className={styles.card}>
          <FiMail className={styles.icon} />
          <h3>Email</h3>
          <p>ley.desenvolvedor@gmail.com</p>
        </a>

        <a href="tel:+351924020289" className={styles.card}>
          <FiPhone className={styles.icon} />
          <h3>Telefone</h3>
          <p>+351 924 020 289</p>
        </a>

        <a href="https://linkedin.com/in/wr-dev" target="_blank" className={styles.card}>
          <FiLinkedin className={styles.icon} />
          <h3>LinkedIn</h3>
          <p>/in/wr-dev</p>
        </a>

        <a href="https://github.com/dev-ley" target="_blank" className={styles.card}>
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
          <FiDownload /> Baixar CV
        </a>

        <a 
          href="https://wa.me/351924020289" 
          target="_blank" 
          className={styles.btnSecondary}
        >
          <FiMessageCircle /> WhatsApp
        </a>
      </div>
    </section>
  )
}
