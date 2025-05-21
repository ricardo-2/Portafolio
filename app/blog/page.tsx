import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'

const POSTS_PER_PAGE = 1

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage(props: { searchParams: Promise<{ page: string }> }) {
  const posts = allCoreContent(sortPosts(allBlogs))
  //const pageNumber = 1
 // const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  //const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    //currentPage: pageNumber,
    //totalPages: totalPages,
  }

  return (
  //   <div>
  // <p>aqui va mi descripcion</p>    
         
  //  </div>
    
  <div className="prose dark:prose-invert max-w-none">
    <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
      Soy un apasionado por la tecnología con más de 10 años de experiencia en desarrollo de software, enfocado en crear soluciones robustas y escalables para empresas en distintas industrias.
    </p>

    <h2 className="mt-6 text-2xl font-bold text-blue-600 dark:text-blue-400">
      Experiencia Profesional
    </h2>
    <p className="mt-2 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
      He trabajado en proyectos que van desde aplicaciones móviles hasta plataformas web de alto rendimiento. Mi enfoque está en la calidad del código, la escalabilidad y la experiencia del usuario.
    </p>

    <h2 className="mt-6 text-2xl font-bold text-blue-600 dark:text-blue-400">
      Habilidades Técnicas
    </h2>
    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
      <li>Trabajo en equipo</li>
      <li>Honestidad</li>
      <li>Puntualidad</li>
      <li>Responsabilidad</li>
    </ul>

    <p className="mt-6 text-lg italic text-gray-500 dark:text-gray-400">
      Siempre estoy buscando aprender más y colaborar en proyectos desafiantes que aporten valor real.
    </p>
  </div>

    // <ListLayout
    //   posts={posts}
    //  // initialDisplayPosts={initialDisplayPosts}
    // //  pagination={pagination}
    //   title="All Posts"
    // />
  )
}
