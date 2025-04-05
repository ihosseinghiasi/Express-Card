import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { getCategories } from "../../../services/adminPanel/category.services";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import "../../../css/shop/navbar.css";

const NavbarComponent = () => {
  const [person, setPerson] = useState("");
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const [panelsDropdown, setPanelsDropdown] = useState(false);
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
    localStorage.removeItem("token");
    userType === "user"
      ? localStorage.removeItem("userAuthenticatedId")
      : localStorage.removeItem("adminAuthenticatedId");
    navigate("/");
  };

  const categoriesMouseEnter = () => {
    setCategoriesDropdown(true);
  };

  const categoriesMouseLeave = () => {
    setCategoriesDropdown(false);
  };

  const panelsMouseEnter = () => {
    setPanelsDropdown(true);
  };

  const panelsMouseLeave = () => {
    setPanelsDropdown(false);
  };

  return (
    <div>
      <style type="text/css">
        {`
          #nav-dropdown {
            color: white;
          }
          
          #user-nav-dropdown {
            color: #663399;
            font-size: 0.9em;
            font-weight: bold;
          }
      `}
      </style>

      {userAuthenticated ? (
        <Navbar expand="sm" fixed="top" className="navColor">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="link-color me-5">
                  صفحه اصلی
                </Nav.Link>
                <NavDropdown
                  title="دسته بندی ها  "
                  id="nav-dropdown"
                  menuVariant="dark"
                  className="dropdown-hover me-4"
                  onMouseEnter={categoriesMouseEnter}
                  onMouseLeave={categoriesMouseLeave}
                  show={categoriesDropdown}
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
              <Nav className="me-auto">
                <NavDropdown
                  title={person + " "}
                  id="user-nav-dropdown"
                  menuVariant="dark"
                  className="dropdown-hover ms-5"
                >
                  {userType && userType === "user" ? (
                    <NavDropdown.Item
                      as={Link}
                      to={`/user/counter`}
                      className="d-flex end"
                    >
                      ناحبه کاربری
                    </NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item
                      as={Link}
                      to={`/admin/counter`}
                      className="d-flex end"
                    >
                      ناحبه کاربری
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item
                    as={Link}
                    to="/"
                    onClick={logOut}
                    className="d-flex end"
                  >
                    خروج
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/" className="ms-5 link-color">
                  تماس با ما
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar expand="sm" fixed="top" className="navColor">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="link-color me-5">
                  صفحه اصلی
                </Nav.Link>
                <NavDropdown
                  title="دسته بندی ها  "
                  id="nav-dropdown"
                  menuVariant="dark"
                  className="dropdown-hover me-4"
                  onMouseEnter={categoriesMouseEnter}
                  onMouseLeave={categoriesMouseLeave}
                  show={categoriesDropdown}
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
                <NavDropdown
                  title="ناحبه های کاربری "
                  id="nav-dropdown"
                  menuVariant="dark"
                  className="dropdown-hover me-4"
                  onMouseEnter={panelsMouseEnter}
                  onMouseLeave={panelsMouseLeave}
                  show={panelsDropdown}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/login"
                    className="d-flex end"
                    onClick={userLogin}
                  >
                    ناحبه کاربر
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/login"
                    className="d-flex end"
                    onClick={adminLogin}
                  >
                    ناحبه مدیر
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/smsForm" className="ms-4 link-color">
                  <img src={"/uploads/icons/user.svg"} alt="icon" />
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="ms-5 link-color">
                  تماس با ما
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default NavbarComponent;
