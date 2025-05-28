import Image from './Image'
import Link from './Link'
// components/Card.tsx

type CardProps = {
  title: string
  description: string
  imgSrc?: string
  href?: string
}

export function Card({ title, description, imgSrc, href }: CardProps) {
  return (
    <div className="max-w-md p-4 md:w-1/2">
      <div className="h-full overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-700">
        <img
          src={imgSrc}
          alt={title}
          className="w-full object-cover object-center md:h-36 lg:h-48"
        />
        <div className="p-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
          <p className="mb-3 leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
          <a
            href={href}
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  )
}

// const Card = ({ title, description, imgSrc, href }) => (
//   <div className="md max-w-[544px] p-4 md:w-1/2">
//     <div
//       className={`${
//         imgSrc && 'h-full'
//       } overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
//     >
//       {imgSrc &&
//         (href ? (
//           <Link href={href} aria-label={`Link to ${title}`}>
//             <Image
//               alt={title}
//               src={imgSrc}
//               className="object-cover object-center md:h-36 lg:h-48"
//               width={544}
//               height={306}
//             />
//           </Link>
//         ) : (
//           <Image
//             alt={title}
//             src={imgSrc}
//             className="object-cover object-center md:h-36 lg:h-48"
//             width={544}
//             height={306}
//           />
//         ))}
//       <div className="p-6">
//         <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
//           {href ? (
//             <Link href={href} aria-label={`Link to ${title}`}>
//               {title}
//             </Link>
//           ) : (
//             title
//           )}
//         </h2>
//         <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
//         {href && (
//           <Link
//             href={href}
//             className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
//             aria-label={`Link to ${title}`}
//           >
//             Learn more &rarr;
//           </Link>
//         )}
//       </div>
//     </div>
//   </div>
// )

// export default Card
