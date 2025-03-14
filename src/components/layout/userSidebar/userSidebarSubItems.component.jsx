import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const SidebarSubItems = ({ item }) => {
  return (
    <>
      <style type="text/css">
        {`
          .accordion-item {
            color: white;
            border: 0px;
          }
          
            .accordion-button {
              height: 50px;
              color: white;
              background-color: rgb(26, 2, 20);
              border: 0px;
          }

          .accordion-button:hover {
              background-color: rgb(26, 20, 20);
          }

          .accordion-button:focus {
              box-shadow: none;
              background-color: rgb(26, 2, 20);
              color: white;
            }

              .accordion-button:not(:hover) {
              box-shadow: none;
              background-color: rgb(26, 2, 20);
              color: white;
            }

         .accordion-body {
         background-color: rgb(59, 19, 61)}

    `}
      </style>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img src={item.icon} alt="ticketIcon" className="ms-1" />
            <p className="ms-2">{item.title}</p>
          </Accordion.Header>
          <Accordion.Body>
            {item.links.map((link, index) => (
              <Link key={index} to={link.link}>
                <div className="sidebar-subItem">
                  <div className="sidbar-subIcon">
                    <img src={link.icon} alt="subItem" />
                  </div>
                  <div className="sidebar-subTitle">
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
