import React from 'react'
import TableManagement from '../ReUsedComponents/TableManagement'
import { useSelector } from 'react-redux'

function CourseManagement() {
    const {courses} = useSelector(state => state.data)
    const courseColumns = [
        { key: "title", label: "Course Title" },
        {
        key: "discountedPrice",
        label: "Price",
        render: (_, row) => `₹${row.price.discounted}`,
        },
        {
        key: "price",
        label: "Original",
        render: (_, row) => `₹${row.price.original}`,
        },
    ];

  return (
    <TableManagement
        title="All Courses"
        data={courses}
        columns={courseColumns}
        searchKeys={["title"]}
        
    />
  )
}

export default CourseManagement