import { Icon } from 'antd';
import { default as styled } from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ClickableIcon = styled(Icon)`
  cursor: pointer;
`;