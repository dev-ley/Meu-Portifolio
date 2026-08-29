'use client'

import { useEffect, useState } from 'react'
import styles from '../../styles/components/Hero.module.css'

export default function Hero() {

  const images = [
    "images/hero1.jpg",
    "images/hero3.jpg",
    "images/hero2.jpg"
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id='hero' className={styles.hero}>

      <div className={styles.container}>

        {/* BLOCO DE TEXTO */}
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            Desenvolvedor <span>Full Stack</span> criando experiências digitais modernas.
          </h1>

          <p className={styles.subtitle}>
            Transformo ideias em interfaces funcionais, rápidas e escaláveis — com foco em qualidade, performance e boas práticas.
          </p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>Ver Projetos</a>
            <a href="#contact" className={styles.secondaryBtn}>Entrar em Contato</a>
          </div>

          <p className={styles.highlight}>
            +5 anos de experiência • React • Next.js • Node.js • SQL • APIs
          </p>
        </div>

        {/* BLOCO DE IMAGEM — SLIDESHOW RESPONSIVO */}
        <div className={styles.imageBlock}>
          <img
            src={images[index]}
            className={styles.heroImage}
            alt="Hero slideshow"
          />
        </div>

      </div>

    </section>
  )
}
