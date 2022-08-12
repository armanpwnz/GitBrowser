import React from 'react'
import { useAppSelector } from '../hooks/redux'

export const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github)

  if (favourites.length === 0)
    return <p className="text-center text-gray-600">No favourites yet...</p>

  return (
    <div className="flex justify-center pt-5 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((favourite) => {
          return (
            <li key={favourite}>
              <a href={favourite} target="_blank">
                {favourite}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
