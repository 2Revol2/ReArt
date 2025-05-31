import { Profile, ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { lastname, first, city, age, country } = profile;
  const error: ValidateProfileError[] = [];

  if (!lastname || !first) {
    error.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    error.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!city) {
    error.push(ValidateProfileError.INCORRECT_CITY);
  }

  if (!country) {
    error.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return error;
};
