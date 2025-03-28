# Step-1 SetUp authjs
    1. follow the steps of the documentation
    2. Choose a Github provider
    3. To setup Github as your provider go to developer settings than choose outh options and do the setup

# Step-2 Setup of authentication on frontend side
    1. In Navbar file uses session to get the user details, sign in and sign out from auth
    2. signin and sign out work as a promise and check the file how to setup them
    3. Workflow how authentication works given below
        * Click "Sign in with Github"
        * Inititate authentication
        * Redirect to Github OAuth
        * Request authorization
        * Grant Permisission
        * Send authorization code
        * Exchange code for access token
        * Return access token
        * Request user data
        * Return user data
        * Create session
        * Redirected to the home page

# Step-3 Building Client Side
    1. Make sure the components should be outside the app folder
    2. Install shadcdn
    3. in root folder thier is a main file page.tsx
    4. Build navbar, herosection
    5. Handle query using searchparams

# Step-4 Setup of Sanity
    1. to use the sanity studio go the url and go to /studio
    2. In schemaType folder setup of author and structure
    3. Checkout the folder and files of sanity

# Step -5 How to add data and extract from sanity
    1. To add data currently you can go the /studio path and can add author and startups
    2. To extract the data build a queries file in sanity/lib/queries.ts
    3. In page.tsx calling the query in post
    4. Dispaly a content in next js checkout this file ▶️ https://www.sanity.io/learn/course/day-one-with-sanity-studio/bringing-content-to-a-next-js-front-end
    5. Make sure to add these these line in package.json given below:
        "predev": "npm run typegen",
        "prebuild": "npm run typegen",
        "typegen": "sanity schema extract --path=./sanity/extract.json && sanity typegen generate"

## Static Generation
    where html pages are pre-rendered at build time. This result in faster load times since the content is served as static files

## Incremental Static Regeneration(ISR)
    It allow you to update static content after the site has been built and deployed.
    ->With the help of ISR you can regenerate specific pages based on predefined interval or trigger, ensuring the content remian fresh without rebuilding the entire site

## Server-Sider Rendering
    Generate HTML pages on each request, While SSR ensure that content is always up to date , it can be slower compareed to SSG.

## API Caching
    API routes in Next JS can benefit from caching to reduce latency and server load.Implementing caching in API routes ensures that frequently data is served quickly

## Client-Side Caching
    It involves storing data in the browser to reduce the need for repeated network requests.This can be achieved using service workers,local storage , or in-memory caching


# Step -6 Caching and live api
    1. In client.ts file in /sanity/lib folder you can check that it is false (by default it is true) .To make it false is that to dont cache our request data in every 60 sec , just to get data on every refresh
    
    2. But what if I want the dynamic data without refreshing for that we will use live content api from sanity. Check out the live.ts folder in /sanity/lib

    3.In env file setup of NEXT_PUBLIC_SANITY_API_VERSION

    4. In page.tsx using sanityfetch and sanitylive to get live data

    5. To get the filter data in page.tsx file we are using search params and getting data from the query and than sending it to the queries.ts file and using $search method getting the data

## Partial Pre-rendering
    The ability to pre-render only specific parts or section of a page rather than rendering the entire page on the server during the intial request.This allow you to optimize performance by rendering only certain parts of a page that are needed and leave others to be rendered on the client side.This hybrid approach combines the advantages of both Static Generation and Client-Side Rendering.

    👉When to Use Partial Pre-Rendering

    zSEO Optimization: Static content can be pre-rendered, which improves SEO because search engines can crawl the content.

    Faster Loading: Static content is served immediately, while dynamic parts are fetched after the page load.

    Flexibility: You can update dynamic content without needing to re-build or re-render the whole page.

# Step-7 Building Startuppage according to the id
    1. create a query in queries.ts file to get the startup according to its id.
    2. Build a static and dynamic content where startup details will be static and views will be dynamic.
    3. Try to handle the static and dynamic content with the help of Partial pre rendering
    4. Than also built a views component to get the dynamic content
    5. For the getting the views create a new query in queries.tsx.