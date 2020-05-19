import { Card } from "antd"

interface Store {
  name: string
  domain: string
  logo: string
}

interface Props {
  store: Store
}

const StoreCard = (props: Props) => {
  const { store } = props

  return (
    <Card
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