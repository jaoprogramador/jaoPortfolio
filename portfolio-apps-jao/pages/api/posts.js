import { getAllPosts } from "../../utils/api";

export default async function handler(req, res) {
  const { lang } = req.query;
  console.log('pages/api/posts---lang',lang);
  try {
    const posts = getAllPosts(lang, [
      "slug",
      "title",
      "image",
      "preview",
      "author",
      "date",
    ]);
    console.log('pages/api/posts---posts',posts);
    res.status(200).json(posts);
  } catch (error) {
    console.log('pages/api/posts---ERROR',error);
    res.status(500).json({ error: "Error fetching posts" });
  }
}
