import React, { useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IRepo } from '../models/models'

export const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavourite, deleteFavourite } = useActions()
  const { favourites } = useAppSelector((state) => state.github)

  const [isFav, setIsFavourite] = useState(favourites.includes(repo.html_url))

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite(repo.html_url)
    setIsFavourite(true)
  }

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    deleteFavourite(repo.html_url)
    setIsFavourite(false)
  }

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">{repo.full_name}</h3>
          <p className="text-gray-600">{repo.language}</p>
        </div>
        <p className="text-sm">
          Stars:<span className="font-bold ml-1">{repo.stargazers_count}</span>
          <span className="ml-2">
            Forks: <span className="font-bold">{repo.forks}</span>
          </span>
        </p>
        <p className="text-gray-600">{repo.description}</p>

        {!isFav && (
          <button
            className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
            onClick={addToFavourite}
          >
            Add
          </button>
        )}
        {isFav && (
          <button
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={removeFromFavourite}
          >
            Remove
          </button>
        )}
      </a>
    </div>
  )
}
