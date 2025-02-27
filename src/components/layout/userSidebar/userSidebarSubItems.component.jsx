import Accordion from "react-bootstrap/Accordion";

const SidebarSubItems = ({ item }) => {
  return (
    <>
      <style type="text/css">
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
            color: beige;
            background-color:  rgb(59, 9, 51);
            border: 0px;
         }

         .accordion-button:focus {
            box-shadow: none;
            background-color:  rgb(59, 9, 51);
            color: gray;
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
          <Accordion.Body>Loremum.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default SidebarSubItems;
