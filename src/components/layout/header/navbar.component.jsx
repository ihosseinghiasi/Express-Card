import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { getCategories } from "../../../services/adminPanel/category.services";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import "../../../css/shop/navbar.css";

const NavbarComponent = () => {
  const [person, setPerson] = useState("");
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const getAllCategories = async () => {
    await getCategories().then((res) => {
      setCategories(res.data);
    });
  };

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
    getAllCategories();
  }, []);

  useEffect(() => {
    if (person) {
      setUserAuthenticated(true);
    }
  }, [person]);

  const userLogin = () => {
    localStorage.setItem("userType", "user");
  };

  const adminLogin = () => {
    localStorage.setItem("userType", "admin");
  };

  const logOut = () => {
    Cookies.remove("commercial");
    localStorage.removeItem("userType");
    localStorage.removeItem("authenticatedFullName");
    localStorage.removeItem("authenticatedId");
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <style type="text/css">
        {`
        #basic-nav-dropdown {
          color: white;
        }
      `}
      </style>

      {userAuthenticated ? (
        <Navbar expand="sm" fixed="top" className="navbar navColor">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" className="link-color me-5">
                صفحه اصلی
              </Nav.Link>
              <NavDropdown
                title="دسته بندی ها  "
                id="basic-nav-dropdown"
                menuVariant="dark"
                className="dropdown-hover me-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                show={dropdownOpen}
              >
                {categories.map((category) => (
                  <NavDropdown.Item
                    as={Link}
                    to={`/${category.categoryName}/${category._id}`}
                  >
                    {category.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
