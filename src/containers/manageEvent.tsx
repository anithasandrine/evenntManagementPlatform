import {  faBook, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from "react-data-table-component";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const ManageEvent = () => {
  
function Handle_delete(deltedId:string){//delete
 async function del(id:string){
    await fetch(`http://localhost:8080/event_management_app/events/${id}`,{
        method:'DELETE',//delete
        headers:{
        "Content-type" :"application/json"//app.json
        }
    })
 }
 del(deltedId)
}
function Handle_Edit(EDIT:UpcommingEvents){
    async function edit(){
        let id = EDIT._id
        delete(EDIT?._id)
        console.log('/////////////',EDIT,id)
       await fetch(`http://localhost:8080/event_management_app/eventupdate/${id}`,{
           method:'PATCH',
           headers:{
           "Content-type" :"application/json"
           },
           body:JSON.stringify(EDIT)
       })
    }
    edit()
   }
function Handle_Add(data:UpcommingEvents){
    async function del(d:UpcommingEvents){
        console.log(delete(d?._id))
       await fetch(`http://localhost:8080/event_management_app/event`,{
           method:'POST',
           headers:{
           "Content-type" :"application/json"
           },
           body:JSON.stringify(d)
       })
    }
    del(data)
   }

    const columns = [
      {
          name: "Name",
          selector: (row: UpcommingEvents) => row.name,
        },
      {
        name: "Event title",
        selector: (row: UpcommingEvents) => row.title,
      },
      {
        name: "Start Date",
        selector: (row: UpcommingEvents) => row.startDate,
      },
      {
        name: "End Date",
        selector: (row: UpcommingEvents) => row.endDate,
      },
  
      {
        name: "Actions",
        width: "8rem",
  
        cell: (row: UpcommingEvents) => (
          <div className=" flex justify-between gap-5 relative">
            
            <button
              className=" outline-none"
             onClick={()=>{
                setEditData(row)
                setOpenEdit(true)
                setOpenForm(false)

            }}
            >
              <Tippy content="Edit">
                <FontAwesomeIcon
                  className=" text-blue hover:text-red-600 text-xl"
                  icon={faEdit}
                />
              </Tippy>
            </button>
            <button
              className=" outline-none"
             onClick={()=>Handle_delete(row?._id)}
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


      const [foundData,setFoundData
      ] = useState<UpcommingEvents[]>([{
          _id: 'string',
          name: 'string',
          title: 'string',
          startDate: 'string',
          endDate: 'string',
          location: 'string'
      }])
      const [data,setData] = useState<UpcommingEvents>({
        _id: 'string',
        name: 'string',
        title: 'string',
        startDate: 'string',
        endDate: 'string',
        location: 'string'
    })

    const [ediData,setEditData] = useState<UpcommingEvents>({
        _id: 'string',
        name: 'string',
        title: 'string',
        startDate: 'string',
        endDate: 'string',
        location: 'string'
    })

    const [openForm,setOpenForm] = useState<boolean>(false)
    const [openEdit,setOpenEdit] = useState<boolean>(false)
        useEffect(()=>{
           async function Events(){
               const data = await fetch('http://localhost:8080/event_management_app/events/');
               if(!data.ok){
                throw await data.json()
               }
               const d = (await data.json())
               setFoundData((d))
            }
         Events()
        },[])
    return (
      <div className=" mb-8">
                  <h1 className=" my-6 text-xl font-bold w-fit mx-auto">Manage Event</h1>
          <div className=" my-4 flex gap-4">
      <Link to={'/admin'}>
              <button
              className=" bg-blue px-3 py-1 text-white  ">Back</button>
      </Link>
              <button
              onClick={()=>{
                setOpenForm(!openForm)
                setOpenEdit(false)
            }
            }
              className=" bg-blue px-3 py-1 text-white  ">Add event</button>
  
          </div>
        <DataTable
          columns={columns}
          data={foundData}
          pagination
          theme="solarized"
        />

        {openForm&&!openEdit&&<div>
            <form className=" px-8  border-[2px] border-stone-400 mx-6 max-w-[30rem]"
            onSubmit={(e)=>{
                e.preventDefault()
                Handle_Add(data)
            }}
            >
                            <h1 className=" bg-blue text-lg font-semibold text-center mx-4 my-1 text-white">Add Event</h1>

                <div>
                <p className="mb-2">Name</p>
                <input type="text" className=" rounded-lg outline-none border-[1px] border-blue"
                onChange={(e)=>{
                    setData((prev)=>({...prev,name: e.target.value}))
                }}
                />
                </div>
                <div>
                <p className="mb-2">Event title</p>
                <input type="text" className=" rounded-lg outline-none border-[1px] border-blue"
                onChange={(e)=>{
                    setData((prev)=>({...prev,title: e.target.value}))
                }}
                />
                </div>
                <div>
                <p className="mb-2">Start Date</p>
                <input type="date" className=" rounded-lg outline-none border-[1px] border-blue"
                onChange={(e)=>{
                    setData((prev)=>({...prev,startDate: e.target.value}))
                }}
                />
                </div>
                <div>
                <p className="mb-2">End Date</p>
                <input type="date" className=" rounded-lg outline-none border-[1px] border-blue"
                onChange={(e)=>{
                    setData((prev)=>({...prev,endDate: e.target.value}))
                }}
                />
                </div>
                <div>
                <p className="mb-2">Location</p>
                <input type="text" className=" rounded-lg outline-none border-[1px] border-blue"
                onChange={(e)=>{
                    setData((prev)=>({...prev,location: e.target.value}))
                }}
                />
                </div>

                <button className='mb-8 mt-3 bg-blue text-white font-semibold px-3 py-1'>Submit</button>
            </form>
        </div>}



        {/* edit data  */}
        {openEdit&&!openForm&&<div>
            <form className=" px-8  border-[2px] border-stone-400 mx-6 max-w-[30rem]"
            onSubmit={(e)=>{
                e.preventDefault()
                Handle_Edit(ediData)
            }}
            >
            <h1 className=" bg-blue text-lg font-semibold text-center mx-4 my-1 text-white">Edit Event</h1>
                <div>
                <p className="mb-2">Name</p>
                <input type="text" className=" rounded-lg outline-none border-[1px] border-blue"
                onChange={(e)=>{
                    setEditData((prev)=>({...prev,name: e.target.value}))
                }}
                defaultValue={ediData.name}
                />
                </div>
                <div>
                <p className="mb-2">Event title</p>
                <input type="text" className=" rounded-lg outline-none border-[1px] border-blue"
                onChange={(e)=>{
                    setEditData((prev)=>({...prev,title: e.target.value}))
                }}
                defaultValue={ediData.title}
                />
                </div>
                <div>
                <p className="mb-2">Start Date</p>
                <input type="date" className=" rounded-lg outline-none border-[1px] border-blue"
                onChange={(e)=>{
                    setEditData((prev)=>({...prev,startDate: e.target.value}))
                }}
                // defaultValue={ediData.startDate}
                />
                </div>
                <div>
                <p className="mb-2">End Date</p>
                <input type="date" className=" rounded-lg outline-none border-[1px] border-blue"
                onChange={(e)=>{
                    setEditData((prev)=>({...prev,endDate: e.target.value}))
                }}
                // defaultValue={ediData.endDate}
                />
                </div>
                <div>
                <p className="mb-2">Location</p>
                <input type="text" className=" rounded-lg outline-none border-[1px] border-blue"
                onChange={(e)=>{
                    setEditData((prev)=>({...prev,location: e.target.value}))
                }}
                defaultValue={ediData.location}
                />
                </div>

                <button className='mb-8 mt-3 bg-blue text-white font-semibold px-3 py-1'>Submit</button>
            </form>
        </div>}
      </div>
    );
  };
  