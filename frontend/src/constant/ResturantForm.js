import { CHARACTER_REGEX, EMAIL_REGEX, NUMBER_REGEX } from "./regex";

export const restruantForm = {
  resturantName: {
    name: "resturantName",
    type: "text",
    label : "Resturant Name",
    placeholder: "Enter Restaurant Name",
    validation: {
      required: true,
      maxLength: 100,
      minLenght: 5,
      regex: CHARACTER_REGEX,
      regexError : "Only Alphabet is allowed"
    },
  },
  description: {
    name: "description",
    type: "text",
    label : "Description",
    placeholder: "Enter description",
    validation: {
      required: true,
      maxLength: 100,
      minLenght: 20,
    },
  },
  city: {
    name: "city",
    type: "text",
    label : "City",
    placeholder: "Enter city",
    validation: {
      required: true,
      maxLength: 100,
      minLenght: 3,
      regex: CHARACTER_REGEX,
      regexError : "Only Alphabet is allowed"

    },
  },
  postalCode: {
    name: "postalCode",
    type: "text",
    label :  "Postal Code",
    placeholder: "Enter PostalCode",
    validation: {
      required: true,
      maxLength: 5,
      minLenght: 5,
      regex: NUMBER_REGEX,
      regexError : "Only Number is allowed"

    },
  },
  phoneNumber: {
    name: "phoneNumber",
    type: "text",
    label :  "Phone Number",
    placeholder: "Enter Phone Number",
    validation: {
      required: true,
      maxLength: 10,
      minLenght: 10,
      regex: NUMBER_REGEX,
      regexError : "Only Number is allowed"
    },
  },
  email: {
    name: "email",
    type: "email",
    label :  "Email",
    placeholder: "Enter email",
    validation: {
      required: true,
      maxLength: 100,
      minLenght: 10,
      regex: EMAIL_REGEX,
      regexError : "Enter Valid Email"

    },
  },
  priceRange: {
    name: "priceRange",
    type: "text",
    label: "Price Range",
    placeholder: "Enter Price Range",
    validation: {
      required: true,
      regex: NUMBER_REGEX,
      regexError : "Only Number is allowed"
    },
  },
};
