import { Card } from "antd"

interface Store {
  name: String
  domain: String
  logo: String
}

interface Props {
  store: Store
}

const StoreCard = (props: Props) => {
  const { store } = props

  return (
    <Card>
      {store.name}
    </Card>
  )
}

export default StoreCard