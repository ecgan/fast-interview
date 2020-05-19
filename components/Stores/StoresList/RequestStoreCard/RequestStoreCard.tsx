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
        style={{ width: 160, margin: 'auto' }}
        size='small'
        cover={
          <div
            style={{ padding: 16 }}
          >
            <Row
              justify='center'
              align='middle'
              style={{ width: 128, height: 128 }}
            >
              <Col>
                <PlusOutlined
                  style={{ fontSize: 64 }}
                />
              </Col>
            </Row>
          </div>
        }
        onClick={handleClick}
      >
        <div
          style={{ textAlign: 'center' }}
        >
          {store.name}
        </div>
      </Card>
    </div>
  )
}

export default RequestStoreCard
