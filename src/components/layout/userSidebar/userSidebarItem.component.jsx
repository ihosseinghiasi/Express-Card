import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/user/userSidebar.css";

const SidebarItem = ({ item }) => {
  const [pageId, setPageId] = useState(localStorage.getItem("pageId"));

  const getnew = () => {
    // localStorage.setItem("pageId", "00113");
    // const pid = localStorage.getItem("pageId");
    // console.log(pid);
  };
  return (
    <Link to={item.link}>
      <div
        className={`sidebar-item ${pageId === item.id ? "defaltSelected" : ""}`}
        style={{ color: "white" }}
      >
        <div className="sidebar-title">
          <img src={item.icon} alt="counter" className="ms-1" />
          <p>{item.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default SidebarItem;
