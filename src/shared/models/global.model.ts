import { ReactChildren, ReactElement } from 'react';

export type Events = 'error' | 'warning' | 'info' | 'success'

export interface IParamsToggleAlert {
   title: string, type: Events
}

export interface IGlobalContext {
   toggleAlert: (params: IParamsToggleAlert) => void;
   alertData: IParamsToggleAlert;
   isVisibleAlert: boolean;
}

export interface Children {
   children?: ReactElement | ReactChildren;
}
