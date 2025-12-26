import { useEffect, useState } from 'react';
import TableManagement from '../ReUsedComponents/TableManagement';
import { connectWebSocket } from '../../../apis/websocket';

function LeadsPage() {

    const leadsColumns = [
        { key: "id", label: "S.No" },
        { key: "fullName", label: "Full Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "message", label: "Message" },
        {
            key: "status",
            label: "Status",
            render: (value) => (
            <span className={`px-3 py-1 rounded-full text-xs ${value.toLowerCase()}`}>
                {value}
            </span>
            ),
        },
    ];


    const leadsEnquiries = [
        {
            id: 1,
            fullName: "Rahul Sharma",
            email: "rahul.sharma@gmail.com",
            phone: "+91 98765 43210",
            message: "Interested in Full Stack Development course.",
            status: "New",
        },
        {
            id: 2,
            fullName: "Ananya Verma",
            email: "ananya.verma@gmail.com",
            phone: "+91 91234 56789",
            message: "Need details about Python & Data Analytics.",
            status: "Contacted",
        },
        {
            id: 3,
            fullName: "Karthik Reddy",
            email: "karthik.reddy@gmail.com",
            phone: "+91 99887 66554",
            message: "Looking for weekend batches and fee structure.",
            status: "Follow Up",
        },
        {
            id: 4,
            fullName: "Priya Singh",
            email: "priya.singh@gmail.com",
            phone: "+91 90123 45678",
            message: "Want to enroll in React frontend course.",
            status: "Converted",
        },
        {
            id: 5,
            fullName: "Amit Patel",
            email: "amit.patel@gmail.com",
            phone: "+91 88990 11223",
            message: "Please call me regarding Java backend training.",
            status: "New",
        },
    ];

    const [leads, setLeads] = useState([])

    useEffect(() => {
        connectWebSocket((lead) => {
            setLeads(prev => [...leadsEnquiries, lead, ...prev])
        })
    }, [])

    
    return(
        <TableManagement
            title="All Leads"
            data={leads}
            columns={leadsColumns}
            searchKeys={["fullName", "email", "phone", "message"]}
            statusKey="status"
            clickable = {true}
        />
    )
}

export default LeadsPage