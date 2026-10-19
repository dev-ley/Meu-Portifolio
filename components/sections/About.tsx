
'use client'

import Image from 'next/image'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { translations } from '../../features/language/translations'
import styles from '../../styles/components/About.module.css'

export default function About() {
  const language = useSelector((state: RootState) => state.language.current)
  const t = translations[language]

  return (
    <section id="about" className={styles.about}>
      {/* BLOCO 1 — SOBRE MIM */}
      <div className={styles.container}>
        <div className={styles.imageBlock}>
          <Image
            src="/images/fotoperfil.png"
            alt={
              language === 'pt'
                ? 'Foto de apresentação de Wesley Rodrigues'
                : 'Wesley Rodrigues profile photo'
            }
            width={400}
            height={400}
            loading="eager"
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.title}>{t.about.title}</h2>

          <p className={styles.text}>
            {language === 'pt' ? (
              <>
                Sou <strong>Wesley Rodrigues</strong>, desenvolvedor{' '}
                <strong>Full Stack</strong> apaixonado por criar interfaces
                modernas, acessíveis e com foco total em performance. Trabalho
                diariamente com <strong>React, Next.js, Node.js e SQL</strong>,
                sempre buscando entregar soluções que realmente fazem
                diferença.
              </>
            ) : (
              <>
                I&apos;m <strong>Wesley Rodrigues</strong>, a{' '}
                <strong>Full Stack Developer</strong> passionate about building
                modern, accessible interfaces with a strong focus on
                performance. I work daily with{' '}
                <strong>React, Next.js, Node.js, and SQL</strong>, always
                striving to deliver solutions that make a real difference.
              </>
            )}
          </p>

          <p className={styles.text}>
            {language === 'pt'
              ? 'Minha jornada na tecnologia começou pela curiosidade, mas evoluiu para uma busca constante por excelência. Hoje, meu objetivo é construir produtos digitais que unam design, velocidade e experiência do usuário.'
              : 'My journey in technology began with curiosity and evolved into a constant pursuit of excellence. Today, my goal is to build digital products that combine design, speed, and user experience.'}
          </p>
        </div>
      </div>

      {/* BLOCO 2 — 42 PORTO */}
      <div className={styles.container}>
        <div className={styles.imageBlock}>
          <Image
            src="/images/grupo42.png"
            alt={
              language === 'pt'
                ? 'Turma da 42 Porto'
                : '42 Porto campus community'
            }
            width={400}
            height={400}
            loading="eager"
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.title}>42 Porto – Portugal</h2>

          <p className={styles.text}>
            {language === 'pt' ? (
              <>
                Para elevar meu nível técnico, ingressei na{' '}
                <strong>42 Porto</strong>, uma das escolas de programação mais
                inovadoras do mundo. Sem aulas tradicionais, o aprendizado é
                baseado em desafios reais, colaboração e muita resiliência.
              </>
            ) : (
              <>
                To strengthen my technical skills, I joined{' '}
                <strong>42 Porto</strong>, one of the world&apos;s most
                innovative programming schools. Without traditional classes,
                learning is based on real-world challenges, collaboration, and
                resilience.
              </>
            )}
          </p>

          <p className={styles.text}>
            {language === 'pt' ? (
              <>
                Durante o processo seletivo, conquistei a{' '}
                <strong>maior pontuação entre os candidatos</strong>,
                reforçando minha capacidade de resolver problemas complexos e
                minha dedicação ao aprendizado contínuo.
              </>
            ) : (
              <>
                During the selection process, I achieved the{' '}
                <strong>highest score among the candidates</strong>,
                demonstrating my ability to solve complex problems and my
                commitment to continuous learning.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
