import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
  export function getPostSlugs(language) {
    const postsDirectory = join(process.cwd(), `src/translations/${language}/posts`);
    return fs.readdirSync(postsDirectory);
  }
  
  export function getPostBySlug(language,slug, fields = []) {
    console.log('api getPostBySlug',language);
    const postsDirectory = join(process.cwd(), `src/translations/${language}/posts`);
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
  
    const items = {};
  
    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }
      if (field === "content") {
        items[field] = content;
      }
  
      if (typeof data[field] !== "undefined") {
        items[field] = data[field];
      }
    });
  
    return items;
  }
  
  export function getAllPosts(language,fields = []) {
    console.log('api getAllPosts',language);
    const slugs = getPostSlugs(language);
    const posts = slugs
      .map((slug) => getPostBySlug(language,slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
  }
 

 
