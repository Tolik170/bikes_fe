import { useState, useEffect, useCallback } from 'react'

const useAxios = ({ service, fetchOnMount = true, defaultResponse = null }) => {
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
        return res
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    },
    [service]
  )

  useEffect(() => {
    if (fetchOnMount) {
      fetchData()
    }
  }, [fetchData, fetchOnMount])

  return { response, error, loading, fetchData }
}

export default useAxios
