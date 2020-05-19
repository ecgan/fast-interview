import { PageHeader } from 'antd'
import Stores from '@/components/Stores/Stores'
import PageContent from '@/components/PageContent/PageContent'

export default function Home () {
  return (
    <div>
      <PageHeader
        title='Fast'
      />
      <PageContent>
        <Stores />
      </PageContent>
    </div>
  )
}
