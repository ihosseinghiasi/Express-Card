import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  return (
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
