import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
const {siteConfig: {customFields}} = useDocusaurusContext();

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: customFields.NOTION_API_KEY })

async function getDatabase() {
  const response = await notion.databases.retrieve({ database_id: customFields.NOTION_DATABASE_BOOKS})
  console.log(response);
}

getDatabase()