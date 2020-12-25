import { Loading } from '../../components/Loading';
import { Canlenadar } from './components/Canlenadar';
import './index.scss';
const index = () => {
  return (
    <>
      <section className='index-header'>
        <div className='canlendar'>
          <p>工作日历</p>
          <Canlenadar />
        </div>
        <div className='work'>2222222</div>
      </section>
    </>
  );
};

export default index;
