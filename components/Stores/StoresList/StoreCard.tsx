import { Card } from "antd"
import { Store } from "types/Store";

interface Props {
  store: Store
}

const StoreCard = (props: Props) => {
  const { store } = props

  return (
    <Card
      size='small'
      cover={
        <img
          width={148}
          height={148}
          src={store.logo}
        />
      }
    >
      {store.name}
    </Card>
  )
}

export default StoreCard