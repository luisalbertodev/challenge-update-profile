import * as yup from 'yup';
import { REGEX, DICTIONARY_ERRORS } from 'src/shared/data';

export const YupSchemaLogin = yup.object().shape({
  emailAddress: yup.string()
    .required(DICTIONARY_ERRORS.AUTH.fieldRequired)
    .email(DICTIONARY_ERRORS.AUTH.emailInvalid),
  password: yup.string()
    .required(DICTIONARY_ERRORS.AUTH.fieldRequired)
    .min(8, DICTIONARY_ERRORS.AUTH.passwordMinError)
    .matches(REGEX.oneLowerCase, DICTIONARY_ERRORS.AUTH.oneLowerCaseError)
    .matches(REGEX.oneUpperCase, DICTIONARY_ERRORS.AUTH.oneUpperCaseError)
    .matches(REGEX.oneDigit, DICTIONARY_ERRORS.AUTH.oneDigitError)
    .matches(REGEX.specialCharacter, DICTIONARY_ERRORS.AUTH.specialCharacterError),
  remember: yup.boolean()
    .default(false)
});

export const YupSchemaGeneralInformation = yup.object().shape({
  companyName: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  tradename: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  nationality: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  constitutionDate: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  rfc: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  taxRegime: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  industry: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  proofOfAddress: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  TelephoneNumber: yup.string().
    length(10, DICTIONARY_ERRORS.USER.phoneNumberMaxLenth)
    .matches(REGEX.phone, DICTIONARY_ERRORS.USER.phoneNumberInvalid),
  emailAddress: yup.string()
    .required(DICTIONARY_ERRORS.AUTH.fieldRequired)
    .email(DICTIONARY_ERRORS.AUTH.emailInvalid),
});

export const YupSchemaAddress = yup.object().shape({
  streetOrAvenue: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  exteriorNumber: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired).max(5, DICTIONARY_ERRORS.USER.numberInvalid),
  interiorNumber: yup.string().max(5, DICTIONARY_ERRORS.USER.numberInvalid),
  zipCode: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired).min(5, DICTIONARY_ERRORS.USER.zipCodeInvalid),
  coloniaOrUrbanization: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  cityOrTown: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  federativeEntityOrState: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  country: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
});


export const YupSchemaLegalRepresentative = yup.object().shape({
  name: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  gender: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  dateOfBirth: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  federalEntityOfBirth: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  countryOfBirth: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  nationality: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  curp: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired).max(18, DICTIONARY_ERRORS.USER.curpInvalid),
  rfc: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  address: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  maritalStatus: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  email: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  telephone: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
  identificationDocument: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
});

export const YupSchemaBankAccount = yup.object().shape({
  clabe: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired).max(18, DICTIONARY_ERRORS.USER.clabeInvalid),
  bank: yup.string().required(DICTIONARY_ERRORS.AUTH.fieldRequired),
});