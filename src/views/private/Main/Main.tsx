import Toolbar from './components/Toolbar';
import Tabs from './components/Tabs';

const Main = () => {
  return (
    <div
      className="overflow-hidden"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="250"
      data-aos-offset="50"
    >
      <Toolbar />
      <Tabs />
    </div>
  );
};

export default Main;
