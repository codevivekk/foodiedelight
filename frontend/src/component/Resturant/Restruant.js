import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResturants } from "../../redux/actions/resturantAction";
import ResturantView from "./ResturantView";
const Restaurant = () => {
  const { isLast, resturants, limit, page, search } = useSelector(
    (state) => state?.website
  );
  const dispatch = useDispatch();

  const handleGetRestruant = async (page) => {
    const params = { ...search, limit, page };
    const response = await dispatch(getResturants(params));
    return response;
  };

  useEffect(() => {
    handleGetRestruant(page);
  }, []);

  const handleLoadMore = async () => {
    await handleGetRestruant(page + 1);
  };

  return <ResturantView {...{ resturants, isLast, handleLoadMore }} />;
};

export default Restaurant;
