import { Card, Row, Col } from "antd"
import { Store } from "types/Store";
import { PlusOutlined } from "@ant-design/icons";

interface Props {
  store: Store
}

const RequestStoreCard = (props: Props) => {
  const { store } = props

  return (
    <Card
      size='small'
      cover={
        <Row
          justify='center'
          align='middle'
          style={{ width: 148, height: 148 }}
        >
          <Col>
            <PlusOutlined
              style={{ fontSize: 64 }}
            />
          </Col>
        </Row>
      }
    >
      {store.name}
    </Card>
  )
}

export default RequestStoreCard
