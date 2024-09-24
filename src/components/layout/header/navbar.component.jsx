import "../../../css/shop/navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
// import { getAuthenticatedUser } from "../../../services/authenticatedUserServices";

const NavbarComponent = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [person, setPerson] = useState();
  const [fullName, setFullName] = useState();
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      if (cookies.comercial) {
        // const user = await getAuthenticatedUser();
        await axios
          .post("http://localhost:4000/", {}, { withCredentials: true })
          .then((res) => {
            setPerson(res.data.person);
            setUserAuthenticated(res.data.status);
          });
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (person) setFullName(`${person?.firstName} ${person?.lastName}`);
  }, [person]);

  function userLogin() {
    localStorage.setItem("userType", "user");
  }

  function adminLogin() {
    localStorage.setItem("userType", "admin");
  }

  const logOut = (e) => {
    // e.preventDefault();
    localStorage.clear();
    removeCookie("comercial");
    navigate("/");
  };
  return (
    <div>
      {userAuthenticated ? (
        <nav className="navbar navbar-expand-sm sticky-top navColor" dir="rtl">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav me-5">
                <li className="nav-item mx-2 my-3">
                  <Link className="nav-link text-light" to="/">
                    صفحه اصلی
                  </Link>
                </li>
                <li className="nav-item dropdown mx-2 my-3" dir="rtl">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    role="button"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    دسته بندی ها{" "}
                  </Link>
                  <ul className="dropdown-menu dropdownMenu">
                    <li>
                      <Link></Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="navbar-nav me-auto me-5">
                <li className="nav-item ms-3">
                  {userType === "user" ? (
                    <Link
                      className="nav-link text-info navUser"
                      to="/user/counter"
                    >
                      {fullName}
                    </Link>
                  ) : (
                    <Link
                      className="nav-link text-info navUser"
                      to="/admin/counter"
                    >
                      {fullName}
                    </Link>
                  )}
                </li>

                <li className="nav-item ms-3">
                  <Link
                    onClick={(e) => logOut(e)}
                    className="nav-link text-light"
                  >
                    خروج
                  </Link>
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
      ) : (
        <nav className="navbar navbar-expand-sm sticky-top navColor" dir="rtl">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav me-5">
                <li className="nav-item mx-2 my-3">
                  <Link className="nav-link text-light" to="/">
                    صفحه اصلی
                  </Link>
                </li>
                <li className="nav-item dropdown mx-2 my-3" dir="rtl">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    role="button"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    دسته بندی ها
                  </Link>
                  <ul className="dropdown-menu dropdownMenu">
                    <li>
                      <Link></Link>
                    </li>
                  </ul>
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
