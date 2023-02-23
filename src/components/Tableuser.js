import React, {useEffect, useState} from 'react'
import { DatePicker, Form, Input, InputNumber, message, Modal, Select, Spin, Table, Tag} from 'antd'
import { useDeleteUserMutation, useEditUserMutation, useGetUsersQuery } from '@/redux/Slicer/slice.user';
import { parseDate } from '@/utils/parseDate';
import { validateMessages } from '@/utils/requireMessages';
import dayjs from 'dayjs';

export default function TableUser() {
    const { Column, ColumnGroup } = Table;
    const {data,isLoading} = useGetUsersQuery()
    const [userDelete, {isLoading: isLoadingDelete}] = useDeleteUserMutation()

    const [isModalEdit, setIsModalEdit] = useState(false);
    const [dataEdit, setDataEdit] = useState(null)

    const handleDelete = (id) => {
      console.log(id)
      userDelete(id).unwrap().then( res =>{
        message.success("User deleted")
      }).catch(err=>{
        message.error("Failed to update user")
      })
    }

  const columns =[
    {
      title:"Name",
      dataIndex:"name",
      width:"25%",
    },
    {
      title:"Gender",
      dataIndex:"gender",
      width:"20%",
    },
    {
      title:"Birth",
      dataIndex:"birth",
      width:"25%",
      render: (value,record) => {
        return<>
          {parseDate(value)}
        </>
      }
    },
    {
      title:"Experience",
      dataIndex:"experience",
      width:"15%",
    },
    {
      title:"Action",
      dataIndex:"action",
      width:"15%",
      render:(value,record)=>{
        return <>
      <Tag color="blue" style={{cursor:"pointer"}} onClick={()=>{
        setDataEdit(record)
        setIsModalEdit(true)
      }}>Edit</Tag>
      <Tag color="red" style={{cursor:"pointer"}} onClick={() => handleDelete(record.id)}>Delete</Tag>
        </>
      }
    }
    
  ]
  return (
    <div>
    <Spin spinning={isLoadingDelete}>
      <Table style={{paddingTop:80, maxWidth:1350, margin:'0 auto' }} dataSource = {data} columns = {columns}
        pagination={{pageSize : 5}} loading={isLoading}/>
    </Spin>
    {dataEdit &&
    <ModalEditUser setIsModalEdit = {setIsModalEdit} isModalEdit = {isModalEdit} dataEdit = {dataEdit} 
    setDataEdit = {setDataEdit} />
    }
    </div>
  )
}
function ModalEditUser({setIsModalEdit, isModalEdit, dataEdit, setDataEdit}){
  const [form] = Form.useForm()
  const [editUser, {isLoading}] = useEditUserMutation()
    const handleFinish = (values)=>{
    console.log(values)
    editUser({
      ...values,
      id: dataEdit?.id
    }
    ).unwrap().then(res =>{
      message.success("User Edited")
      form.resetFields()
      setDataEdit(null)
      setIsModalEdit(false)
    }).catch(err =>{
      message.error("Failed to edit user")
    })
  }
  useEffect(()=>{
    if (dataEdit){
      form.setFieldsValue({
        ...dataEdit,
        birth: dayjs(dataEdit.birth, 'YYY/MM/DD')
      })

    }
  },[JSON.stringify(dataEdit)])

  return <Modal title = "Edit user" 
    onOk={() =>{
        form.submit()
    }}
    closable={false}
    onCancel={() => {
    setDataEdit(null)
    setIsModalEdit(false)
    }}
    open={isModalEdit}>
    <Spin spinning={isLoading}>
     <Form labelCol={{span:6}} wrapperCol={{span:18}} form = {form}
       onFinish={handleFinish}
       validateMessages = {validateMessages}
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
      <DatePicker format={"DD/MM/YYYY"}/>
      </Form.Item>
      <Form.Item label="Experience" name="experience" rules={[{required: true}]}>
      <InputNumber min={0} step={1}/>
      </Form.Item>
      </Form>
      </Spin>
    </Modal>
}
     