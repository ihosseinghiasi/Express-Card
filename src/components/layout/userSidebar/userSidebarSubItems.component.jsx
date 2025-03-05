import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const SidebarSubItems = ({ item }) => {
  return (
    <>
      {/* <style type="text/css">
        {`
          .accordion-item {
            color: beige;
            background-color: rgb(0,0,0);
            border: 0px;
          }
          .accordion-button {
            height: 50px;
            color: beige;
            background-color: rgb(26, 2, 20);
            border: 0px;
         }

         .accordion-button:hover {
            background-color: rgb(59, 9, 51);
         }

         .accordion-button:focus {
            box-shadow: none;
            background-color: rgb(59, 9, 51);
            color: gray;
          }

            .accordion-button:not(:active) {
            box-shadow: none;
            background-color: rgb(59, 9, 51);
            color: gray;
          }

         .accordion-body {
         background-color: rgb(59, 19, 61)}

    `}
      </style> */}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img src={item.icon} alt="ticketIcon" className="ms-1" />
            <p className="ms-2">{item.title}</p>
          </Accordion.Header>
          <Accordion.Body>
            {item.links.map((link, index) => (
              <Link to={link.link} style={{ color: "white" }}>
                <div className="sidebar-subItem">
                  <div className="sidebar-subTitle">
                    <img src={link.icon} alt="counter" className="ms-1" />
                    <p>{link.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default SidebarSubItems;
