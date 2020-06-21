import React from 'react';

const testpage:React.FunctionComponent<{}> = () => {
  const [value] = React.useState(99);
  return <div>test - {value}</div>;
};

export default testpage;
