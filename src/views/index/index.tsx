import { BreadNav } from '../../components/BreadNav';
import { Canlenadar } from './components/Canlenadar';
import './index.scss';
const index = () => {
  return (
    <section>
      <BreadNav text={'工作日历'} />
      <Canlenadar />
    </section>
  );
};

export default index;
