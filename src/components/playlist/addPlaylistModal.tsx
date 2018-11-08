import { Button, Form, Input, Modal, Select } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { OptionProps } from 'antd/lib/select';
import { map } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { SongState } from '../../types/store';


export const ModalButton = styled(Button as any)`
  margin: 5px;
`;

const FormItem = Form.Item;
const Option = Select.Option;


interface AddPlaylistModalProps {
  addPlaylist: (name: string, songs: string[]) => void,
  form: WrappedFormUtils,
  handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
  songs: SongState[],
  visible: boolean,
}

class AddPlaylistModalView extends React.Component<AddPlaylistModalProps> {

  public handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {form} = this.props;
    this.props.addPlaylist(form.getFieldValue('name'), form.getFieldValue('songs'));
    this.props.handleSubmit(e);
    // Reset form state.
    this.props.form.setFieldsValue({name: '', songs: []})
  };

  public optionStartsWithInputFilter = (input: string, option: React.ReactElement<OptionProps>) => {
    const value = option.props.children;
    if (!(value && typeof value === 'string')) {
      return false;
    } else {
      return value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  };

  public render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Modal title='Create your own playlist!' visible={this.props.visible} footer={null}>
        <Form layout='horizontal'>
          <FormItem>
            {getFieldDecorator('name')(<Input placeholder='Name your playlist'/>)}
          </FormItem>
          {getFieldDecorator('songs')(<Select
            mode='tags'
            showSearch={true}
            style={{width: 200}}
            placeholder='Select songs'
            optionFilterProp='children'
            filterOption={this.optionStartsWithInputFilter}
          >
            {map(this.props.songs, (song: SongState) => (<Option key={song.id}>{song.name}</Option>))}
          </Select>)}
          <br/>
          <br/>
          <ModalButton type='primary' onClick={this.handleSubmit.bind(this)}>Submit</ModalButton>
          <ModalButton type='default' onClick={this.props.handleCancel}>Close</ModalButton>
        </Form>
      </Modal>
    );
  }
}

export const AddPlaylistModal = Form.create({})(AddPlaylistModalView);
