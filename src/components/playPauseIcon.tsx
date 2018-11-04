import {Icon} from 'antd';
import * as React from 'react';

export class PlayPauseIcon extends React.Component<{
  isActive: boolean,
  onClick: (event: any) => void
}> {

  public render() {
    if (this.props.isActive) {
      return <a><Icon type='pause'/></a>
    }
    return <a><Icon type='caret-right' onClick={this.props.onClick}/></a>
  };

}
