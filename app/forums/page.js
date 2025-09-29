import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const topics = [
  {
    text: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    desc: "Discuss Python programming, libraries, Bugs, Errors and frameworks.",
    slug: "python-new"
  },
  {
    text: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Frontend, backend, Node.js, tooling, and modern JS patterns.",
    slug: "javascript-new"
  },
  {
    text: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    desc: "App Router, layouts, SSR/SSG, API routes, and deployment tips.",
    slug: "nextjs-new"
  },
  {
    text: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "Components, hooks, state management, performance and patterns.",
    slug: "react-new"
  },
  {
    text: "Web Development",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    desc: "Frontend, HTML, CSS, JavaScript, responsive design, and frameworks like React or Next.js.",
    slug: "web-development-new"
  }
];

const page = () => {
  return (
    <div className="container mx-auto my-20 text-black">
      <h1 className="text-3xl my-8 font-bold text-center">Discuss Forums</h1>
      <div className='flex flex-wrap justify-center'>
        {topics.map((topic) => {
          return <div key={topic.img} className='shadow-xl bg-slate-100 w-full md:w-1/4 m-4 flex flex-col items-center py-5 justify-center rounded-xl'>
            <Image width={54} height={54} src={topic.img} alt='not found' />
            <h2 className='text-2xl font-bold my-2'>{topic.text}</h2>
            <p className="my-2 mx-5 text-lg flex items-center justify-center font-semibold">{topic.desc}</p>
            <Link href={`/forum/${topic.slug}`}>
              <Button className='bg-blue-500 font-bold text-white py-2 px-4 my-3 rounded-lg hover:bg-blue-400'>Discuss Now</Button>
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default page
