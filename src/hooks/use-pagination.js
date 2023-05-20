import { useCallback, useEffect, useMemo, useState } from 'react'

const usePagination = ({
  defaultPage = 1,
  itemsPerPage = 5,
  itemsCount = 10
} = {}) => {
  const pageCount = useMemo(
    () => Math.ceil(itemsCount / itemsPerPage),
    [itemsCount, itemsPerPage]
  )
  const checkedPage = useMemo(() => {
    if (isNaN(defaultPage) || defaultPage < 1) {
      return 1
    }
    if (defaultPage > pageCount) {
      return pageCount
    }
    return defaultPage
  }, [defaultPage, pageCount])

  const [page, setPage] = useState(checkedPage)
  const [rowsPerPage, setRowsPerPage] = useState(itemsPerPage)
  const [pageInput, setPageInput] = useState(1)

  useEffect(() => {
    setPage(checkedPage)
  }, [checkedPage])

  const handleChangePage = (_e, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value))
  }

  const handlePageSubmit = (maxPages) => {
    if (Number(pageInput) > maxPages) {
      setPageInput(maxPages)
      return setPage(maxPages)
    }
    if (Number(pageInput) < 1) {
      setPageInput(1)
      return setPage(1)
    }
    setPage(Number(pageInput))
  }

  const handleChangePageInput = (e) => {
    setPageInput(e.target.value)
  }

  const handleChangePaginationController = (
    _e,
    page
  ) => {
    setPage(page)
  }

  const clearPage = useCallback(() => setPage(1), [setPage])

  return {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    pageInput,
    setPageInput,
    pageCount,
    clearPage,
    handleChangePage,
    handleChangeRowsPerPage,
    handlePageSubmit,
    handleChangePageInput,
    handleChangePaginationController
  }
}

export default usePagination
