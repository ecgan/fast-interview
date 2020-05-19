import { Card, Row, Col } from 'antd'
import { Store } from 'types/Store'
import { PlusOutlined } from '@ant-design/icons'
import RequestStoreModal from "./RequestStoreModal/RequestStoreModal";
import { useState } from "react";

interface Props {
  store: Store
}

const RequestStoreCard = (props: Props) => {
  const { store } = props
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setVisible(false)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <div>
      <RequestStoreModal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
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
        onClick={handleClick}
      >
        {store.name}
      </Card>
    </div>
  )
}

export default RequestStoreCard
