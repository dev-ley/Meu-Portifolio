'use client'

import styles from '../../styles/components/Skills.module.css'

import { 
  DiReact, DiNodejs, DiMongodb, DiHtml5, DiCss3, DiGit, DiPostgresql, DiJavascript1 
} from "react-icons/di"

import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiGithub,
  SiFigma, SiMysql, SiC, SiDocker, SiJest, SiSwagger
} from "react-icons/si"

export default function Skills() {

  const skills = [
    // FRONTEND
    { icon: <DiHtml5 />, title: 'HTML5', desc: 'Semântica, acessibilidade e SEO.' },
    { icon: <DiCss3 />, title: 'CSS3', desc: 'Layouts modernos, responsividade e boas práticas.' },
    { icon: <DiJavascript1 />, title: 'JavaScript (ES6+)', desc: 'Lógica, DOM, APIs e padrões modernos.' },
    { icon: <SiTypescript />, title: 'TypeScript', desc: 'Tipagem, interfaces e segurança.' },
    { icon: <DiReact />, title: 'React', desc: 'Hooks, estado, componentes e arquitetura.' },
    { icon: <SiNextdotjs />, title: 'Next.js', desc: 'SSR, SSG, rotas, otimização e deploy.' },
    { icon: <SiTailwindcss />, title: 'Tailwind CSS', desc: 'Design rápido, responsivo e consistente.' },

    // BACKEND
    { icon: <DiNodejs />, title: 'Node.js', desc: 'APIs, módulos, streams e backend escalável.' },
    { icon: <SiExpress />, title: 'Express', desc: 'Rotas, middlewares, autenticação e REST.' },
    { icon: <DiMongodb />, title: 'MongoDB', desc: 'Modelagem, consultas e agregações.' },
    { icon: <DiPostgresql />, title: 'PostgreSQL', desc: 'SQL avançado, índices e otimização.' },
    { icon: <SiMysql />, title: 'MySQL', desc: 'Consultas, joins e modelagem relacional.' },
    { icon: <SiSwagger />, title: 'Swagger', desc: 'Documentação de APIs e padrões REST.' },

    // SISTEMAS / CS
    { icon: <SiC />, title: 'C', desc: 'Algoritmos, estruturas de dados e otimização.' },

    // FERRAMENTAS
    { icon: <DiGit />, title: 'Git', desc: 'Versionamento, branches e colaboração.' },
    { icon: <SiGithub />, title: 'GitHub', desc: 'PRs, issues, actions e CI/CD.' },
    { icon: <SiDocker />, title: 'Docker', desc: 'Ambientes isolados e deploy moderno.' },

    // DESIGN
    { icon: <SiFigma />, title: 'Figma', desc: 'UI, protótipos e design system.' },

    // TESTES
    { icon: <SiJest />, title: 'Jest', desc: 'Testes unitários e integração.' },
  ]

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Tecnologias & Competências</h2>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{skill.icon}</div>
            <h3 className={styles.skillName}>{skill.title}</h3>
            <p className={styles.desc}>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
