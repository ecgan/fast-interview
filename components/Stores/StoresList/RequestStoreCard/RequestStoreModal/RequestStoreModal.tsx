import { Modal, Form, Select, Space } from "antd"
import { ModalProps } from "antd/lib/modal"
import axios from "axios";
import { useState } from 'react'
import debounce from "lodash/debounce";
import useQuery from "./useQuery";
import RequestStoreSelect from "./RequestStoreSelect";

const RequestStoreModal = (props: ModalProps) => {
  return (
    <Modal
      {...props}
      title='Request a Store'
      destroyOnClose
    >
      <Form
        layout='vertical'
      >
        <Form.Item
          name='storeName'
          label='Store Name'
          getValueFromEvent={(value) => {
            console.log(value)
            return value
          }}
        >
          <RequestStoreSelect />
        </Form.Item>
      </Form>
    </Modal >
  )
}

export default RequestStoreModal
