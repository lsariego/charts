import { useMemo, useState } from 'react'

/**
 * The Pagination' custom hook.
 */
export const usePagination = ({ data = [], initialPage = 1, rowsPerPage = 12 }) => {
  const [page, setPage] = useState(initialPage)

  const handleChange = (_, newPage) => {
    setPage(newPage)
  }

  const getCurrentPage = () => {
    return data.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
  }

  const totalPages = useMemo(() => {
    return Math.floor(data?.length / rowsPerPage) + (data?.length % rowsPerPage !== 0 ? 1 : 0)
  }, [data])

  return { page, totalPages, onChangePage: handleChange, onGetCurrentPage: getCurrentPage }
}
