import { Breakpoints, Devices } from 'src/shared/models/theme.model'
import { IHashMap } from 'src/shared/models/languages.model'

export const DICTIONARY_ERRORS = {
   "AUTH": {
      "fieldRequired": "fieldRequired",
      "passwordMinError": "passwordMinError",
      "oneLowerCaseError": "oneLowerCaseError",
      "oneUpperCaseError": "oneUpperCaseError",
      "oneDigitError": "oneDigitError",
      "specialCharacterError": "specialCharacterError",
      "emailInvalid": "emailInvalid"
   },
   "USER": {
      "phoneNumberMaxLenth": "phoneNumberMaxLenth",
      "phoneNumberInvalid": "phoneNumberInvalid",
      "numberInvalid": "numberInvalid",
      "zipCodeInvalid": "zipCodeInvalid",
      "curpInvalid": "curpInvalid",
      "clabeInvalid": "clabeInvalid",
   }
}

export const INITIAL_USER = {
   companyName: '',
   tradename: '',
   nationality: '',
   constitutionDate: '',
   rfc: '',
   taxRegime: '',
   industry: '',
   address: {
      streetOrAvenue: '',
      exteriorNumber: '',
      interiorNumber: '',
      zipCode: '',
      coloniaOrUrbanization: '',
      cityOrTown: '',
      federativeEntityOrState: '',
      country: '',
   },
   proofOfAddress: '',
   TelephoneNumber: '',
   emailAddress: '',
   legalRepresentative: {
      name: '',
      gender: '',
      dateOfBirth: '',
      federalEntityOfBirth: '',
      countryOfBirth: '',
      nationality: '',
      curp: '',
      rfc: '',
      address: '',
      maritalStatus: '',
      email: '',
      telephone: '',
      identificationDocument: '',
   },
   bankAccount: {
      clabe: '',
      bank: '',
   },
}

export const PLATFORM_STEP: string = 'challenge-step';

export const PK_PLATFORM_STORAGE: string = 'challenge-update-account';

