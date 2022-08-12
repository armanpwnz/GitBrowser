import React from 'react'
import { IRepo } from '../models/models'

export const RepoCard = ({ repo }: { repo: IRepo }) => {
  return (
    <div className="flex flex-col justify-between px-5 py-2 shadow-md bg-white">
      <a href={repo.html_url} target="_blank">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">{repo.full_name}</h3>
          <p className="text-gray-600">{repo.language}</p>
        </div>
        <p className="text-gray-600">{repo.description}</p>
      </a>
    </div>
  )
}
