
import type { Language } from './languageSlice'

export const translations = {
  pt: {
    navigation: {
      home: 'Início',
      projects: 'Projetos',
      about: 'Sobre',
      skills: 'Competências',
      contact: 'Contato',
    },
    hero: {
      title: 'Desenvolvedor Full Stack criando experiências digitais modernas.',
      subtitle:
        'Transformo ideias em interfaces funcionais, rápidas e escaláveis, com foco em qualidade, desempenho e boas práticas.',
      projectsButton: 'Ver projetos',
      contactButton: 'Entrar em contato',
      highlight: 'React · Next.js · Node.js · SQL · APIs',
    },
    about: {
      title: 'Sobre mim',
    },
    projects: {
      title: 'Projetos',
      viewProject: 'Ver projeto',
      viewCode: 'Código',
    },
    skills: {
      title: 'Competências',
    },
    contact: {
      title: 'Contato',
      button: 'Enviar mensagem',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    navigation: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      title: 'Full Stack Developer creating modern digital experiences.',
      subtitle:
        'I turn ideas into functional, fast, and scalable interfaces, focusing on quality, performance, and best practices.',
      projectsButton: 'View projects',
      contactButton: 'Get in touch',
      highlight: 'React · Next.js · Node.js · SQL · APIs',
    },
    about: {
      title: 'About me',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View project',
      viewCode: 'Source code',
    },
    skills: {
      title: 'Skills',
    },
    contact: {
      title: 'Contact',
      button: 'Send message',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
} satisfies Record<Language, object>
