import * as yup from 'yup';
import { REGEX } from 'src/shared/data';

export const YupSchemaLogin = yup.object().shape({
  emailAddress: yup.string().email('El correo ingreso no es valido').required('Ingrese su correo para continuar'),
  password: yup.string()
    .required("Campo requerido")
    .min(8, "Debe tener al menos 8 caracteres de longitud")
    .matches(REGEX.oneLowerCase, 'Debe contener al menos una letra minúscula')
    .matches(REGEX.oneUpperCase, 'Debe contener al menos una letra mayúscula')
    .matches(REGEX.oneDigit, 'Debe contener al menos un dígito')
    .matches(REGEX.specialCharacter, 'Debe contener un carácter especial'),
  remember: yup.boolean().default(false)
});

export const YupSchemaGeneralInformation = yup.object().shape({
  companyName: yup.string().required('Ingresa campo'),
  tradename: yup.string().required('Ingresa campo'),
  nationality: yup.string().required('Ingresa campo'),
  constitutionDate: yup.string().required('Ingresa campo'),
  rfc: yup.string().required('Ingresa campo'),
  taxRegime: yup.string().required('Ingresa campo'),
  industry: yup.string().required('Ingresa campo'),
  proofOfAddress: yup.string().required('Ingresa campo'),
  TelephoneNumber: yup.string().length(10, 'El número de teléfono debe tener 10 caracteres').matches(REGEX.phone, 'El número de teléfono no es válido'),
  emailAddress: yup.string().email('El correo ingreso no es valido').required('Ingrese su correo para continuar'),
});

export const YupSchemaAddress = yup.object().shape({
  streetOrAvenue: yup.string().required('Ingresa campo'),
  exteriorNumber: yup.string().required('Ingresa campo').max(5, "Ingresa un número valido"),
  interiorNumber: yup.string().max(5, "Ingresa un número valido"),
  zipCode: yup.string().required('Ingresa campo').min(5, "Ingresa un código postal valido"),
  coloniaOrUrbanization: yup.string().required('Ingresa campo'),
  cityOrTown: yup.string().required('Ingresa campo'),
  federativeEntityOrState: yup.string().required('Ingresa campo'),
  country: yup.string().required('Ingresa campo'),
});


export const YupSchemaLegalRepresentative = yup.object().shape({
  name: yup.string().required('Ingresa campo'),
  gender: yup.string().required('Ingresa campo'),
  dateOfBirth: yup.string().required('Ingresa campo'),
  federalEntityOfBirth: yup.string().required('Ingresa campo'),
  countryOfBirth: yup.string().required('Ingresa campo'),
  nationality: yup.string().required('Ingresa campo'),
  curp: yup.string().required('Ingresa campo').max(18, "Ingresa una curp valida"),
  rfc: yup.string().required('Ingresa campo'),
  address: yup.string().required('Ingresa campo'),
  maritalStatus: yup.string().required('Ingresa campo'),
  email: yup.string().required('Ingresa campo'),
  telephone: yup.string().required('Ingresa campo'),
  identificationDocument: yup.string().required('Ingresa campo'),
});

export const YupSchemaBankAccount = yup.object().shape({
  clabe: yup.string().required('Ingresa campo').max(18, "Ingresa una clabe valida"),
  bank: yup.string().required('Ingresa campo'),
});