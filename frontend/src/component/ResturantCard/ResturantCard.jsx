import { EnvironmentOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const ResturantCard = ({resturantObj}) => {
  return (
    <Link
    to={`/resturant/${resturantObj?._id}`}
    className="w-full xl:w-1/3 flex px-2 flex-col justify-center items-center py-10"
  >
    <img
      alt="restruant"
      className="rounded-2xl "
      src={resturantObj?.photos}
      height={410}
      width={410}
    />
    <div className="resturant-info w-full flex flex-col justify-start items-start text-left px-3">
      <p className="font-extrabold py-2">{resturantObj?.resturantName}</p>
      <p className="flex justify-between">
        <span>
          <EnvironmentOutlined /> {resturantObj?.city}
        </span>
      </p>
      <p className="break-all mt-3">{resturantObj?.description}</p>
    </div>
  </Link>
  )
}

export default ResturantCard
