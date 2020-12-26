import { Breadcrumb, Table } from 'antd';
import { BreadNav } from '../../components/BreadNav';
import { useCompony } from './useCompony';

const Sass = () => {
  const { companyData, columns } = useCompony();
  return (
    <section>
      <BreadNav text={'Sass企业'} />
      <Table columns={columns} dataSource={companyData} className='table' />
    </section>
  );
};
export default Sass;
