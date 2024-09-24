import "../../../css/user/userSidebar.css";
import SidebarItem from "./userSidebarItem.component";
import { items } from "./data/sidebarItems";

const UserSidebar = () => {
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

export default UserSidebar;
