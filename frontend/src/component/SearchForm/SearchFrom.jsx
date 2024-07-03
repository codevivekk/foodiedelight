import { EnvironmentOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResturants } from "../../redux/actions/resturantAction";
import { resetState } from "../../redux/reducers/resturantReducer";

const SearchFrom = () => {
  const [search, setSearch] = useState({ });
  const dispatch = useDispatch()

  const {limit } =  useSelector((state) => state?.website);
  
  
  const handleSearch = async () => {
    const params = { limit, page : 1 , ...search };
    dispatch(resetState())
   await dispatch(getResturants(params));
  };

  const handleChange = (e) => {
    const {name , value} = e.target
    setSearch({
      ...search,
      [name] : value
    })
  }

  return (
    <div className="border custom-shadow bg-white h-auto px-9 py-5 w-[454px] rounded-2xl">
      <p className="text-4xl font-bold pb-2 text-left">
        Find places for tasty food
      </p>
      <p className="font-light text-left">
        Discover and book the best dining experiences in town.
      </p>
      <form className="mt-5">
        <Input
          name="restaurantName"
          value={search?.restaurantName}
          onChange={handleChange}
          size="large"
          placeholder="  Search Restaurant"
          prefix={<SearchOutlined />}
        />
        <Input
          name="city"
          value={search?.city}
          onChange={handleChange}
          size="large"
          className="mt-2"
          placeholder="  Search by Loaction"
          prefix={<EnvironmentOutlined />}
        />
        <Button
          onClick={handleSearch}
          type="primary"
          className="bg-indigo-500 py-5 mt-5 text-2xl"
          block
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchFrom;
