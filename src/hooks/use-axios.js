import { useState, useEffect, useCallback } from 'react'

const useAxios = ({
  service,
  fetchOnMount = true,
  defaultResponse = null,
  clearResponse = false,
  onResponse,
  onResponseError
}) => {
  const [response, setResponse] = useState(defaultResponse)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(fetchOnMount)

  const fetchData = useCallback(
    async (data) => {
      try {
        clearResponse && setResponse(defaultResponse)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [service, onResponse, onResponseError, clearResponse]
  )

  useEffect(() => {
    if (fetchOnMount) {
      fetchData()
    }
  }, [fetchData, fetchOnMount])

  return { response, error, loading, fetchData }
}

export default useAxios
