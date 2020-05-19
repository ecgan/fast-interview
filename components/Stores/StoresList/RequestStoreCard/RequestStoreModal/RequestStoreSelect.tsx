import { Modal, Form, Select, Space, Empty } from "antd"
import { ModalProps } from "antd/lib/modal"
import axios from "axios";
import { useState } from 'react'
import debounce from "lodash/debounce";
import useQuery from "./useQuery";

const RequestStoreSelect = (props) => {
  const { value, onChange = () => { } } = props
  const [fetch, clear, { loading, data }] = useQuery()

  const debouncedSearch = debounce(async (value: string) => {
    await fetch(value)
  }, 500)

  const handleSearch = async (value: string) => {
    debouncedSearch(value)
  }

  const handleChange = (value: string) => {
    onChange(value)
  }

  return (
    <Select
      notFoundContent={
        (!loading) &&
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      }
      loading={loading}
      value={value}
      showSearch
      optionLabelProp='value'
      onSearch={handleSearch}
      onChange={handleChange}
    >
      {
        (data) &&
        <Select.Option
          value={data.name}
        >
          <Space>
            <img
              width={64}
              height={64}
              src={data.logo}
            />
            {data.name}
          </Space>
        </Select.Option>
      }
    </Select>
  )
}

export default RequestStoreSelect
