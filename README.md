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