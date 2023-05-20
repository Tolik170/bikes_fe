import { useState, useEffect, useCallback } from 'react'

const useAxios = ({ service, fetchOnMount = true, defaultResponse = null, onResponse, onResponseError }) => {
  const [response, setResponse] = useState(defaultResponse)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(fetchOnMount)

  const fetchData = useCallback(
    async (data) => {
      try {
        setLoading(true)
        const res = await service(data)
        setResponse(res.data)
        setError(null)
        onResponse && onResponse(res.data)
        return res
      } catch (e) {
        if (e.response) {
          setError(e.response.data)
          onResponseError && onResponseError(e.response.data)
        }
      } finally {
        setLoading(false)
      }
    },
    [service, onResponse, onResponseError]
  )

  useEffect(() => {
    if (fetchOnMount) {
      fetchData()
    }
  }, [fetchData, fetchOnMount])

  return { response, error, loading, fetchData }
}

export default useAxios
