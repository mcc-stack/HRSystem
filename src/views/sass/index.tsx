import { Table } from 'antd';
import { useCompony } from './useCompony';

const Sass = () => {
  const { companyData, columns } = useCompony();
  return (
    <section>
      <Table columns={columns} dataSource={companyData} className='table' />
    </section>
  );
};
export default Sass;
