import { useState } from "react";
import { Link } from "react-router-dom";

const DropDownItem = (props, index) => {
  const [pageId, setPageId] = useState(localStorage.getItem("pageId"));

  const setID = () => {
    localStorage.setItem("pageId", props.id);
    localStorage.setItem("eventKey", "20");
  };
  
  return (
    <div>
      <Link key={index} to={props.link}>
        <div
          className={`sidebar-subItem ${
            pageId === props.id ? "defaltSelectedSubItem" : ""
          }`}
          onClick={setID}
        >
          <div className="sidbar-subIcon">
            <img src={props.icon} alt="subItem" />
          </div>
          <div className="sidebar-subTitle">
            <p>{props.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DropDownItem;
