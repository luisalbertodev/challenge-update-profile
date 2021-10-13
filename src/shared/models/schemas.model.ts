export interface ICategory {
  _id?: string;
  category: string;
}

export interface IUnitMeasurement {
  _id?: string;
  unitMeasurement: string;
}

export interface IBrand {
  _id?: string;
  brand: string;
}

export interface IWarehouse {
  _id?: string;
  warehouse: string;
}

export interface IPresentation {
  _id?: string;
  price: string;
  isPromotion: boolean;
  discount: string;
  stock: string;
  stockMin: string;
  stockMax: string;
  presentation: string;
}

export interface IProduct {
  _id?: string;
  title: string;
  description: string;
  sku: string;
  barCode: string;
  images: string[];
  isAvailable: boolean;
  price: number;
  isPromotion: boolean;
  discount: number;
  stock: number;
  stockMin: number;
  stockMax: number;

  brand: string | IBrand | any;
  category: string | ICategory | any;
  unitMeasurement: string | IUnitMeasurement | any;
}

export interface IAdmin {
  _id?: string;
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  roles: string[];
  warehouse: string | IWarehouse | any;
}

export type UserType = {
  isAdmin: boolean;
  _id: string;
  name: string;
  token: string;
  warehouse: string;
};
