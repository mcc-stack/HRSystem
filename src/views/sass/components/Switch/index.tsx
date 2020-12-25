import { Switch } from 'antd';
import { FC, memo } from 'react';

interface StatusProp {
  state: number;
}

function onChange(checked: boolean) {
  console.log(checked);
}

const Status: FC<StatusProp> = memo(props => {
  return <Switch defaultChecked={props.state === 1} onChange={onChange} />;
});

export default Status;
