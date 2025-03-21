import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/user/userSidebar.css";

const SidebarItem = ({ item }) => {
  const [pageId, setPageId] = useState(localStorage.getItem("pageId"));

  const setID = () => {
    localStorage.setItem("pageId", item.id);
    const id = localStorage.getItem("pageId");
    console.log(id);
    window.location.reload()
  };

  return (
    <Link to={item.link}>
      <div
        className={`sidebar-item ${
          pageId === item.id ? "defaltSelectedItem" : ""
        }`}
        style={{ color: "white" }}
        onClick={setID}
      >
        <div className="sidebar-title">
          <img src={item.icon} alt="sidebar-item" className="ms-1" />
          <p>{item.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default SidebarItem;
