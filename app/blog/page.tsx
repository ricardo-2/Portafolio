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
        I am passionate about technology in software development, focused on creating robust and
        scalable solutions for companies across various industries.
      </p>

      <h2 className="mt-6 text-2xl font-bold text-blue-600 dark:text-blue-400">
        Professional Experience
      </h2>
      <p className="mt-2 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
        I have worked on projects ranging from mobile applications to high-performance web
        platforms. My focus is on code quality, scalability, and user experience. Junior Frontend
        Developer focused on React and Next.js, passionate about building modern, clean, and
        responsive interfaces. I have developed personal projects that are part of my portfolio,
        where I use technologies like Tailwind CSS to create visually appealing designs adaptable to
        all types of devices. I strive to write clean and reusable code, applying principles of
        componentization, responsive design, and best practices in project structure. I have also
        worked with dynamic content (such as blog posts), form integration, and visual effects using
        SVG and CSS animations to enhance the user experience.
      </p>

      <h2 className="mt-6 text-2xl font-bold text-blue-600 dark:text-blue-400">Technical Skills</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>Teamwork</li>
        <li>Honesty</li>
        <li>Punctuality</li>
        <li>Responsibility</li>
      </ul>

      <p className="mt-6 text-lg text-gray-500 italic dark:text-gray-400">
        I am always looking to learn more and collaborate on challenging projects that provide real
        value.
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
