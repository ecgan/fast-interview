import { List } from "antd";
import StoreCard from "./StoreCard";

interface Store {
  name: String
  domain: String
  logo: String
}

interface Props {
  stores: Store[]
}

const StoresList = (props: Props) => {
  const { stores } = props

  return (
    <List
      grid={{
        gutter: 16,
        xs: 2,
        md: 3
      }}
      dataSource={stores}
      renderItem={(store) => {
        return (
          <List.Item>
            <StoreCard
              store={store}
            />
          </List.Item>
        )
      }}
    />
  )
}

export default StoresList
