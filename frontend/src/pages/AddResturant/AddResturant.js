import React, { useEffect, useState } from "react";
import { restruantForm } from "../../constant/ResturantForm";
import { validateField } from "../../utlity/validation";
import { restruantFormObj } from "../../constant";
import { useDispatch } from "react-redux";
import AddResturantView from "./AddResturantView";
import {
  addResturant,
  deleteResturantById,
  getResturantbyId,
  updateResturantById,
} from "../../redux/actions/resturantAction";
import { useNavigate, useParams } from "react-router-dom";
import { resetState } from "../../redux/reducers/resturantReducer";

const AddRestaurantForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ ...restruantFormObj });
  const [formDataError, setFormDataError] = useState({ ...restruantFormObj });
  const [isEdit, setIsEdit] = useState(id ? true : false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const error = validateField(restruantForm[name]?.validation, value);
    setFormDataError((prev) => ({ ...prev, [name]: error }));
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [name]: reader?.result,
        });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleDelete = async () => {
    await dispatch(deleteResturantById({ id }));
    dispatch(resetState());
  };

  const handleUploadResutant = async (restruantObj) => {
    if (id) {
      await dispatch(updateResturantById(restruantObj, { id }));
      setFormData(restruantObj);
      setIsEdit(true);
    } else {
      await dispatch(addResturant(restruantObj));
    }
    dispatch(resetState());
    navigate("/");
  };

  const handleEditToggle = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorObj = { ...restruantFormObj };
    const formKeys = Object?.keys(formData);
    ["photos", ...formKeys]?.map((ele) => {
      const error = validateField(
        restruantForm[ele]?.validation,
        formData[ele],
        ele === "photos"
      );
      errorObj[ele] = error;
    });
    setFormDataError(errorObj);
    const isError = Object?.values(errorObj)?.every((ele) => ele === null);
    if (!isError) {
      return;
    }
    await handleUploadResutant(formData);
  };

  useEffect(() => {
    if (!id) return;
    const handleGetResturantbyId = async () => {
      const response = await dispatch(getResturantbyId({ id }));
      setFormData(response?.response?.data);
    };
    handleGetResturantbyId();
  }, [id]);

  return (
    <AddResturantView
      {...{
        id,
        handleDelete,
        restruantForm,
        formData,
        isEdit,
        handleChange,
        formDataError,
        handleEditToggle,
        handleSubmit,
      }}
    />
  );
};

export default AddRestaurantForm;
