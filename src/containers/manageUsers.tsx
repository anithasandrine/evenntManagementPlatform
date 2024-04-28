import {  faBook, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from "react-data-table-component";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
export const ManageUser = () => {
  
    const columns = [
      {
          name: "Name",//name
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
        name: "Actions",
        width: "8rem",
  
        cell: (row: OfficeAttributes) => (
          <div className=" flex justify-between gap-5 relative">
            
            <button
              className=" outline-none"
             
            >
              <Tippy content="Delete">
                <FontAwesomeIcon
                  className=" text-blue hover:text-red-600 text-xl"
                  icon={faEdit}
                />
              </Tippy>
            </button>
            <button
              className=" outline-none"
             
            >
              <Tippy content="Delete">
                <FontAwesomeIcon
                  className=" text-blue hover:text-red-600 text-xl"
                  icon={faTrash}
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
      }  ]
    return (
      <div>
                  <h1 className=" my-6 text-xl font-bold w-fit mx-auto">Manage user</h1>
          <div className=" my-4 flex gap-4">
      <Link to={'/manageUser'}>
              <button className=" bg-blue px-3 py-1 text-white  ">Manage User</button>
      </Link>
      <Link to={'/manageEvent'}>
              <button className=" bg-blue px-3 py-1 text-white  ">Manage Event</button>
      </Link>
  
          </div>
        <DataTable
          columns={columns}
          data={offices}
          pagination
          theme="solarized"
        />
      </div>
    );
  };
  