import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";




const Sidebar = () => {
  return (
    <ListGroup>
      <Link exact
        className="list-group-item list-group-item-action "
        tag="a"
        to="/"
        action
      >
        Home
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/addcourse"
        exact
        action
      >
        Addcourse
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/allcourse"
        action
        exact
      >
        Allcourses
      </Link>
    </ListGroup>
  );
};

export default Sidebar;
