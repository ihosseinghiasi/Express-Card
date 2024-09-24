import Header from "./header/userPanelNavbar.component";
import UserSidebar from "./userSidebar/userSidebar.component";
const UserPanelLayoutComponent = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <UserSidebar />
      {children}
    </div>
  );
};

export default UserPanelLayoutComponent;
