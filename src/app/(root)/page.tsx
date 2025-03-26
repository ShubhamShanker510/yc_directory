import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard,{StartupTypeCard} from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";


export default async  function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {

  const query=(await searchParams).query;
  const posts=await client.fetch(STARTUPS_QUERY);
  console.log(JSON.stringify(posts, null, 2))


  return (
    <>
    <section className="w-full bg-pink-500 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
    <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">Pitch Your Startup, <br/> Connect With Entrepeneurs</h1>
    <p className=" font-medium text-[20px] text-white text-center break-words max-w-3xl">
      Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions
    </p>
    <SearchForm query={query}/>
    </section>
    <section className="px-6 py-10 max-w-7xl mx-auto">
    <p className="text-[30px] font-extrabold">
      {query? `Search result for ${query}`:"All startups"}
    </p>
    <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
      {
        posts?.length>0 ?(
          posts.map((post:StartupTypeCard, index: number)=>(
            <StartupCard key={post?._id} post={post}/>
          ))
        ):(
          <p className="text-black-100 text-sm font-normal">No startups found</p>
        )
      }
    </ul>
    </section>
    </>
  );
}
