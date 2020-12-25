import { Calendar } from 'antd';
function onPanelChange(value: any, mode: any) {
  console.log(value, mode);
}
export const Canlenadar = () => {
  <p>工作日历</p>;
  return <Calendar fullscreen={false} onPanelChange={onPanelChange}></Calendar>;
};
