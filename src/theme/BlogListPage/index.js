import React from 'react';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

export default function BlogListPage(props) {
  const {sidebar} = props;

  return (
    <Layout title="Blog">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <BlogSidebar sidebar={sidebar} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
