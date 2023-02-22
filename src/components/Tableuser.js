import React from 'react'
import { Table, Tag} from 'antd'
import { useGetUsersQuery } from '@/redux/Slicer/slice.user';


export default function TableUser() {
    const { Column, ColumnGroup } = Table;
    const { data,isLoading} = useGetUsersQuery()

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
      <Tag color="red" style={{cursor:"pointer"}} onClick={()=>{}}>Delete</Tag>
        </>
      }
    }
    
  ]
  return (
    <div><Table style={{paddingTop:80, maxWidth:1350, margin:'0 auto' }} dataSource = {data} columns = {columns}
        pagination={{pageSize : 5}} loading={isLoading}
    /></div>
  )
}
