import SidebarItem from "../sidebarItem/userSidebarItem.component";
import SidebarDropDown from "../sidebarItem/userSidebarDropDown.component";
import { items } from "./data/sidebarItems";
import "../../../css/user/userSidebar.css";

const AdminSidebar = () => {
  return (
    <div>
      <div className="sidebar col-2">
        <div className="sidebarPicture"></div>
        {items.map((item, index) =>
          item.link ? (
            <SidebarItem key={index} item={item} />
          ) : (
            <SidebarDropDown key={index} item={item} />
          )
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
