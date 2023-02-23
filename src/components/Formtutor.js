import React from 'react';
import { Input, Form, Layout, Select, DatePicker,  InputNumber, Space, Button, message } from 'antd';
import { validateMessages } from '@/utils/requireMessages';
import { useAddUserMutation } from '@/redux/Slicer/slice.user';




export default function Formtutor() {
const [addUser, {isLoading}] = useAddUserMutation()
const[form] = Form.useForm()
const handleFinish= (values) => {
  console.log(values)
  addUser(values).unwrap().then(res => {
    message.success("User added")
  }).catch(err =>{
    console.log(err)
    message.error("Failed to add user")
  })
  console.log(values)
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
      <Form.Item label="Experience" name="experience" rules={[{required: true}]}>
      <InputNumber min={0} step={1}/>
      </Form.Item>
      <div style={{textAlign:'right'}}><Button type="primary" htmlType="submit">Submit</Button></div>
      </Form>

    </div>
  )
}