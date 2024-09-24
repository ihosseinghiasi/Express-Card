import "../../../css/admin/adminSidebar.css";
import SidebarItem from "./adminSidebarItem.component";
import { items } from "./data/sidebarItems";

const AdminSidebar = () => {
  return (
    <div>
      <div className="sidebar col-2">
        <div className="sidebarPicture"></div>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;