export const REGEX: { [key: string]: RegExp } = {
   phone: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
   oneLowerCase: /[a-z]/,
   oneUpperCase: /[A-Z]/,
   oneDigit: /[0-9]/,
   specialCharacter: /[!@#$%^&*(),.?":{}|<>]/,
}

export const ROUTES: IHashMap = {
   LOGIN: '/login',
   HOME: '/',
   ERROR_404: '*',
}

export const BREAKPOINTS: Breakpoints = {
   sm: 576, // Small screen start
   md: 768, // Medium screen start
   lg: 992, // Large screen start
   xl: 1200, // Extra Large screen start
};

export const DEVICE: Devices = {
   sm: `(max-width: ${BREAKPOINTS.sm}px)`,
   md: `(max-width: ${BREAKPOINTS.md}px)`,
   lg: `(max-width: ${BREAKPOINTS.lg}px)`,
   xl: `(max-width: ${BREAKPOINTS.xl}px)`,
};


export const BG_LOGIN = 'https://images.unsplash.com/photo-1595363530143-b913b4ea30dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80';

export const TAX_REGIMES = [
   {
      "value": "R??gimen de asalariados",
      "label": "R??gimen de asalariados",
   },
   {
      "value": "R??gimen de actividades profesionales",
      "label": "R??gimen de actividades profesionales",
   },
   {
      "value": "R??gimen de arrendamiento de inmuebles",
      "label": "R??gimen de arrendamiento de inmuebles",
   },
   {
      "value": "R??gimen de actividad empresarial",
      "label": "R??gimen de actividad empresarial",
   },
   {
      "value": "R??gimen de incorporaci??n fiscal. ",
      "label": "R??gimen de incorporaci??n fiscal. ",
   },
]

export const BANKS = [
   {
      "value": "BANAMEX",
      "label": "BANAMEX",
   },
   {
      "value": "BANCOMEXT",
      "label": "BANCOMEXT",
   },
   {
      "value": "BANOBRAS",
      "label": "BANOBRAS",
   },
   {
      "value": "BBVA BANCOMER",
      "label": "BBVA BANCOMER",
   },
   {
      "value": "SANTANDER",
      "label": "SANTANDER",
   },
   {
      "value": "BANJERCITO",
      "label": "BANJERCITO",
   },
   {
      "value": "HSBC",
      "label": "HSBC",
   },
]

export const GENDERS = [
   {
      label: 'Hombre',
      value: 'H',
   },
   {
      label: 'Mujer',
      value: 'M',
   },
]

export const MARITAL_STATUS = [
   {
      label: 'Casado(a)',
      value: 'Casado(a)',
   },
   {
      label: 'Conviviente',
      value: 'Conviviente',
   },
   {
      label: 'Anulado',
      value: 'Anulado',
   },
   {
      label: 'Separado de uni??n legal',
      value: 'Separado de uni??n legal',
   },
   {
      label: 'Separado(a) de uni??n de hecho',
      value: 'Separado(a) de uni??n de hecho',
   },
   {
      label: 'Viudo(a)',
      value: 'Viudo(a)',
   },
   {
      label: 'Soltero(a)',
      value: 'Soltero(a)',
   },
]

export const INDUSTRIES = [
   {
      label: 'T??cnolog??a',
      value: 'T??cnolog??a',
   },
   {
      label: 'Tienda en l??nea',
      value: 'Tienda en l??nea',
   },
   {
      label: 'El??ctronicos',
      value: 'El??ctronicos',
   },
   {
      label: 'Alimentos',
      value: 'Alimentos',
   },
   {
      label: 'Industrial',
      value: 'Industrial',
   },
   {
      label: 'Deportes',
      value: 'Deportes',
   },
]

export const NATIONALITIES = [
   { label: "Afgano", value: "Afgano" },
   { label: "Alban??s", value: "Alban??s" },
   { label: "Argelino", value: "Argelino" },
   { label: "Americano", value: "Americano" },
   { label: "Andorrano", value: "Andorrano" },
   { label: "Angole??o", value: "Angole??o" },
   { label: "Antiguos", value: "Antiguos" },
   { label: "Argentino", value: "Argentino" },
   { label: "Armenio", value: "Armenio" },
   { label: "Australiano", value: "Australiano" },
   { label: "Austriaco", value: "Austriaco" },
   { label: "Azerbaiyano", value: "Azerbaiyano" },
   { label: "Bahame??o", value: "Bahame??o" },
   { label: "Bahrein??", value: "Bahrein??" },
   { label: "Bangladesh", value: "Bangladesh" },
   { label: "Barbadense", value: "Barbadense" },
   { label: "Barbudans", value: "Barbudans" },
   { label: "Batswana", value: "Batswana" },
   { label: "Bielorruso", value: "Bielorruso" },
   { label: "Belga", value: "Belga" },
   { label: "Belice??o", value: "Belice??o" },
   { label: "Benin??s", value: "Benin??s" },
   { label: "Butan??s", value: "Butan??s" },
   { label: "Boliviano", value: "Boliviano" },
   { label: "Bosnio", value: "Bosnio" },
   { label: "Brasile??o", value: "Brasile??o" },
   { label: "Brit??nico", value: "Brit??nico" },
   { label: "Bruneiano", value: "Bruneiano" },
   { label: "B??lgaro", value: "B??lgaro" },
   { label: "Burkinabe", value: "Burkinabe" },
   { label: "Birmano", value: "Birmano" },
   { label: "Burund??s", value: "Burund??s" },
   { label: "Camboyano", value: "Camboyano" },
   { label: "Camerun??s", value: "Camerun??s" },
   { label: "Canadiense", value: "Canadiense" },
   { label: "Caboverdiano", value: "Caboverdiano" },
   { label: "Centroafricano", value: "Centroafricano" },
   { label: "Chadiano", value: "Chadiano" },
   { label: "Chileno", value: "Chileno" },
   { label: "Chino", value: "Chino" },
   { label: "Colombiana", value: "Colombiana" },
   { label: "Comoran", value: "Comoran" },
   { label: "Congole??o", value: "Congole??o" },
   { label: "Costa Rica", value: "Costa Rica" },
   { label: "Croata", value: "Croata" },
   { label: "Cubano", value: "Cubano" },
   { label: "Chipriota", value: "Chipriota" },
   { label: "Checo", value: "Checo" },
   { label: "Dan??s", value: "Dan??s" },
   { label: "Djibouti", value: "Djibouti" },
   { label: "Dominicano", value: "Dominicano" },
   { label: "Holand??s", value: "Holand??s" },
   { label: "Timor Oriental", value: "Timor Oriental" },
   { label: "Ecuatoriano", value: "Ecuatoriano" },
   { label: "Egipcio", value: "Egipcio" },
   { label: "Emirian", value: "Emirian" },
   { label: "Guinea Ecuatorial", value: "Guinea Ecuatorial" },
   { label: "Eritreo", value: "Eritreo" },
   { label: "Estonio", value: "Estonio" },
   { label: "Et??ope", value: "Et??ope" },
   { label: "Fiyiano", value: "Fiyiano" },
   { label: "Filipino", value: "Filipino" },
   { label: "Finland??s", value: "Finland??s" },
   { label: "Franc??s", value: "Franc??s" },
   { label: "Gabon??s", value: "Gabon??s" },
   { label: "Gambiano", value: "Gambiano" },
   { label: "Georgiano", value: "Georgiano" },
   { label: "Alem??n", value: "Alem??n" },
   { label: "Ghan??s", value: "Ghan??s" },
   { label: "Griego", value: "Griego" },
   { label: "Granadino", value: "Granadino" },
   { label: "Guatemalteco", value: "Guatemalteco" },
   { label: "Guinea-Bissauan", value: "Guinea-Bissauan" },
   { label: "Guinea", value: "Guinea" },
   { label: "Guyan??s", value: "Guyan??s" },
   { label: "Haitiano", value: "Haitiano" },
   { label: "Herzegoviniano", value: "Herzegoviniano" },
   { label: "Hondure??o", value: "Hondure??o" },
   { label: "H??ngaro", value: "H??ngaro" },
   { label: "I-Kiribati", value: "I-Kiribati" },
   { label: "Island??s", value: "Island??s" },
   { label: "Indio", value: "Indio" },
   { label: "Indonesio", value: "Indonesio" },
   { label: "Iran??", value: "Iran??" },
   { label: "Iraqu??", value: "Iraqu??" },
   { label: "Irlandesa", value: "Irlandesa" },
   { label: "Israel??", value: "Israel??" },
   { label: "Italiano", value: "Italiano" },
   { label: "Marfile??o", value: "Marfile??o" },
   { label: "Jamaicano", value: "Jamaicano" },
   { label: "Japon??s", value: "Japon??s" },
   { label: "Jordano", value: "Jordano" },
   { label: "Kazajo", value: "Kazajo" },
   { label: "Keniano", value: "Keniano" },
   { label: "Kittian y Nevisian", value: "Kittian y Nevisian" },
   { label: "Kuwait??", value: "Kuwait??" },
   { label: "Kirgu??s", value: "Kirgu??s" },
   { label: "Laosiano", value: "Laosiano" },
   { label: "Let??n", value: "Let??n" },
   { label: "Liban??s", value: "Liban??s" },
   { label: "Liberiano", value: "Liberiano" },
   { label: "Libio", value: "Libio" },
   { label: "Liechtensteiner", value: "Liechtensteiner" },
   { label: "Lituano", value: "Lituano" },
   { label: "Luxemburgu??s", value: "Luxemburgu??s" },
   { label: "Maced??nio", value: "Maced??nio" },
   { label: "Madagascar??", value: "Madagascar??" },
   { label: "Malau??", value: "Malau??" },
   { label: "Malasio", value: "Malasio" },
   { label: "Maldivan", value: "Maldivan" },
   { label: "Maliense", value: "Maliense" },
   { label: "Malt??s", value: "Malt??s" },
   { label: "Marshallese", value: "Marshallese" },
   { label: "Mauritano", value: "Mauritano" },
   { label: "Mauriciano", value: "Mauriciano" },
   { label: "Mexicano", value: "Mexicano" },
   { label: "Micronesia", value: "Micronesia" },
   { label: "Moldavo", value: "Moldavo" },
   { label: "Monacan", value: "Monacan" },
   { label: "Mongol", value: "Mongol" },
   { label: "Marroqu??", value: "Marroqu??" },
   { label: "Mosotho", value: "Mosotho" },
   { label: "Motswana", value: "Motswana" },
   { label: "Mozambique??o", value: "Mozambique??o" },
   { label: "Namibio", value: "Namibio" },
   { label: "Nauruan", value: "Nauruan" },
   { label: "Nepal??s", value: "Nepal??s" },
   { label: "Neozeland??s", value: "Neozeland??s" },
   { label: "Nicarag??ense", value: "Nicarag??ense" },
   { label: "Nigeriano", value: "Nigeriano" },
   { label: "N??ger", value: "N??ger" },
   { label: "Norcoreano", value: "Norcoreano" },
   { label: "Irland??s norte??o", value: "Irland??s norte??o" },
   { label: "Noruego", value: "Noruego" },
   { label: "Oman??", value: "Oman??" },
   { label: "Pakistan??", value: "Pakistan??" },
   { label: "Palauano", value: "Palauano" },
   { label: "Paname??o", value: "Paname??o" },
   { label: "Pap??a Nueva Guinea", value: "Pap??a Nueva Guinea" },
   { label: "Paraguayo", value: "Paraguayo" },
   { label: "Peruano", value: "Peruano" },
   { label: "Polaco", value: "Polaco" },
   { label: "Portugu??s", value: "Portugu??s" },
   { label: "Qatar??", value: "Qatar??" },
   { label: "Rumano", value: "Rumano" },
   { label: "Ruso", value: "Ruso" },
   { label: "Ruandes", value: "Ruandes" },
   { label: "Santa Luc??a", value: "Santa Luc??a" },
   { label: "Salvadore??o", value: "Salvadore??o" },
   { label: "Samoano", value: "Samoano" },
   { label: "San Marino", value: "San Marino" },
   { label: "Santo Tom??reo", value: "Santo Tom??reo" },
   { label: "Arabia", value: "Arabia" },
   { label: "Escoc??s", value: "Escoc??s" },
   { label: "Senegal??s", value: "Senegal??s" },
   { label: "Serbio", value: "Serbio" },
   { label: "Seychelles", value: "Seychelles" },
   { label: "Sierra Leona", value: "Sierra Leona" },
   { label: "Singapur", value: "Singapur" },
   { label: "Eslovaco", value: "Eslovaco" },
   { label: "Esloveno", value: "Esloveno" },
   { label: "Islas Salom??n", value: "Islas Salom??n" },
   { label: "Somal??", value: "Somal??" },
   { label: "Sudafricano", value: "Sudafricano" },
   { label: "Sur coreano", value: "Sur coreano" },
   { label: "Espa??ol", value: "Espa??ol" },
   { label: "De Sri Lanka", value: "De Sri Lanka" },
   { label: "Sudan??s", value: "Sudan??s" },
   { label: "Surinamer", value: "Surinamer" },
   { label: "Swazi", value: "Swazi" },
   { label: "Sueco", value: "Sueco" },
   { label: "Suizo", value: "Suizo" },
   { label: "Sirio", value: "Sirio" },
   { label: "Taiwan??s", value: "Taiwan??s" },
   { label: "Tayiko", value: "Tayiko" },
   { label: "Tanzano", value: "Tanzano" },
   { label: "Tailand??s", value: "Tailand??s" },
   { label: "Togol??s", value: "Togol??s" },
   { label: "Tongano", value: "Tongano" },
   { label: "Trinidad o Tobagonian", value: "Trinidad o Tobagonian" },
   { label: "Tunecino", value: "Tunecino" },
   { label: "Turco", value: "Turco" },
   { label: "Tuvaluano", value: "Tuvaluano" },
   { label: "Uganda", value: "Uganda" },
   { label: "Ucranio", value: "Ucranio" },
   { label: "Uruguayo", value: "Uruguayo" },
   { label: "Uzbekistan??", value: "Uzbekistan??" },
   { label: "Venezolano", value: "Venezolano" },
   { label: "Vietnamita", value: "Vietnamita" },
   { label: "Gal??s", value: "Gal??s" },
   { label: "Yemenita", value: "Yemenita" },
   { label: "Zambiano", value: "Zambiano" },
   { label: "Zimbabuo", value: "Zimbabuo" }
]