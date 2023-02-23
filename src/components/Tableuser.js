import React from 'react'
import { message, Spin, Table, Tag} from 'antd'
import { useDeleteUserMutation, useGetUsersQuery } from '@/redux/Slicer/slice.user';
import { parseDate } from '@/utils/parseDate';


export default function TableUser() {
    const { Column, ColumnGroup } = Table;
    const { data,isLoading} = useGetUsersQuery()
    const [userDelete, {isLoading: isLoadingDelete}] = useDeleteUserMutation()
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
      <Tag color="blue" style={{cursor:"pointer"}} onClick={()=>{}}>Edit</Tag>
      <Tag color="red" style={{cursor:"pointer"}} onClick={()   => handleDelete(record.id)}>Delete</Tag>
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
      
    </div>
  )
}
