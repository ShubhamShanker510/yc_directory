// Importing the necessary 'StructureResolver' type from Sanity
import type { StructureResolver } from 'sanity/structure';

// Defining the structure for how content will be displayed in the Sanity Studio
// The function `structure` uses the structure builder API to define custom navigation
export const structure: StructureResolver = (S) =>
  // Create a list of items for the content section of the Sanity Studio
  S.list()
    .title('Content') // Title of the top-level section in the Sanity Studio
    .items([
      // Add a list of document items for the 'author' document type
      // This will show the "Authors" section in the Studio
      S.documentTypeListItem('author').title('Authors'),// List of 'author' documents with the title 'Authors'
      S.documentTypeListItem('startup').title('Startups')
    ]);
