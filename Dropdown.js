import Dropdown from 'react-bootstrap/Dropdown';

function Terms() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <route>
        <Dropdown.Item url="https://www.fifa.com/legal/documents">Condition</Dropdown.Item>
        <Dropdown.Item url="https://legalportal.fifa.com/home">Privacy</Dropdown.Item>
        </route>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Terms;