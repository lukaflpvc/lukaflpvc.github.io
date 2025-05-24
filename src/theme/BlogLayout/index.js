import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import { useLocation } from '@docusaurus/router';

export default function BlogLayout({sidebar, children, ...props}) {
  const location = useLocation();
  const isBlogListPage = location.pathname === '/blog';

  return (
    <Layout {...props}>
      <div className="container margin-vert--lg">
        <div className="row">
          {isBlogListPage && sidebar && (
            <div className="col col--12">
              <BlogSidebar sidebar={sidebar} />
            </div>
          )}
          {!isBlogListPage && (
            <div className="col col--12">
              {children}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
