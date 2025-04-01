import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client'
import { after } from 'next/server'

export default async function View({id}:{id:string}) {

    // renaming the views
    // fetching the data from sanity cms using client
    const {views: totalViews}=await client.withConfig({useCdn: false}).fetch(STARTUP_VIEWS_QUERY,{id})
    
    // after helps to update the response after the execution is finished int he background so that it dosent block the ui
    after(async()=> await writeClient
    .patch(id)
    .set({views: totalViews+1})
    .commit())

  return (
    <div className='flex justify-end items-center mt-5 fixed bottom-3 right-3'>
        <div className='absolute -top-2 -right-2'>
            <Ping/>
        </div>
        <p className='font-medium text-[16px] bg-pink-200 px-4 py-2 rounded-lg capitalize'>
            <span className='font-black'>{totalViews} views</span>
        </p>
    </div>
  )
}
