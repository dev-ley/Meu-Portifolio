'use client'

import styles from '../../styles/components/Projects.module.css'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Aulas de Inglês',
      description: 'Site moderno desenvolvido em Next.js, Redux, animações e design responsivo.',
      tech: ['Next.js', 'React', 'Redux'],
      image: '/images/projects/cursoingles.png',
      link: 'https://teacherjulie.netlify.app/',
      code: 'https://github.com/dev-ley/Portifolio-Juliana-Rodrigues'
    },
    {
      title: 'App de Treino Mobile Web',
      description: 'Aplicativo para Auxiliar o Treino em casa ou na sua Academia',
      tech: ['Node.js', 'SQL', 'React'],
      image: '/images/projects/gym.png',
      link: 'https://myappworkout.netlify.app/dashboard',
      code: 'https://github.com/dev-ley/workout-app-react'
    },
    {
      title: 'Em Breve...',
      description: 'Aplicativo mobile com rotinas personalizadas e acompanhamento de progresso.',
      tech: ['React Native', 'Expo'],
      image: '/images/projects/me.png',
      link: '#',
      code: '#'
    }
  ]

  return (
    <section id="projects" className={styles.projects}>
      
      <h2 className={styles.title}>
        Projetos
        <span className={styles.line}></span>
      </h2>

      <div className={styles.grid}>
        {projects.map((p, index) => (
          <div key={index} className={styles.card}>

            {/* IMAGEM DO PROJETO ABAIXO DO TÍTULO */}
            <div className={styles.previewWrapper}>
              <Image
                src={p.image}
                alt={p.title}
                width={600}
                height={350}
                className={styles.previewImage}
              />
            </div>

            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.description}</p>

            <div className={styles.techList}>
              {p.tech.map((t, i) => (
                <span key={i} className={styles.techTag}>{t}</span>
              ))}
            </div>

            <div className={styles.buttons}>
              <a href={p.link} target="_blank" className={styles.primaryBtn}>
                Ver Projeto
              </a>
              <a href={p.code} target="_blank" className={styles.codeBtn}>
                Código
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
