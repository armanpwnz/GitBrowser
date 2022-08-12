import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

export const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery('vladilen')
  console.log(data)

  return <div>HomePage</div>
}
