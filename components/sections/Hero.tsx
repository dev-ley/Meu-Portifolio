
'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { translations } from '../../features/language/translations'
import styles from '../../styles/components/Hero.module.css'

export default function Hero() {
  const language = useSelector((state: RootState) => state.language.current)
  const t = translations[language]

  const images = [
    '/images/hero1.jpg',
    '/images/hero3.jpg',
    '/images/hero2.jpg',
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            {language === 'pt' ? (
              <>
                Desenvolvedor <span>Full Stack</span> criando experiências
                digitais modernas.
              </>
            ) : (
              <>
                Full Stack <span>Developer</span> creating modern digital
                experiences.
              </>
            )}
          </h1>

          <p className={styles.subtitle}>{t.hero.subtitle}</p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              {t.hero.projectsButton}
            </a>

            <a href="#contact" className={styles.secondaryBtn}>
              {t.hero.contactButton}
            </a>
          </div>

          <p className={styles.highlight}>{t.hero.highlight}</p>
        </div>

        <div className={styles.imageBlock}>
          <img
            src={images[index]}
            className={styles.heroImage}
            alt={
              language === 'pt'
                ? 'Imagens de apresentação do portfólio'
                : 'Portfolio slideshow'
            }
          />
        </div>
      </div>
    </section>
  )
}
