import React, { useRef, useState, useContext,useEffect } from "react";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import Header from "../../components/Header";
import ContentSection from "../../components/ContentSection";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import BlogEditor from "../../components/BlogEditor";
import { useRouter } from "next/router";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";
import { LanguageContext } from "../../context/LanguageContext";
const BlogPost = ({ post }) => {
  // Contexto de idioma
  const { language } = useContext(LanguageContext);
  const [posts, setPosts] = useState(post);
  
  const [showEditor, setShowEditor] = useState(false);
  const textOne = useRef();
  const textTwo = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("🔍 Solicitando post en idioma:", language);
  
        const res = await fetch(`/api/postDetail?lang=${language}&slug=${router.query.slug}`);
        const data = await res.json();
  
        console.log("📥 Respuesta de la API:", data);
        console.log("📥 Respuesta de la API content:", data.content);
  
        // 🔥 FORZAR RE-RENDER: Evitar que React ignore la actualización si el objeto es idéntico
        setPosts((prevPosts) => JSON.stringify(prevPosts) !== JSON.stringify(data) ? data : { ...data });
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    fetchPosts();
  }, [language, router.query.slug]); // Asegúrate de que el efecto depende del slug también

  

  return (
    <>
      <Head>
        <title>{"Blog - " + posts.title}</title>
        <meta name="description" content={posts.preview} />
      </Head>
      {data.showCursor && <Cursor />}

      <div
        className={`container mx-auto mt-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog={true} />
        <div className="mt-10 flex flex-col">
          <img
            className="w-full h-96 rounded-lg shadow-lg object-cover"
            src={post.image}
            alt={posts.title}
          ></img>
          <h1
            ref={textOne}
            className="mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold"
          >
            {posts.title}
          </h1>
          <h2
            ref={textTwo}
            className="mt-2 text-xl max-w-4xl text-darkgray opacity-50"
          >
            {posts.tagline}
          </h2>
        </div>
        <ContentSection content={posts.content}></ContentSection>
        <Footer />
      </div>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => setShowEditor(true)} type={"primary"}>
            Edit this blog
          </Button>
        </div>
      )}

      {showEditor && (
        <BlogEditor
          post={post}
          close={() => setShowEditor(false)}
          refresh={() => router.reload(window.location.pathname)}
        />
      )}
    </>
  );
};
export async function getStaticProps( context ) {
  try {
    
    
    const { locale, params } = context;
    const { slug } = params; 
    const language = locale || 'en';
    
    console.log("BlogPostSLUG--getStaticProps Obteniendo post para:locale", language);
    const post = getPostBySlug(language,slug, [
      "date",
      "slug",
      "preview",
      "title",
      "tagline",
      "preview",
      "image",
      "content",
    ]);

    return {
      props: {
        post: {
          ...post,
           
        },
      },
    };
} catch (error) {
  console.error("Error en getStaticProps:", error);
  return { notFound: true };
}
}

export async function getStaticPaths(context) {
  const { locale } = context;
  const language = locale || 'en';

  console.log("Obteniendo getStaticPaths para locale:", language);

  const posts = getAllPosts(language,["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
} 
  
export default BlogPost;