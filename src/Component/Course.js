import React,{useEffect} from "react";
import base_url from "../api/Url";

import axios from "axios"
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";

const Course = ({ course,actionby }) => {
  useEffect(() => {
    document.title="course"
    
  }, [])
  const deletecourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`,)
    .then ((response)=>{
        console.log(response)
        
        toast.success("Done")
        actionby(id)
        
    }).catch((error)=>{
        console.log(error)
        toast.error("worng")
    })
 return(
    <div>
      <Card className="text-center">
        <CardBody>
          <CardSubtitle style={{ fontSize: "23px" }}>
            {course.title}
          </CardSubtitle>
          <CardText> {course.discription}</CardText>
          <Container>
            <Button color="danger" onClick={()=>{
              deletecourse(course.id)
            }}>Delete</Button>
            <Button color="warning" style={{ marginLeft: "15px" }}>
              Update
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}
};

export default Course;
