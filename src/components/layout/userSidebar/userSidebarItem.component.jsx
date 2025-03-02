import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const [pageId, setPageId] = useState(localStorage.getItem("pageId"));
  useEffect(() => {
    localStorage.setItem("pageId", "00");
    const pid = localStorage.getItem("pageId");
    console.log(pid);
  }, []);

  const getnew = () => {
    localStorage.setItem("pageId", "00113");
    const pid = localStorage.getItem("pageId");
    console.log(pid);
  };
  return pageId === item.id ? (
    <Link to={item.link} style={{ color: "red" }} onClick={getnew}>
      <div className={"sidebar-item"}>
        <div className="sidebar-title">
          <img src={item.icon} alt="counter" className="ms-1" />
          <p>{item.title}</p>
        </div>
      </div>
    </Link>
  ) : (
    <Link to={item.link} style={{ color: "white" }}>
      <div className={"sidebar-item"}>
        <div className="sidebar-title">
          <img src={item.icon} alt="counter" className="ms-1" />
          <p>{item.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default SidebarItem;
