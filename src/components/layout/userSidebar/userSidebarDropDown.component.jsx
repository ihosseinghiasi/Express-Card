import Accordion from "react-bootstrap/Accordion";
import DropDownItem from "./dropDownItem.component";
const SidebarDropDown = ({ item }) => {
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
              background-color: rgb(46, 0, 36);
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
         background-color: rgb(46, 0, 36);
         }

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
              <DropDownItem
                index={index}
                link={link.link}
                icon={link.icon}
                title={link.title}
                id={link.id}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default SidebarDropDown;
