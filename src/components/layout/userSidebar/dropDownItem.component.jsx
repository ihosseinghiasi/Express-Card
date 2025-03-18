import { Link } from "react-router-dom";

const DropDownItem = (props, index) => {
  const setID = () => {
    console.log(props.id);
  };
  return (
    <div>
      <Link key={index} to={props.link}>
        <div className="sidebar-subItem" onSubmit={setID}>
          <div className="sidbar-subIcon">
            <img src={props.icon} alt="subItem" />
          </div>
          <div className="sidebar-subTitle">
            <p>{props.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DropDownItem;
