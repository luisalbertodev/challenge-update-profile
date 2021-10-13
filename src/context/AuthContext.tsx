import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  FC
} from 'react';
import { PK_PLATFORM_STORAGE, INITIAL_USER } from 'src/shared/data';
import { getLocalStorage, setLocalStorage } from 'src/helpers/localStorage';
import { IAuthContext, Children, IUser } from 'src/shared/models/auth.model';

const authContext = createContext<Partial<IAuthContext>>({});

export const AuthProvider: FC<Children> = ({ children }) => {
  const [user, setUser] = useState<Partial<IUser> | null>(null);

  const login = async ({ remember, ...currentUser }: Partial<IUser>) => {
    const userData = { ...INITIAL_USER, ...currentUser };
    remember && setLocalStorage(PK_PLATFORM_STORAGE, userData);
    setUser(userData);
  };

  const logout = () => {
    setLocalStorage(PK_PLATFORM_STORAGE, null);
    setUser(null);
  };

  const updateProfile = (currentUser: IUser) => {
    const newUser = { ...user, ...currentUser };
    setLocalStorage(PK_PLATFORM_STORAGE, newUser);
    setUser(newUser);
  };

  useLayoutEffect(() => {
    setUser(getLocalStorage(PK_PLATFORM_STORAGE));
  }, []);

  return (
    <authContext.Provider
      value={{
        login,
        logout,
        user,
        updateProfile,
        isLogged: !!user
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error('authContext must be used within a AuthProvider');
  }

  return context;
};
