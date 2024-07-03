export const  validateField = (validation, value , isImage ) => {
    if (validation?.required && !value) {
      return 'This field is required.';
    }
  
    if (validation?.minLenght && value.length < validation?.minLenght) {
      return `Minimum length is ${validation?.minLenght} characters.`;
    }
  
    if (validation?.maxLength && value.length > validation?.maxLength) {
      return `Maximum length is ${validation?.maxLength} characters.`;
    }
  
    if (validation?.regex && !validation?.regex.test(value)) {
      return validation?.regexError;
    }
    if (isImage) {
      if (!value) {
        return 'Image is required.';
      }
    }
  
    return null;
  }