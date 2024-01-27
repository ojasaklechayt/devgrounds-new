'use client'
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";


import Faq from "../components/faq";


const Home = () => {
  return (
    <>
      <Head>
        <title>DevGround</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="DevGround Benefits"
        title=" Why should you use this landing page">
        DevGround is a free tool which help developers to interact and create a better system for the future to contribute in the development of the good projects.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Understanding the Work">
        This video will help you to understand the process of how DevGround works and how you can use it to make your work easy.
      </SectionTitle>
      <Video />


      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />

      <Footer />
    </>
  );
}

export default Home;