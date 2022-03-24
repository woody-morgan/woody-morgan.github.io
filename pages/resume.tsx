import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'rc-dropdown/assets/index.css'

import { NotionAPI } from 'notion-client'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import { useTheme } from 'next-themes'

export async function getStaticProps() {
  const NOTION_PAGE_ID = '54a0235bfba744a28729dfb7e14ab4f2'
  const api = new NotionAPI()
  const recordMap = await api.getPage(NOTION_PAGE_ID)
  return {
    props: {
      recordMap,
    },
  }
}

const Resume = ({ recordMap }) => {
  const { theme, resolvedTheme } = useTheme()

  return (
    <div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={theme === 'dark' || resolvedTheme === 'dark' ? true : false}
      />
    </div>
  )
}

export default Resume
