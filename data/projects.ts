export type Project = {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
    code?: string;
};

export const projects: Project[] = [
    {
        title: 'FinanceFlow',
        description:
            'Aplicação de gestão financeira pessoal com autenticação JWT, controlo de receitas e despesas, dashboard financeiro e dados isolados por utilizador.',
        tech: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'NestJS',
            'Prisma ORM',
            'PostgreSQL',
            'JWT',
            'Docker',
            'Jest',
            'Vercel',
            'Render',
            'Neon',
        ],
        image: '/images/projects/financeflow.jpeg',
        link: 'https://financeflow-nu-pearl.vercel.app/',
        code: 'https://github.com/dev-ley/FinanceFlow',
    },
    {
        title: 'AuthFlow',
        description:
            'Sistema de autenticação com registo, verificação de e-mail, login, rotas privadas, perfil e logout. Utiliza JWT em cookies HttpOnly e envio de e-mails com Brevo.',
        tech: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'NestJS',
            'PostgreSQL',
            'Prisma ORM',
            'Passport.js',
            'JWT',
            'bcrypt',
            'Brevo',
            'Vercel',
            'Render',
            'Neon',
        ],
        image: '/images/projects/authflow.jpeg',
        link: 'https://auth-flow-mu-ten.vercel.app/',
        code: 'https://github.com/dev-ley/authflow',
    },
    {
        title: 'Workout React App',
        description:
            'Aplicação web de fitness desenvolvida para proporcionar uma experiência moderna e responsiva. Integra autenticação com Google, Firebase Authentication, Cloud Firestore com persistência local e infraestrutura de notificações push com Firebase Cloud Messaging. Utiliza React, TypeScript e Progressive Web App (PWA).',
        tech: [
            'React 19',
            'TypeScript',
            'Vite 8',
            'React Router 7',
            'Firebase Authentication',
            'Cloud Firestore',
            'Firebase Cloud Messaging',
            'Progressive Web App',
            'vite-plugin-pwa',
            'Workbox',
            'CSS',
        ],
        image: '/images/projects/WorkoutReactApp.jpeg',
        link: 'https://workout-app-react-l3t9.vercel.app/',
        code: 'https://github.com/dev-ley/workout-app-react',
    },
    {
        title: 'Aulas de Inglês',
        description:
            'Site moderno e responsivo desenvolvido para apresentar serviços de aulas de inglês, com uma interface simples e acessível.',
        tech: ['Next.js', 'React', 'Redux'],
        image: '/images/projects/cursoingles.png',
        link: 'https://teacherjulie.netlify.app/',
        code: 'https://github.com/dev-ley/Portifolio-Juliana-Rodrigues',
    },
];
