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
      "value": "Régimen de asalariados",
      "label": "Régimen de asalariados",
   },
   {
      "value": "Régimen de actividades profesionales",
      "label": "Régimen de actividades profesionales",
   },
   {
      "value": "Régimen de arrendamiento de inmuebles",
      "label": "Régimen de arrendamiento de inmuebles",
   },
   {
      "value": "Régimen de actividad empresarial",
      "label": "Régimen de actividad empresarial",
   },
   {
      "value": "Régimen de incorporación fiscal. ",
      "label": "Régimen de incorporación fiscal. ",
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
      label: 'Separado de unión legal',
      value: 'Separado de unión legal',
   },
   {
      label: 'Separado(a) de unión de hecho',
      value: 'Separado(a) de unión de hecho',
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
      label: 'Técnología',
      value: 'Técnología',
   },
   {
      label: 'Tienda en línea',
      value: 'Tienda en línea',
   },
   {
      label: 'Eléctronicos',
      value: 'Eléctronicos',
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
   { label: "Albanés", value: "Albanés" },
   { label: "Argelino", value: "Argelino" },
   { label: "Americano", value: "Americano" },
   { label: "Andorrano", value: "Andorrano" },
   { label: "Angoleño", value: "Angoleño" },
   { label: "Antiguos", value: "Antiguos" },
   { label: "Argentino", value: "Argentino" },
   { label: "Armenio", value: "Armenio" },
   { label: "Australiano", value: "Australiano" },
   { label: "Austriaco", value: "Austriaco" },
   { label: "Azerbaiyano", value: "Azerbaiyano" },
   { label: "Bahameño", value: "Bahameño" },
   { label: "Bahreiní", value: "Bahreiní" },
   { label: "Bangladesh", value: "Bangladesh" },
   { label: "Barbadense", value: "Barbadense" },
   { label: "Barbudans", value: "Barbudans" },
   { label: "Batswana", value: "Batswana" },
   { label: "Bielorruso", value: "Bielorruso" },
   { label: "Belga", value: "Belga" },
   { label: "Beliceño", value: "Beliceño" },
   { label: "Beninés", value: "Beninés" },
   { label: "Butanés", value: "Butanés" },
   { label: "Boliviano", value: "Boliviano" },
   { label: "Bosnio", value: "Bosnio" },
   { label: "Brasileño", value: "Brasileño" },
   { label: "Británico", value: "Británico" },
   { label: "Bruneiano", value: "Bruneiano" },
   { label: "Búlgaro", value: "Búlgaro" },
   { label: "Burkinabe", value: "Burkinabe" },
   { label: "Birmano", value: "Birmano" },
   { label: "Burundés", value: "Burundés" },
   { label: "Camboyano", value: "Camboyano" },
   { label: "Camerunés", value: "Camerunés" },
   { label: "Canadiense", value: "Canadiense" },
   { label: "Caboverdiano", value: "Caboverdiano" },
   { label: "Centroafricano", value: "Centroafricano" },
   { label: "Chadiano", value: "Chadiano" },
   { label: "Chileno", value: "Chileno" },
   { label: "Chino", value: "Chino" },
   { label: "Colombiana", value: "Colombiana" },
   { label: "Comoran", value: "Comoran" },
   { label: "Congoleño", value: "Congoleño" },
   { label: "Costa Rica", value: "Costa Rica" },
   { label: "Croata", value: "Croata" },
   { label: "Cubano", value: "Cubano" },
   { label: "Chipriota", value: "Chipriota" },
   { label: "Checo", value: "Checo" },
   { label: "Danés", value: "Danés" },
   { label: "Djibouti", value: "Djibouti" },
   { label: "Dominicano", value: "Dominicano" },
   { label: "Holandés", value: "Holandés" },
   { label: "Timor Oriental", value: "Timor Oriental" },
   { label: "Ecuatoriano", value: "Ecuatoriano" },
   { label: "Egipcio", value: "Egipcio" },
   { label: "Emirian", value: "Emirian" },
   { label: "Guinea Ecuatorial", value: "Guinea Ecuatorial" },
   { label: "Eritreo", value: "Eritreo" },
   { label: "Estonio", value: "Estonio" },
   { label: "Etíope", value: "Etíope" },
   { label: "Fiyiano", value: "Fiyiano" },
   { label: "Filipino", value: "Filipino" },
   { label: "Finlandés", value: "Finlandés" },
   { label: "Francés", value: "Francés" },
   { label: "Gabonés", value: "Gabonés" },
   { label: "Gambiano", value: "Gambiano" },
   { label: "Georgiano", value: "Georgiano" },
   { label: "Alemán", value: "Alemán" },
   { label: "Ghanés", value: "Ghanés" },
   { label: "Griego", value: "Griego" },
   { label: "Granadino", value: "Granadino" },
   { label: "Guatemalteco", value: "Guatemalteco" },
   { label: "Guinea-Bissauan", value: "Guinea-Bissauan" },
   { label: "Guinea", value: "Guinea" },
   { label: "Guyanés", value: "Guyanés" },
   { label: "Haitiano", value: "Haitiano" },
   { label: "Herzegoviniano", value: "Herzegoviniano" },
   { label: "Hondureño", value: "Hondureño" },
   { label: "Húngaro", value: "Húngaro" },
   { label: "I-Kiribati", value: "I-Kiribati" },
   { label: "Islandés", value: "Islandés" },
   { label: "Indio", value: "Indio" },
   { label: "Indonesio", value: "Indonesio" },
   { label: "Iraní", value: "Iraní" },
   { label: "Iraquí", value: "Iraquí" },
   { label: "Irlandesa", value: "Irlandesa" },
   { label: "Israelí", value: "Israelí" },
   { label: "Italiano", value: "Italiano" },
   { label: "Marfileño", value: "Marfileño" },
   { label: "Jamaicano", value: "Jamaicano" },
   { label: "Japonés", value: "Japonés" },
   { label: "Jordano", value: "Jordano" },
   { label: "Kazajo", value: "Kazajo" },
   { label: "Keniano", value: "Keniano" },
   { label: "Kittian y Nevisian", value: "Kittian y Nevisian" },
   { label: "Kuwaití", value: "Kuwaití" },
   { label: "Kirguís", value: "Kirguís" },
   { label: "Laosiano", value: "Laosiano" },
   { label: "Letón", value: "Letón" },
   { label: "Libanés", value: "Libanés" },
   { label: "Liberiano", value: "Liberiano" },
   { label: "Libio", value: "Libio" },
   { label: "Liechtensteiner", value: "Liechtensteiner" },
   { label: "Lituano", value: "Lituano" },
   { label: "Luxemburgués", value: "Luxemburgués" },
   { label: "Macedónio", value: "Macedónio" },
   { label: "Madagascarí", value: "Madagascarí" },
   { label: "Malauí", value: "Malauí" },
   { label: "Malasio", value: "Malasio" },
   { label: "Maldivan", value: "Maldivan" },
   { label: "Maliense", value: "Maliense" },
   { label: "Maltés", value: "Maltés" },
   { label: "Marshallese", value: "Marshallese" },
   { label: "Mauritano", value: "Mauritano" },
   { label: "Mauriciano", value: "Mauriciano" },
   { label: "Mexicano", value: "Mexicano" },
   { label: "Micronesia", value: "Micronesia" },
   { label: "Moldavo", value: "Moldavo" },
   { label: "Monacan", value: "Monacan" },
   { label: "Mongol", value: "Mongol" },
   { label: "Marroquí", value: "Marroquí" },
   { label: "Mosotho", value: "Mosotho" },
   { label: "Motswana", value: "Motswana" },
   { label: "Mozambiqueño", value: "Mozambiqueño" },
   { label: "Namibio", value: "Namibio" },
   { label: "Nauruan", value: "Nauruan" },
   { label: "Nepalés", value: "Nepalés" },
   { label: "Neozelandés", value: "Neozelandés" },
   { label: "Nicaragüense", value: "Nicaragüense" },
   { label: "Nigeriano", value: "Nigeriano" },
   { label: "Níger", value: "Níger" },
   { label: "Norcoreano", value: "Norcoreano" },
   { label: "Irlandés norteño", value: "Irlandés norteño" },
   { label: "Noruego", value: "Noruego" },
   { label: "Omaní", value: "Omaní" },
   { label: "Pakistaní", value: "Pakistaní" },
   { label: "Palauano", value: "Palauano" },
   { label: "Panameño", value: "Panameño" },
   { label: "Papúa Nueva Guinea", value: "Papúa Nueva Guinea" },
   { label: "Paraguayo", value: "Paraguayo" },
   { label: "Peruano", value: "Peruano" },
   { label: "Polaco", value: "Polaco" },
   { label: "Portugués", value: "Portugués" },
   { label: "Qatarí", value: "Qatarí" },
   { label: "Rumano", value: "Rumano" },
   { label: "Ruso", value: "Ruso" },
   { label: "Ruandes", value: "Ruandes" },
   { label: "Santa Lucía", value: "Santa Lucía" },
   { label: "Salvadoreño", value: "Salvadoreño" },
   { label: "Samoano", value: "Samoano" },
   { label: "San Marino", value: "San Marino" },
   { label: "Santo Toméreo", value: "Santo Toméreo" },
   { label: "Arabia", value: "Arabia" },
   { label: "Escocés", value: "Escocés" },
   { label: "Senegalés", value: "Senegalés" },
   { label: "Serbio", value: "Serbio" },
   { label: "Seychelles", value: "Seychelles" },
   { label: "Sierra Leona", value: "Sierra Leona" },
   { label: "Singapur", value: "Singapur" },
   { label: "Eslovaco", value: "Eslovaco" },
   { label: "Esloveno", value: "Esloveno" },
   { label: "Islas Salomón", value: "Islas Salomón" },
   { label: "Somalí", value: "Somalí" },
   { label: "Sudafricano", value: "Sudafricano" },
   { label: "Sur coreano", value: "Sur coreano" },
   { label: "Español", value: "Español" },
   { label: "De Sri Lanka", value: "De Sri Lanka" },
   { label: "Sudanés", value: "Sudanés" },
   { label: "Surinamer", value: "Surinamer" },
   { label: "Swazi", value: "Swazi" },
   { label: "Sueco", value: "Sueco" },
   { label: "Suizo", value: "Suizo" },
   { label: "Sirio", value: "Sirio" },
   { label: "Taiwanés", value: "Taiwanés" },
   { label: "Tayiko", value: "Tayiko" },
   { label: "Tanzano", value: "Tanzano" },
   { label: "Tailandés", value: "Tailandés" },
   { label: "Togolés", value: "Togolés" },
   { label: "Tongano", value: "Tongano" },
   { label: "Trinidad o Tobagonian", value: "Trinidad o Tobagonian" },
   { label: "Tunecino", value: "Tunecino" },
   { label: "Turco", value: "Turco" },
   { label: "Tuvaluano", value: "Tuvaluano" },
   { label: "Uganda", value: "Uganda" },
   { label: "Ucranio", value: "Ucranio" },
   { label: "Uruguayo", value: "Uruguayo" },
   { label: "Uzbekistaní", value: "Uzbekistaní" },
   { label: "Venezolano", value: "Venezolano" },
   { label: "Vietnamita", value: "Vietnamita" },
   { label: "Galés", value: "Galés" },
   { label: "Yemenita", value: "Yemenita" },
   { label: "Zambiano", value: "Zambiano" },
   { label: "Zimbabuo", value: "Zimbabuo" }
]