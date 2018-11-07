import { Icon } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import * as React from 'react';
import { ClickableIcon } from './utils/style';

interface PlayPauseIconProps {
  isActive: boolean,
  onClick: (event: ClickParam) => void
}

export const PlayPauseIcon = ({isActive, onClick} : PlayPauseIconProps) => {
  if (isActive) {
    return <Icon type='pause'/>
  }
  return <ClickableIcon type='caret-right' onClick={onClick}/>
};

