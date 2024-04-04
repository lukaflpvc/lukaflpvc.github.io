import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setIsDesktop(window.innerWidth > 1024);
    }
  }, []);

  return (
    <Layout
      title="Homepage"
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="mx-auto mt-16 flex max-w-[800px] flex-col px-3 text-left md:mt-16">
          <h1 className="_h1 !mb-2 ">
            Who am I?
          </h1>
          <div className="_subtitle text-lg text-pretty mb-8">
            I am a recent graduate with a Bachelor of Finance majoring in Capital Markets and minoring in International Business.
            I am insanely passionate about everything innovation and technology, particularly in generative AI and finance.
            I love to travel and explore new places.
          </div>
          <h1 className="_h1 !mb-2 ">
            My Mission.
          </h1>
          <div className="_subtitle text-lg text-pretty mb-8">
            I am a passionate advocate for <span className='transition-colors duration-500 delay-100 h-0.5'>purpose-driven </span> people because it is a quality that sparks meaningful contributions and forsters positive impacts to all. <br />
            I am a strong advocate for lifelong learning.
          </div>
          <h1 className="_h1 !mb-2 ">
            Current Work.
          </h1>
          <div className="_subtitle text-lg text-pretty mb-16">
            Junior Associate at Conscia Pty Ltd, having worked in the Advisory and Project Management space. I am known as the go to 'Data Specialist.'
            <br />
            <br />
            On the side, I am building a funding arbitrage bot.
          </div>
        </div>
      </main>
    </Layout>
  );
}