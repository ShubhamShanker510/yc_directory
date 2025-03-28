
import { formatDate } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// It is used to render the the pitch content written in markdown format
import markdownit from 'markdown-it'

import React, { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import View from '@/components/view'

const md=markdownit()

export default async function page({params}:{params: Promise<{id: string}>}) {

    // getting id from the url
    const id=(await params).id

    // fetching data
    const post=await client.fetch(STARTUP_BY_ID_QUERY, {id})

    if(!post) return notFound();

    // converting markdown into html
    const parsedContent=md.render(post?.pitch || '')
  return (
    <>
    <section className='w-full bg-pink-500 min-h-[230px] pattern flex justify-center items-center flex-col py-10 px-6;
    '>
      <p className='bg-yellow-300 px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative tag-tri'>{formatDate(post?._createdAt)}</p>
      <h1 className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5'>{post.title}</h1>
      <p className='font-medium text-[20px] text-white max-w-5xl text-center break-words'>
        {post.description}
      </p>
    </section>
    <section className='px-6 py-10 max-w-7xl mx-auto'>
      <img src={post.image} alt="thumbnail" className='w-full h-auto rounded-xl'/>
      <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
        <div className='flex justify-between items-center gap-5'>
            <Link href={`/user/${post.author?._id}`}>
              <Image src={post.author.image} alt='avatar' width={64} height={64} className='rounded-full drop-shadow-lg'/>

              <div>
                <p className='font-medium text-[20px] text-black'>{post.author.name}</p>
              <p className='font-medium text-[16px] text-gray-500'>@{post.author.username}</p>
              </div>
            </Link>
            <p className='font-medium text-[16px] bg-gray-300 px-4 py-2 rounded-full'>
              {post.category}
            </p>
        </div>
        <h3 className='text-[30px] font-bold text-black'>
          Pitch Details
        </h3>
        {parsedContent?(
          <article
          className="prose max-w-4xl font-work-sans break-all"
          dangerouslySetInnerHTML={{__html: parsedContent}}
          />
        ):(
          <p className='text-black text-sm font-normal'>No details provided</p>
        )}
      </div>

      <hr className='border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto'/>

      {/* TODO: Editor selected startups */}

        {/* Suspense allow the view component to load asynchronusly, providing a smmother user experience by not blocking the entire page */}

        {/* The fallback for loading is a skeleton loader, which will display a gray loading bar until the View component is ready. */}
        <Suspense fallback={<Skeleton className='bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3'/> } >
        <View id={id}/>
        </Suspense>
    </section>
    </>
  )
}
