// Importing the necessary components from the 'lucide-react' library and Sanity
import { UserIcon } from "lucide-react"; // Icon for the 'author' document in the Sanity Studio
import { defineField, defineType } from "sanity"; // Methods to define fields and types in Sanity schema

// Define a new 'author' document type schema
export const author = defineType({
    name: "author", // The name of the document type, which will be used for this schema
    title: "Author", // Human-readable title for the document type in the Sanity Studio
    type: "document", // Specifies that this is a "document" type, meaning a content record in Sanity
    icon: UserIcon, // The icon that will be displayed for the 'author' document in Sanity Studio (from lucide-react)

    // Define the fields for the 'author' document
    fields: [
        defineField({
            name: 'id', // Field name that will be used internally to reference this field
            type: 'number' // This field will store a numeric value (e.g., a unique identifier for the author)
        }),
        
        defineField({
            name: 'name', // Field name for the author's full name
            type: 'string' // This field will store a string value (e.g., the author's name)
        }),
        
        defineField({
            name: 'username', // Field for the author's username
            type: 'string' // This field will store the username as a string
        }),
        
        defineField({
            name: 'email', // Field for the author's email address
            type: 'string' // This field will store the author's email as a string
        }),
        
        defineField({
            name: 'image', // Field for the author's image (URL)
            type: 'url' // This field will store a URL pointing to an image (could be a profile picture)
        }),
        
        defineField({
            name: 'bio', // Field for the author's biography
            type: 'text' // This field will store a longer, more detailed text (e.g., a short bio)
        }),
    ],

    // Preview configuration: how the 'author' document will be displayed in the Sanity Studio
    preview: {
        select: {
            title: "name", // The title displayed in the preview will be the 'name' field of the author document
        }
    }
});
