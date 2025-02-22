import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import "../../../css/shop/navbar.css";

// const items = [
//   {
//     key: "1",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         2nd menu item (disabled)
//       </a>
//     ),
//     icon: <SmileOutlined />,
//     disabled: true,
//   },
//   {
//     key: "3",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.luohanacademy.com"
//       >
//         3rd menu item (disabled)
//       </a>
//     ),
//     disabled: true,
//   },
//   {
//     key: "4",
//     danger: true,
//     label: "a danger item",
//   },
// ];

const NavbarComponent = () => {
  const [person, setPerson] = useState("");
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [anchorTemp, setAnchrTemp] = useState();

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
    setAnchrTemp(event.currentTarget);
    setOpen(true);
  }

  function handleClose() {
    setAnchorEl(null);
    setOpen(false);
  }

  function handleMenu() {
    setAnchorEl(anchorTemp);
    setOpen(true);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken < currentTime) {
        logOut();
      }
      setPerson(localStorage.getItem("authenticatedFullName"));
    }
  }, []);

  useEffect(() => {
    if (person) {
      setUserAuthenticated(true);
    }
  }, [person]);

  function userLogin() {
    localStorage.setItem("userType", "user");
  }

  function adminLogin() {
    localStorage.setItem("userType", "admin");
  }

  const logOut = () => {
    Cookies.remove("commercial");
    localStorage.removeItem("userType");
    localStorage.removeItem("authenticatedFullName");
    localStorage.removeItem("authenticatedId");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      {userAuthenticated ? (
        <>gfg</>
      ) : (
        // <nav className="navbar navbar-expand-sm sticky-top navColor" dir="rtl">
        //   <div className="container-fluid">
        //     <div className="collapse navbar-collapse" id="collapsibleNavbar">
        //       <ul className="navbar-nav me-5">
        //         <li className="nav-item mx-2 my-3">
        //           <Link className="nav-link text-light" to="/">
        //             صفحه اصلی
        //           </Link>
        //         </li>
        //         <li className="nav-item dropdown mx-2 my-3" dir="rtl">
        //           <Link
        //             className="nav-link dropdown-toggle text-light"
        //             role="button"
        //             data-bs-toggle="dropdown"
        //             href="#"
        //           >
        //             دسته بندی ها{" "}
        //           </Link>
        //           <ul className="dropdown-menu dropdownMenu">
        //             <li>
        //               <Link></Link>
        //             </li>
        //           </ul>
        //         </li>
        //       </ul>

        //       <ul className="navbar-nav me-auto me-5">
        //         <li className="nav-item ms-3">
        //           {userType === "user" ? (
        //             <Link
        //               className="nav-link text-info navUser"
        //               to="/user/counter"
        //             >
        //               {person}
        //             </Link>
        //           ) : (
        //             <Link
        //               className="nav-link text-info navUser"
        //               to="/admin/counter"
        //             >
        //               {person}
        //             </Link>
        //           )}
        //         </li>

        //         <li className="nav-item ms-3">
        //           <Link
        //             onClick={() => logOut()}
        //             className="nav-link text-light"
        //             reloadDocument
        //           >
        //             خروج
        //           </Link>
        //         </li>
        //         <li className="nav-item ms-5">
        //           <button className="callButton">
        //             <a href="/" className="nav-link linkCallToMe text-light">
        //               تماس با ما
        //             </a>
        //           </button>
        //         </li>
        //       </ul>
        //     </div>
        //   </div>
        // </nav>
        <nav className="navbar navbar-expand-sm sticky-top navColor" dir="rtl">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav me-5">
                <li className="nav-item mx-2 my-3">
                  <Link className="nav-link text-light" to="/">
                    صفحه اصلی
                  </Link>
                </li>
                <li className="nav-item mx-2 my-3">
                  <Link
                    className="nav-link text-light"
                    to="/login"
                    onClick={userLogin}
                  >
                    پنل کاربر
                  </Link>
                </li>
                <li className="nav-item mx-2 my-3">
                  <Link
                    className="nav-link text-light"
                    to="/login"
                    onClick={adminLogin}
                  >
                    پنل مدیر
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav me-auto me-5">
                <li className="nav-item ms-3">
                  <Link to="/smsForm" className="nav-link text-light">
                    <img src={"/uploads/icons/user.svg"} alt="icon" />
                  </Link>
                </li>
                <li className="nav-item ms-3">
                  <Link href="" className="nav-link text-light"></Link>
                </li>
                <li className="nav-item ms-5">
                  <button className="callButton">
                    <a href="/" className="nav-link linkCallToMe text-light">
                      تماس با ما
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavbarComponent;
