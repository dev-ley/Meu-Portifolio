
'use client';

import Image from 'next/image';
import { projects } from '@/data/projects';
import styles from '../../styles/components/Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>
        Projetos
        <span className={styles.line}></span>
      </h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            <div className={styles.previewWrapper}>
              <Image
                src={project.image}
                alt={`Pré-visualização do projeto ${project.title}`}
                width={600}
                height={350}
                className={styles.previewImage}
              />
            </div>

            <h3 className={styles.cardTitle}>{project.title}</h3>

            <p className={styles.cardDesc}>{project.description}</p>

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
                Ver Projeto
              </a>

              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.codeBtn}
                >
                  Código
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
