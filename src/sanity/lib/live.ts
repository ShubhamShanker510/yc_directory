// It will make sure following code on the server only not on the client-side
// It can be userful for performing server-side actions like querying a database or fetching content that should not be exposed to the client
import "server-only"

// definelive function is used to enable live updates(real time content-fetching)
import { defineLive } from "next-sanity"

// The client file is responsible for making requsts to sanity api to fetch content
import {client} from '@/sanity/lib/client'


export const {sanityFetch, SanityLive}=defineLive({client})
// This line calls the defineLive function with the client (Sanity client instance), which sets up live content fetching. It returns two things: sanityFetch and SanityLive.

//     sanityFetch: A function for fetching data from Sanity, probably with live updates enabled.

//     SanityLive: Likely a component or utility that helps in rendering the live-updating content.