import { Card } from 'antd'
import { Store } from 'types/Store'

interface Props {
  store: Store
}

const StoreCard = (props: Props) => {
  const { store } = props

  return (
    <Card
      style={{ width: 160, margin: 'auto' }}
      size='small'
      cover={
        <div
          style={{ padding: 16 }}
        >
          <img
            width={128}
            height={128}
            src={store.logo}
          />
        </div >
      }
    >
      <div
        style={{ textAlign: 'center' }}
      >
        {store.name}
      </div>
    </Card >
  )
}

export default StoreCard
