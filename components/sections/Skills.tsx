
'use client'

import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import styles from '../../styles/components/Skills.module.css'

import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiGit,
  DiPostgresql,
  DiJavascript1,
} from 'react-icons/di'

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGithub,
  SiFigma,
  SiMysql,
  SiC,
  SiDocker,
  SiJest,
  SiSwagger,
} from 'react-icons/si'

export default function Skills() {
  const language = useSelector((state: RootState) => state.language.current)

  const descriptions = {
    pt: [
      'Semântica, acessibilidade e SEO.',
      'Layouts modernos, responsividade e boas práticas.',
      'Lógica, DOM, APIs e padrões modernos.',
      'Tipagem, interfaces e segurança.',
      'Hooks, estado, componentes e arquitetura.',
      'SSR, SSG, rotas, otimização e deploy.',
      'Design rápido, responsivo e consistente.',
      'APIs, módulos, streams e backend escalável.',
      'Rotas, middlewares, autenticação e REST.',
      'Modelagem, consultas e agregações.',
      'SQL avançado, índices e otimização.',
      'Consultas, joins e modelagem relacional.',
      'Documentação de APIs e padrões REST.',
      'Algoritmos, estruturas de dados e otimização.',
      'Versionamento, branches e colaboração.',
      'PRs, issues, actions e CI/CD.',
      'Ambientes isolados e deploy moderno.',
      'UI, protótipos e design system.',
      'Testes unitários e integração.',
    ],
    en: [
      'Semantics, accessibility, and SEO.',
      'Modern layouts, responsive design, and best practices.',
      'Logic, DOM, APIs, and modern patterns.',
      'Typing, interfaces, and type safety.',
      'Hooks, state, components, and architecture.',
      'SSR, SSG, routing, optimization, and deployment.',
      'Fast, responsive, and consistent design.',
      'APIs, modules, streams, and scalable backend development.',
      'Routes, middleware, authentication, and REST.',
      'Data modeling, queries, and aggregations.',
      'Advanced SQL, indexes, and optimization.',
      'Queries, joins, and relational data modeling.',
      'API documentation and REST standards.',
      'Algorithms, data structures, and optimization.',
      'Version control, branches, and collaboration.',
      'Pull requests, issues, actions, and CI/CD.',
      'Isolated environments and modern deployment.',
      'UI, prototypes, and design systems.',
      'Unit and integration testing.',
    ],
  }

  const skills = [
    { icon: <DiHtml5 />, title: 'HTML5' },
    { icon: <DiCss3 />, title: 'CSS3' },
    { icon: <DiJavascript1 />, title: 'JavaScript (ES6+)' },
    { icon: <SiTypescript />, title: 'TypeScript' },
    { icon: <DiReact />, title: 'React' },
    { icon: <SiNextdotjs />, title: 'Next.js' },
    { icon: <SiTailwindcss />, title: 'Tailwind CSS' },
    { icon: <DiNodejs />, title: 'Node.js' },
    { icon: <SiExpress />, title: 'Express' },
    { icon: <DiMongodb />, title: 'MongoDB' },
    { icon: <DiPostgresql />, title: 'PostgreSQL' },
    { icon: <SiMysql />, title: 'MySQL' },
    { icon: <SiSwagger />, title: 'Swagger' },
    { icon: <SiC />, title: 'C' },
    { icon: <DiGit />, title: 'Git' },
    { icon: <SiGithub />, title: 'GitHub' },
    { icon: <SiDocker />, title: 'Docker' },
    { icon: <SiFigma />, title: 'Figma' },
    { icon: <SiJest />, title: 'Jest' },
  ]

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>
        {language === 'pt' ? 'Tecnologias & Competências' : 'Technologies & Skills'}
      </h2>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={skill.title} className={styles.card}>
            <div className={styles.icon}>{skill.icon}</div>
            <h3 className={styles.skillName}>{skill.title}</h3>
            <p className={styles.desc}>{descriptions[language][index]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
