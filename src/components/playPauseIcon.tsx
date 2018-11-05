import { Icon } from 'antd';
import * as React from 'react';
import { ClickableIcon } from './utils/style';

export const PlayPauseIcon = ({isActive, onClick}) => {
  if (isActive) {
    return <Icon type='pause'/>
  }
  return <ClickableIcon type='caret-right' onClick={onClick}/>
};

