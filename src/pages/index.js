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
      title=""
      description="I am a recent Bachelor of Finance graduate who is insanely passionate about innovation and technology."
    >
      <main>
        <div className="mx-auto mt-16 flex flex-col px-3 text-left md:mt-16">
          <h1 className="_h1 !mb-2 ">
            Hi, my name is Luka 👋
          </h1>
          <div className="_subtitle text-lg text-pretty mb-8">
            I am a recent graduate with a Bachelor of Finance in Capital Markets and International Business.
            I am insanely passionate about innovation and technology, particularly language models and finance.
          </div>
          <h1 className="_h1 !mb-1 ">
            My Mission
          </h1>
          <div className="_subtitle text-lg text-pretty mb-8">
            I am a passionate advocate for purpose-driven people because it is a quality that sparks meaningful contributions and forsters positive impacts to all. <br />
            I am a strong advocate for lifelong learning.
          </div>
          <h1 className="_h1 !mb-1 ">
            Current Work.
          </h1>
          <div className="_subtitle text-lg text-pretty mb-16">
            Junior Associate at Conscia Pty Ltd, having worked in the Advisory and Project Management space. I am known as the go to 'Data Specialist.'
            <br />
            <br />
            On the side, I am building mini CLI projects.
          </div>
        </div>
      </main>
    </Layout>
  );
}