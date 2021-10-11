import React,{useEffect,useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios"
import base_url from "../api/Url";
import { toast } from "react-toastify";
const Addcourse = () => {
  const [course, setcourse] = useState({})
  //handle submit
   const Handleform=(event)=>{
     console.log(course)
     event.preventDefault()
     submitfillup(course);
   }
  useEffect(() => {
    document.title="addcourse"
    
  }, [])
  const submitfillup=(data)=>{
    axios.post(`${base_url}/courses`,data)
    .then ((response)=>{
        console.log(response)
        
        toast.success("Done")
        setcourse(response.data)
    }).catch((error)=>{
        console.log(error)
        toast.error("worng")
    })
}
  return (
    <div>
      <h1 className="text-center my-3"> Fill the Course</h1>
      <Form onSubmit={Handleform}  >
        <FormGroup>
          <label htmlFor="userId"> Course Id</label>
          <Input
            type="text"
            placeholder="Enter Here"
            name="userId"
            id="userId"
            onChange={(event)=>{
              setcourse({...course,id:event.target.value})
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="title"> Course Title</label>
          <Input
            type="text"
            placeholder="Enter the title"
            name="title"
            id="title"
            onChange={(event)=>{
              setcourse({...course,title:event.target.value})
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="description"> Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter Description Here"
            name="description"
            id="description"
            onChange={(event)=>{
              setcourse({...course,description:event.target.value})
            }}
            style={{ height: 150 }}
          ></Input>
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">Add Button</Button>
          <Button color="warning " type="reset" style={{marginLeft:20}}>Clear</Button>
        </Container>
      </Form>
    </div>
  );
};

export default Addcourse;
