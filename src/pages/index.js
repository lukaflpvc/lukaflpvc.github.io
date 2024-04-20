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
      description="I am a recent Bachelor of Finance graduate who is insanely passionate about innovation and technology."
    >
      <main>
        <div className="mx-auto mt-16 flex flex-col px-3 text-left md:mt-10">
          <h1 className="h1 !mb-2">
            Hello, I'm Luka 👋
            </h1>
          <div className="text-pretty mb-8">
            <p> I'm a recent graduate with a Bachelor of Finance in Capital Markets and International Business.
            I am insanely passionate about innovation and technology, particularly automation and finance.
            </p>
            </div>
          <h1 className="_h1 !mb-1 ">
            My Mission
          </h1>
          <div className="text-pretty mb-8">
            I am a passionate advocate for purpose-driven people because it is a quality that sparks meaningful contributions and forsters positive impacts to all. <br />
            I am a strong advocate for lifelong learning.
          </div>
          <h1 className="_h1 !mb-1 ">
            Current Work.
          </h1>
          <div className="text-pretty mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            On the side, I am building mini CLI projects.
          </div>
        </div>
      </main>
    </Layout>
  );
}