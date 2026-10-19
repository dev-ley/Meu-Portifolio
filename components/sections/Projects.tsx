
'use client'

import Image from 'next/image'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { translations } from '../../features/language/translations'
import { projects } from '@/data/projects'
import styles from '../../styles/components/Projects.module.css'

export default function Projects() {
  const language = useSelector((state: RootState) => state.language.current)
  const t = translations[language]

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>
        {t.projects.title}
        <span className={styles.line}></span>
      </h2>

      <div className={styles.grid}>
        {projects.map((project, index) => {
          const descriptions = {
            pt: [
              'Aplicação de gestão financeira pessoal com autenticação JWT, controlo de receitas e despesas, dashboard financeiro e dados isolados por utilizador.',
              'Sistema de autenticação com registo, verificação de e-mail, login, rotas privadas, perfil e logout. Utiliza JWT em cookies HttpOnly e envio de e-mails com Brevo.',
              'Aplicação web para auxiliar os treinos em casa ou na academia, facilitando o acesso aos exercícios e às rotinas de treino.',
              'Site moderno e responsivo desenvolvido para apresentar serviços de aulas de inglês, com uma interface simples e acessível.',
            ],
            en: [
              'Personal finance management application with JWT authentication, income and expense tracking, a financial dashboard, and user-specific data.',
              'Authentication system with registration, email verification, login, protected routes, profile, and logout. Uses JWT in HttpOnly cookies and email delivery through Brevo.',
              'Web application designed to support workouts at home or at the gym, making exercises and workout routines easier to access.',
              'Modern, responsive website showcasing English lessons, with a simple and accessible interface.',
            ],
          }

          const description =
            descriptions[language][index] ?? project.description

          return (
            <article key={project.title} className={styles.card}>
              <div className={styles.previewWrapper}>
                <Image
                  src={project.image}
                  alt={
                    language === 'pt'
                      ? `Pré-visualização do projeto ${project.title}`
                      : `${project.title} project preview`
                  }
                  width={600}
                  height={350}
                  className={styles.previewImage}
                />
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>

              <p className={styles.cardDesc}>{description}</p>

              <div className={styles.techList}>
                {project.tech.map((technology) => (
                  <span key={technology} className={styles.techTag}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className={styles.buttons}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryBtn}
                >
                  {t.projects.viewProject}
                </a>

                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.codeBtn}
                  >
                    {t.projects.viewCode}
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
