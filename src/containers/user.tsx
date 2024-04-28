import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from "react-data-table-component";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
export const UserTable = () => {
  
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
        name: "Location",
        selector: (row: OfficeAttributes) => row.location,
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
    title:"singers concert",
    startDate:'23/04/2024',
    endDate:'20/04/2024',
    location:'kigali arena'

},
{
    name:'abigail',
    title:"iwacu musica",
    startDate:'3/04/2024',
    endDate:'5/04/2024',
    location:'camp kigali'

},{
 name:'amaniriho',
  title:"primus guma guma super star",
  startDate:'3/09/2024',
  endDate:'5/08/2024',
  location:'kigali'

}
  ]
  return (
    <div>
        <h1 className=" my-6 text-xl font-bold w-fit mx-auto"> Manage Bokings</h1>
        <div className=" my-4">

            <Link to={'/upcommingEvents'}>
            <button
            className=" bg-blue px-3 py-1 text-white  ">
                Select Event</button>
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
