import { Icon } from 'antd';
import * as React from 'react';

export const PlayPauseIcon = ({isActive, onClick}) => {
  if (isActive) {
    return <a><Icon type='pause'/></a>
  }
  return <a><Icon type='caret-right' onClick={onClick}/></a>
};

