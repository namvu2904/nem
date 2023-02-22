import React from 'react';
import { Input, Form, Layout, Select, DatePicker,  InputNumber, Space, Button } from 'antd';
import { validateMessages } from '@/utils/requireMessages';



export default function Formtutor() {
const[form] = Form.useForm()
const handleFinish= (values) => {
  console.log(values)
}
const handleClear = () => {
form.resetFields()
}
  return (
    <div style={{paddingTop:30}}>
    <Form style={{ width: 450 ,margin:"0 auto"}} labelCol={{span:6}} wrapperCol={{span:18}} form = {form}
       onFinish={handleFinish}
       validateMessages ={validateMessages}
       >
      <Form.Item label="Name" name="name" rules={[{required: true}]}>
      <Input/>
      </Form.Item>
      <Form.Item label="Gender" name="gender" rules={[{required: true}]}>
      <Select placeholder="Select Gender"
      options={[
        {
          value: 'male',
          label: 'Male',
        },
        {
          value:'female',
          label:'Female'
        }
        ]}
      />
      </Form.Item>
      <Form.Item label="Birth" name="birth" rules={[{required: true}]}>
      <DatePicker/>
      </Form.Item>
      <Form.Item label="Experience" name="exp" rules={[{required: true}]}>
      <InputNumber min={0} step={1}/>
      </Form.Item>
      <div style={{textAlign:'right'}}><Button type="primary" htmlType="submit">Submit</Button></div>
      <div style={{textAlign:'right', marginTop:10}}><Button type='primary' htmlType='Button'
        onClick={handleClear}>Clear Form</Button></div>
      </Form>

    </div>
  )
}