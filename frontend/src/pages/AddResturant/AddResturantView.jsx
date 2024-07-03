import React from "react";
import { ResturantImage } from "../../component";
import ResturantFrom from "../../component/Form/form";

const AddResturantView = ({
  id,
  handleDelete,
  restruantForm,
  formData,
  isEdit,
  handleChange,
  formDataError,
  handleEditToggle,
  handleSubmit,
}) => {
  return (
    <div className="add-resturant bg-white flex md:flex-row flex-col  justify-around py-10  mt-10">
      <ResturantImage {...{ formData, isEdit, handleChange, formDataError }} />
      <div className="flex w-full">
        <form
          className="md:w-4/5 w-full px-10 md:px-0"
          onSubmit={isEdit ? handleEditToggle : handleSubmit}
        >
          {Object.keys(restruantForm)?.map((formObj) => (
            <ResturantFrom
              key={formObj?.name}
              {...{
                disable: isEdit,
                formObj,
                error: formDataError[formObj],
                handleChange,
                value: formData[formObj],
              }}
            />
          ))}
          <button
            type="submit"
            className="w-full mt-10 px-4 py-2 rounded-lg text-xl bg-purple-600 text-white "
          >
            {isEdit ? "Edit Resturant" : "Add Resturant"}
          </button>
          {id && (
            <button
              onClick={handleDelete}
              type="button"
              className="w-full mt-2 px-4 py-2 rounded-lg text-xl bg-red-600 text-white "
            >
              Delete Resturant
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddResturantView;
