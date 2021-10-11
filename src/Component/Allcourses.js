import React, { useState,useEffect } from "react";
import base_url from "../api/Url";
import Course from "./Course";
import axios from "axios"
import { toast } from "react-toastify";
const Allcourses = () => {
    useEffect(() => {
      document.title="allcourse"
      allcoursetoserver();
    }, [])

    const allcoursetoserver=()=>{
        axios.get(`${base_url}/courses`)
        .then ((response)=>{
            console.log(response)
            toast.success("Done")
            setCourses(response.data)
        }).catch((error)=>{
            console.log(error)
            toast.error("worng")
        })
    }
  const [courses, setCourses] = useState([
    
  ]);
  const courseremoveid= (id) => {
      setCourses(courses.filter((c)=>c.id!=id

      ))

  }
  return (
    <div>
      <h1 className="text-center">All course</h1>
      <p  className="text-center">List of courses are as flllow</p>
      {courses.length > 0
        ? courses.map((item) => <Course course={item} actionby={courseremoveid} />)
        : "No courses are yet"}
    </div>
  );
};

export default Allcourses;
