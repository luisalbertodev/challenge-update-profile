import { FC } from 'react';
import LogoImage from 'src/assets/images/logo.png';

interface IProps {
  maxWidth?: number;
}

const Logo: FC<IProps> = ({ maxWidth }) => {
  return <img src={LogoImage} alt="logo" className="img-fluid" style={{ maxWidth }} />;
};

export default Logo;
