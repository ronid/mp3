import { Icon } from 'antd';
import * as React from 'react';
import { ClickableIcon } from './utils/style';

interface PlayPauseIconProps {
  isActive: boolean | undefined,
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const PlayPauseIcon = ({isActive, onClick} : PlayPauseIconProps) => {
  if (isActive) {
    return <Icon type='pause'/>
  }
  return <ClickableIcon type='caret-right' onClick={onClick}/>
};

