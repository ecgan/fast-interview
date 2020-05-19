import { useState } from 'react'
import axios, { AxiosResponse } from "axios";
import { Store } from "types/Store";

type QueryFn = (value: string) => void
interface QueryResult {
  loading: boolean
  error?: any
  data?: Store
}

const useQuery = (): [QueryFn, QueryResult] => {
  const [state, setState] = useState({
    loading: false,
    error: undefined,
    data: undefined
  })

  const fetch = async (value: string) => {
    try {
      setState({ ...state, loading: true })

      const result = await axios.get('https://company.clearbit.com/v1/domains/find', {
        auth: {
          username: 'sk_a39ef9ddc6dbe03748e8b46a4fa8c344',
          password: ''
        },
        params: {
          name: value
        }
      })

      setState({
        loading: false,
        error: undefined,
        data: result.data
      })
    } catch (error) {
      setState({
        loading: false,
        error: error,
        data: undefined
      })
    }
  }

  return [
    fetch,
    state
  ]
}

export default useQuery
