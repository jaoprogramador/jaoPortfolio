import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Button from "../../components/Button";
//import {Button} from '@/components/Button'
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import AppTable from "../../pages/frameworks/AppTable";
import dataFrameworks from "../../data/appsDataFrameworks"
//"../../data/appsDataFrameworks.json";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";
const Framework = ({ posts }) => {
  const showBlog = useRef(data.showBlog);
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

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
    console.log('Frameworksindex :::dataFrameworks',);
    setMounted(true);
  }, []);

  
  return (
    showBlog.current && (
      <>
        {data.showCursor && <Cursor />}
        <Head>
          <title>Frameworks</title>
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
              Frameworks.
            </h1>
            <div className="desktop:grid-cols-6 justify-between gap-10">
            {/* <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-6 justify-between gap-10">
  */}
              <AppTable dataFrameworks={dataFrameworks} />
            </div>
          </div>
        </div>
        
      </>
    )
  );
};

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "title",
    "image",
    "preview",
    "author",
    "date",
  ]);

  return {
    props: {
      posts: [...posts],
    },
  };
}

export default Framework;
