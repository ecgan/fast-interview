import { List } from "antd";
import StoreCard from "./StoreCard";
import RequestStoreCard from "./RequestStoreCard/RequestStoreCard";
import { Store } from "types/Store";

interface Props {
  stores: Store[]
}

const StoresList = (props: Props) => {
  const { stores } = props

  const storesWithRequest = [
    {
      name: 'Request a Store',
      domain: '',
      logo: ''
    },
    ...stores
  ]

  return (
    <List
      grid={{
        gutter: 16,
        xs: 2,
        md: 3
      }}
      dataSource={storesWithRequest}
      renderItem={(store) => {
        if (store.name === 'Request a Store') {
          return (
            <List.Item>
              <RequestStoreCard
                store={store}
              />
            </List.Item>
          )
        }

        return (
          <List.Item>
            <StoreCard
              store={store}
            />
          </List.Item>
        )
      }}
    >
    </List>
  )
}

export default StoresList
