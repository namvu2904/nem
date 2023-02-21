import React from 'react';
import { Input, Form, Layout, Select, DatePicker,  InputNumber, Space, Table, Tag, Button } from 'antd';

export default function Home() {
const { Column, ColumnGroup } = Table;
const data = [
  {
    Name:'Nam',
    Gender:'Male',
    Birth:'29/4/2002',
    Experience:'4',
  },
  {
    Name:'Thinh',
    Gender:'Male',
    Birth:'29/1/2002',
    Experience:'3',
  },
  {
    Name:'Nu',
    Gender:'Female',
    Birth:'14/5/1999',
    Experience:'5',
  },
]
  const columns =[
    {
      title:"Name",
      dataIndex:"Name",
      width:"25%",
    },
    {
      title:"Gender",
      dataIndex:"Gender",
      width:"20%",
    },
    {
      title:"Birth",
      dataIndex:"Birth",
      width:"25%",
    },
    {
      title:"Experience",
      dataIndex:"Experience",
      width:"15%",
    },
    {
      title:"Action",
      dataIndex:"Action",
      width:"15%",
      render:(value,record)=>{
        return <>
      <Tag color="blue" style={{cursor:"pointer"}} onClick={()=>{}}>Edit</Tag>
      <Tag color="red" style={{cursor:"pointer"}} onClick={()=>{}}>Delete</Tag>
        </>
      }
    }
    
  ]
  return (
    <>
    <div style={{paddingTop:30}}>
    <Form style={{ width: 450 ,margin:"0 auto"}} labelCol={{span:6}} wrapperCol={{span:18}}>
      <Form.Item label="Name">
      <Input/>
      </Form.Item>
      <Form.Item label="Gender">
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
      <Form.Item label="Birth">
      <DatePicker/>
      </Form.Item>
      <Form.Item label="Experience">
      <InputNumber/>
      </Form.Item>
      <div style={{textAlign:'right'}}><Button type='primary'>Submit</Button></div>
      </Form>

    </div>
       <Table style={{paddingTop:80, maxWidth:1350, margin:'0 auto' }} dataSource = {data} columns = {columns} />
    </>
  )
}
