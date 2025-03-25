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
    