import { ReactChildren, ReactElement } from 'react';

export interface IAddress {
  streetOrAvenue: string;
  exteriorNumber: string;
  interiorNumber: string;
  zipCode: string;
  coloniaOrUrbanization: string;
  cityOrTown: string;
  federativeEntityOrState: string;
  country: string;
}

export interface ILegalRepresentative {
  name: string;
  gender: string;
  dateOfBirth: string;
  federalEntityOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  curp: string;
  rfc: string;
  address: string;
  maritalStatus: string;
  email: string;
  telephone: string;
  identificationDocument: string;
}

export interface IBankAccount {
  clabe: string;
  bank: string;
}

export interface ILogin {
  emailAddress: string;
  password: string;
  remember: boolean;
}


export interface IUser extends ILogin {
  companyName: string;
  tradename: string;
  nationality: string;
  constitutionDate: string;
  rfc: string;
  taxRegime: string;
  industry: string;
  address: IAddress;
  proofOfAddress: string;
  TelephoneNumber: string;
  emailAddress: string;
  legalRepresentative: ILegalRepresentative;
  bankAccount: IBankAccount
}


export interface IAuthContext {
  login: (s: Partial<IUser>) => void;
  logout: () => void;
  user: Partial<IUser> | null;
  updateProfile: (s: Partial<IUser>) => void;
  isLogged: boolean;
}

export interface Children {
  children?: ReactElement | ReactChildren;
}
