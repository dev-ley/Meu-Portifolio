'use client'

import styles from '../../styles/components/About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className={styles.about}>

      {/* BLOCO 1 — SOBRE MIM */}
      <div className={styles.container}>

        <div className={styles.imageBlock}>
          <Image
            src="/images/fotoperfil.png"
            alt="Turma da 42 Porto"
            width={400}
            height={400}
            loading='eager'

            className={styles.image}
          />

        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.title}>Sobre mim</h2>

          <p className={styles.text}>
            Sou <strong>Wesley Rodrigues</strong>, desenvolvedor <strong>Full Stack</strong> apaixonado por criar interfaces modernas,
            acessíveis e com foco total em performance. Trabalho diariamente com <strong>React, Next.js, Node.js e SQL</strong>,
            sempre buscando entregar soluções que realmente fazem diferença.
          </p>

          <p className={styles.text}>
            Minha jornada na tecnologia começou pela curiosidade, mas evoluiu para uma busca constante por excelência.
            Hoje, meu objetivo é construir produtos digitais que unam design, velocidade e experiência do usuário.
          </p>
        </div>
      </div>

      {/* BLOCO 2 — 42 PORTO */}
      <div className={styles.container}>

        <div className={styles.imageBlock}>
          <Image
            src="/images/grupo42.png"
            alt="Turma da 42 Porto"
            width={400}
            height={400}
            loading='eager'
            className={styles.image}
          />

        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.title}>42 Porto – Portugal</h2>

          <p className={styles.text}>
            Para elevar meu nível técnico, ingressei na <strong>42 Porto</strong>, uma das escolas de programação mais inovadoras do mundo.
            Sem aulas tradicionais, o aprendizado é baseado em desafios reais, colaboração e muita resiliência.
          </p>

          <p className={styles.text}>
            Durante o processo seletivo, conquistei a <strong>maior pontuação entre os candidatos</strong>, reforçando minha capacidade
            de resolver problemas complexos e minha dedicação ao aprendizado contínuo.
          </p>
        </div>

      </div>

    </section>
  )
}
