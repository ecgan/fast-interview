import { useState } from 'react'
import axios from "axios";

const useQuery = () => {
  const [state, setState] = useState({
    loading: false,
    error: undefined,
    data: undefined
  })

  const fetch = async (value) => {
    try {
      setState({ ...state, loading: true })

      const result = await axios.get('https://company.clearbit.com/v1/domains/find', {
        auth: { username: 'sk_a39ef9ddc6dbe03748e8b46a4fa8c344' },
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
