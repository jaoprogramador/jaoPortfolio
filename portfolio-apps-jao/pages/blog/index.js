import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState ,useContext} from "react";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";
import { LanguageContext } from "../../context/LanguageContext";

//const Blog = ({ posts }) => {
  const Blog = ({ initialPosts }) => {
  const showBlog = useRef(data.showBlog);
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  // Contexto de idioma
  const { language } = useContext(LanguageContext);
  const [posts, setPosts] = useState(initialPosts);
  
  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
    if (showBlog.current) stagger([text.current], { y: 30 }, { y: 0 });
    else router.push("/");
  }, []);

  useEffect(() => {
    setMounted(true);
    /* console.log("blog.index.js --posts", posts);
    console.log("blog.index.js --language", language);
    console.log("blog.index.js --showBlog.current", showBlog.current); */
    console.log("blog.index.js --data.showCursor", data.showCursor); 
    console.log("blog.index.js --data.showCursor", data); 
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/posts?lang=${language}`);
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${await res.text()}`);
        }
        const data = await res.json();
        console.log("blog.index.js --data", data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    fetchPosts(); 
  
  }, [language]);


  return (

    showBlog.current && (
      <>
        {data.showCursor && <Cursor />}
        <Head>
          <title>Blog</title>
        </Head>
        <div
          className={`container mx-auto mb-10 ${
            data.showCursor && "cursor-none"
          }`}
        >
          <Header isBlog={true}></Header>
          <div className="mt-10">
            <h1
              ref={text}
              className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
            >
              Blog.
            </h1>
            <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
              {posts &&
                posts.map((post) => (
                  <div
                    className="cursor-pointer relative"
                    key={post.slug}
                    onClick={() => Router.push(`/blog/${post.slug}`)}
                  >
                    <img
                      className="w-full h-60 rounded-lg shadow-lg object-cover"
                      src={post.image}
                      alt={post.title}
                    ></img>
                    <h2 className="mt-5 text-4xl">{post.title}</h2>
                    <p className="mt-2 opacity-50 text-lg">{post.preview}</p>
                    <span className="text-sm mt-5 opacity-25">
                      {ISOToDate(post.date)}
                    </span>
                    {process.env.NODE_ENV === "development" && mounted && (
                      <div className="absolute top-0 right-0">
                        <Button
                          onClick={(e) => {
                            deleteBlog(post.slug);
                            e.stopPropagation();
                          }}
                          type={"primary"}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        {process.env.NODE_ENV === "development" && mounted && (
          <div className="fixed bottom-6 right-6">
            <Button onClick={createBlog} type={"primary"}>
              Add New Post +{" "}
            </Button>
          </div>
        )}
      </>
    )
  );
};


  
  export async function getStaticProps(context) {
    const language = context.locale || "eu";
    console.log("🛠️ getStaticProps - Fetching posts for language:", language);
    
    const posts = getAllPosts(language, [ 
      "slug",
      "title",
      "image",
      "preview",
      "author",
      "date",]);
    return { props: { initialPosts: posts } };
  } 
    /*export async function getStaticProps({ locale }) {
      const language = locale || "en"; // Idioma por defecto
      console.log("🛠️ getStaticProps - Fetching posts for language:", language);
    
      const posts = getAllPosts(language, ["slug", "title", "image", "preview", "author", "date"]);
    
      return {
        props: { posts },
      };
    }
     export async function getStaticPaths() {
      return {
        paths: [
          { params: {}, locale: "en" }, // Inglés
          { params: {}, locale: "es" }, // Español
          { params: {}, locale: "eu" },
        ],
        fallback: false,
      };
    } */
    
  
export default Blog;
