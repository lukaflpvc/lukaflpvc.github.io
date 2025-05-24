import React from 'react';
import {useWindowSize} from '@docusaurus/theme-common';
import BlogSidebarDesktop from '@theme/BlogSidebar/Desktop';
export default function BlogSidebar({sidebar}) {
  const windowSize = useWindowSize();
  if (!sidebar?.items.length) {
    return null;
  }
  return <BlogSidebarDesktop sidebar={sidebar} />;
}
