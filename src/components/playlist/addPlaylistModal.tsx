import {Button, Form, Input, Modal, Select} from 'antd';
import {map} from 'lodash';
import * as React from 'react';

const FormItem = Form.Item;
const Option = Select.Option;

class AddPlaylistModalView extends React.Component<{
  addPlaylist: (name, songs) => void,
  form: any,
  handleCancel: (e: any) => void
  handleSubmit: (e: any) => void,
  songs: [],
  visible: boolean,
}> {

  public handleSubmit = (e) => {
    const {name, songs} = this.props.form.getFieldsValue();
    this.props.addPlaylist(name, songs);
    this.props.handleSubmit(e);

    // Reset form state.
    this.props.form.setFieldsValue({name: '', songs: []})
  };


  public render() {
    const {getFieldDecorator} = this.props.form;
    console.log(getFieldDecorator);
    return (
      <Modal
        title='Create your own playlist!'
        visible={this.props.visible}
        footer={null}
      >
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
            filterOption={(input, option: any) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {map(this.props.songs, song => (<Option key={song.id}>{song.name}</Option>))}
          </Select>)}
          <br/>
          <br/>
          <Button className='modal-button' type='primary' onClick={this.handleSubmit.bind(this)}>Submit</Button>
          <Button className='modal-button' type='default' onClick={this.props.handleCancel}>Close</Button>
        </Form>
      </Modal>
    );
  }
}

const AddPlaylistModal = Form.create({})(AddPlaylistModalView);
export default AddPlaylistModal;
