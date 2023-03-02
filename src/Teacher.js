//1. Import area

import { useEffect, useState } from "react";

//2. Function definition area
function Teacher() {
  //2.1 Hooks Area
  const[teachers,setTeachers]= useState([
                                          {
                                            id:1,
                                            first_name:"Devanand",
                                            Created_At:'15/12/2023'
                                          },
                                          {
                                            id:2,
                                            first_name:"Vipin",
                                            Created_At:'15/12/2023'
                                          }
                                        ])

      //I want to call API after component render/page load.
  //useEffect(cbfn,arr)
  // Every Hook is a function
  useEffect(()=>{
    //whatever i will write here, excutes after component render.
    fetch(`http://localhost:1337/api/teachers`)
    .then((res)=>{  // This then Make Json data readable
      return res.json();
    })
    .then((data)=>{
      console.log(data.data)
      let new_array_of_obj= data.data.map((cv,idx,arr)=>{
        return{
                id:cv.id,
                first_name:cv.attributes.name,
                Created_At:cv.attributes.Created_At
              }
            
      });
      setTeachers(new_array_of_obj);
    })
    .catch(()=>{})
  }) 
  
  //2.2 Function definition area
  //2.3 Return statement
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <br />
        <hr /><hr /><br />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First_Name</th>
              <th scope="col">Created_At</th>
            </tr>
          </thead>
          <tbody>
          {
            teachers.map((cv,idx,arr)=>{
            return  <tr>
                      <td>{cv.id}</td>
                      <td>{cv.first_name}</td>
                      <td>{cv.Created_At}</td>
                    </tr>
          })
          }
          
          </tbody>
                </table>



      </div> 
    </>
     
  );
}

export default Teacher;
