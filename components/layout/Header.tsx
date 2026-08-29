'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import styles from '../../styles/components/Header.module.css'

export default function Header() {
  const mode = useSelector((state: RootState) => state.theme.mode)
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className={`${styles.header} ${mode === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.logo}>Wesley Rodrigues</div>

      <div className={styles.rightControls}>

        {/* Botão hambúrguer (somente mobile) */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Menu desktop + mobile */}
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <a href="#hero" onClick={closeMenu}>Início</a>
        <a href="#projects" onClick={closeMenu}>Projetos</a>
        <a href="#about" onClick={closeMenu}>Sobre</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#contact" onClick={closeMenu}>Contato</a>
      </nav>
    </header>
  )
}
