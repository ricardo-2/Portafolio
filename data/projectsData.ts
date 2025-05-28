interface Project {
  title: string
  description: string
  href?: string
  imgSrc: string
}

const projectsData: Project[] = [
  {
    title: 'Escuela de Idiomas',
    description:
      'Sitio web profesional para una escuela de idiomas, desarrollado con Next.js y desplegado en Vercel.',
    imgSrc: '/static/images/escuela-idiomas.jpg', // Asegúrate de tener esta imagen en esa ruta
    href: 'https://escuela-idiomas.vercel.app/',
  },
  // puedes seguir agregando más proyectos aquí
]

export default projectsData
