import { PageHeader } from 'antd'
import Stores from '@/components/Stores/Stores'
import PageContent from '@/components/PageContent/PageContent'

export default function Home() {
  return (
    <div>
      <style jsx global>
        {`
          .ant-page-header-heading-title {
            color: white;
          }
        `}
      </style>
      <PageHeader
        title='Fast'
        style={{ backgroundColor: 'black', color: 'white', marginBottom: 24 }}
      />
      <PageContent>
        <Stores />
      </PageContent>
    </div>
  )
}
