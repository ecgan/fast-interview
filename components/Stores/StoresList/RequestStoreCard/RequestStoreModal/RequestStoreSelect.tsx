import { Empty, Select, Space } from "antd";
import debounce from "lodash/debounce";
import useQuery from "./useQuery";

interface Props {
  value?: string
  onChange?: (value?: string) => {}
}

const RequestStoreSelect = (props: Props) => {
  const { value, onChange = () => { } } = props
  const [fetch, { loading, data }] = useQuery()

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
