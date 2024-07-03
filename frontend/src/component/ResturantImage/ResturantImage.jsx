import React from 'react'

const ResturantImage = ({formData , isEdit , handleChange, formDataError}) => {
  return (
    <div className="image w-full flex flex-col items-center">
    {formData?.photos ? (
      <input
        type="image"
        alt="restruant"
        height={410}
        width={410}
        src={formData?.photos}
      />
    ) : (
      <div className="h-[410px] w-[410px] border border-grey rounded-xl mb-10 flex justify-center items-center text-7xl text-gray-300">
        {" "}
        Image Preview
      </div>
    )}
    <div>
      <label className="block text-gray-700">Upload Photos</label>
      <input
        disabled={isEdit}
        type="file"
        name="photos"
        accept="image/*"
        multiple
        className="w-full px-4 py-2 border rounded-lg"
        onChange={handleChange}
      />
      {formDataError?.photos && (
        <p className={`error-message text-left text-red-400`}>
          {formDataError?.photos}
        </p>
      )}
    </div>
  </div>
  )
}

export default ResturantImage
