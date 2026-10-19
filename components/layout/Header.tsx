
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../store'
import { toggleLanguage } from '../../features/language/languageSlice'
import { toggleTheme } from '../../features/theme/themeSlice'
import { translations } from '../../features/language/translations'
import styles from '../../styles/components/Header.module.css'

export default function Header() {
  const mode = useSelector((state: RootState) => state.theme.mode)
  const language = useSelector((state: RootState) => state.language.current)
  const dispatch = useDispatch<AppDispatch>()
  const [open, setOpen] = useState(false)

  const t = translations[language]
  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`${styles.header} ${mode === 'dark' ? styles.dark : styles.light}`}
    >
      <div className={styles.leftGroup}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          Wesley Rodrigues
        </a>

        <div className={styles.quickControls}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => dispatch(toggleLanguage())}
            aria-label={
              language === 'pt'
                ? 'Mudar idioma para inglês'
                : 'Change language to Portuguese'
            }
            title={language === 'pt' ? 'English' : 'Português'}
          >
            <Image
              src={
                language === 'pt'
                  ? '/images/br-flag.png'
                  : '/images/us-flag.png'
              }
              alt={
                language === 'pt'
                  ? 'Bandeira do Brasil'
                  : 'Bandeira dos Estados Unidos'
              }
              width={24}
              height={16}
              className={styles.flag}
            />
          </button>

          <button
            type="button"
            className={styles.iconButton}
            onClick={() => dispatch(toggleTheme())}
            aria-label={
              mode === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
            }
            title={mode === 'dark' ? 'Tema claro' : 'Tema escuro'}
          >
            {mode === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <a href="#hero" onClick={closeMenu}>
          {t.navigation.home}
        </a>
        <a href="#projects" onClick={closeMenu}>
          {t.navigation.projects}
        </a>
        <a href="#about" onClick={closeMenu}>
          {t.navigation.about}
        </a>
        <a href="#skills" onClick={closeMenu}>
          {t.navigation.skills}
        </a>
        <a href="#contact" onClick={closeMenu}>
          {t.navigation.contact}
        </a>
      </nav>
    </header>
  )
}
