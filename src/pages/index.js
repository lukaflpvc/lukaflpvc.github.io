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
      description="I am a recent raduate with a Bachelor of Finance who is insanely passionate about innovation and technology."
    >
      <main>
        <div className="mx-auto mt-16 flex flex-col px-3 text-left md:mt-10">
          <h2 className="text-pretty mb-8">Hi, I'm Luka 🙋‍♂️</h2>
          <div className="text-pretty mb-8">
            <p> I'm a developer, finance bro, and a marketer.
            </p>
            </div>
          <div className="text-pretty mb-8">
          I'm currently working at MinterEllison <span className="ml-[-2px]" style={{color: '#939598'}}>Consulting</span> <span className="ml-[-2px]" style={{ display: 'inline-block', width: '4px', height: '4px', backgroundColor: '#cc2230'}}></span>            <br />
          </div>
        </div>
      </main>
    </Layout>
  );
}