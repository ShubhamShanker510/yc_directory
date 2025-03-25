// Importing the necessary components from the 'lucide-react' library and Sanity
import { UserIcon } from "lucide-react"; // Icon for the 'author' document in the Sanity Studio
import { defineField, defineType } from "sanity"; // Methods to define fields and types in Sanity schema

// Define a new 'author' document type schema
export const startup = defineType({
    name: "startup", // The name of the document type, which will be used for this schema
    title: "Startup", // Human-readable title for the document type in the Sanity Studio
    type: "document", // Specifies that this is a "document" type, meaning a content record in Sanity

    // Define the fields for the 'author' document
    fields: [
        defineField({
            name: 'title', // Field name for the author's full name
            type: 'string' // This field will store a string value (e.g., the author's name)
        }),
        defineField({
            name: 'slug', // Field name that will be used internally to reference this field
            type: 'slug', // This field will store a numeric value (e.g., a unique identifier for the author)
            options: {
                source:'title'
            }
        }),
        
        
        defineField({
            name: 'author', // Field for the author's username
            type: 'reference',// This field will store the username as a string
            to:{type: 'author'}
        }),
        
        defineField({
            name: 'views', // Field for the author's email address
            type: 'number' // This field will store the author's email as a string
        }),
        
        defineField({
            name: 'description', // Field for the author's image (URL)
            type: 'text' // This field will store a URL pointing to an image (could be a profile picture)
        }),
        
        defineField({
            name: 'category', // Field for the author's biography
            type: 'string', // This field will store a longer, more detailed text (e.g., a short bio)
            validation:(Rule)=> Rule.min(1).max(20).required().error("Please enter a category")
        }),
        defineField({
            name: "image",
            type: "url",
            validation:(Rule)=>Rule.required()
        }), 
        defineField({
            name: "pitch",
            type: "markdown",
            validation:(Rule)=>Rule.required()
        })
    ],

    

});
