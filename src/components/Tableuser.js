import React from 'react'
import { Table, Tag} from 'antd'
import { useGetUsersQuery } from '@/redux/Slicer/slice.user';


export default function TableUser() {
    const { Column, ColumnGroup } = Table;
    const { data,isLoading} = useGetUsersQuery()
//     const data = [
//   {
//     id:1,
//     Name:'Nam',
//     Gender:'Male',
//     Birth:'29/4/2002',
//     Experience:'4',
//   },
//   {
//     id:2,
//     Name:'Thinh',
//     Gender:'Male',
//     Birth:'29/1/2002',
//     Experience:'3',
//   },
//   {
//     id:3,
//     Name:'Nu',
//     Gender:'Female',
//     Birth:'14/5/1999',
//     Experience:'5',
//   },
//     {
//     id:4,
//     Name:'Seng',
//     Gender:'Male',
//     Birth:'14/5/1999',
//     Experience:'55',
//   },
// ]
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
