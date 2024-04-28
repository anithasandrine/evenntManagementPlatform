import {  faBook, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from "react-data-table-component";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const UpcammingEvents = () => {
  
  const columns = [
    {
        name: "Name",
        selector: (row: OfficeAttributes) => row.name,
      },
    {
      name: "Event title",
      selector: (row: OfficeAttributes) => row.title,
    },
    {
      name: "Start Date",
      selector: (row: OfficeAttributes) => row.startDate,
    },
    {
      name: "End Date",
      selector: (row: OfficeAttributes) => row.endDate,
    },
    {
        name: "Left Tickets",
        selector: (row: OfficeAttributes) => 3,
      },

    {
      name: "Book Tickets",
      width: "8rem",

      cell: (row: OfficeAttributes) => (
        <div className=" flex justify-between gap-5 relative">
          
          <button
            className=" outline-none"
           
          >
            <Tippy content="Book Ticket">
              <FontAwesomeIcon
                className=" text-blue hover:text-red-600 text-xl"
                icon={faBook}
              />
            </Tippy>
          </button>
        </div>
      ),
    },
  ];

  const offices =[
{
    name:'Sando',
    title:"sando@gmail.com",
    startDate:'2345678987654',
    endDate:'2345678987654',
    location:""

},
{
    name:'Sando',
    title:"sando@gmail.com",
    startDate:'2345678987654',
    endDate:'2345678987654',
    location:""
},{
    name:'Sando',
    title:"sando@gmail.com",
    startDate:'2345678987654',
    endDate:'2345678987654',
    location:""
}
  ]

const [foundData,setFoundData
] = useState<UpcommingEvents[]>([{
    _id: 'string',
    name: 'string',
    title: 'string',
    startDate: 'string',
    endDate: 'string',
    location: 'string'
}])
  useEffect(()=>{

     async function Events(){
         const data = await fetch('http://localhost:8080/event_management_app/events');
         if(!data.ok){
          throw await data.json()
         }
         const d = (await data.json())
         setFoundData((d))
      }
   Events()
  },[])

  
  return (
    <div>
    <h1 className=" my-6 text-xl font-bold w-fit mx-auto"> Up comming events.</h1>       <div className=" my-4">
            <Link to={'/user'}>
            <button className=" bg-blue px-3 py-1 text-white  ">Back</button>
            </Link>
        </div>
      <DataTable
        columns={columns}
        data={foundData}
        pagination
        theme="solarized"
      />
    </div>
  );
};
