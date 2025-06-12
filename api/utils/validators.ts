import validator from "validator";

// Utility function to check if a string is a valid email
const isEmail = (email: string) => {
    console.log("Validating email:", email);
  return validator.isEmail(email);
};

export default isEmail;
