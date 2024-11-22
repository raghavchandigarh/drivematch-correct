// src/components/SearchBar.js
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <section className="search-bar-section py-4">
      <Container>
        <Form className="row g-3 bg-light p-4 rounded shadow">
          <Col md={3}>
            <Form.Label visuallyHidden>Location</Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-white border-0">📍</InputGroup.Text>
              <Form.Control
                type="text"
                id="location"
                placeholder="Where to?"
              />
            </InputGroup>
          </Col>

          <Col md={3}>
            <Form.Label visuallyHidden>Vehicle Type</Form.Label>
            <Form.Select id="vehicle-type">
              <option value="">Select Vehicle Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="electric">Electric</option>
              <option value="van">Van</option>
              <option value="luxury">Luxury</option>
            </Form.Select>
          </Col>

          <Col md={3}>
            <Form.Label visuallyHidden>Pick-up</Form.Label>
            <Form.Control
              type="date"
              id="pickup"
              placeholder="Pick-up"
            />
          </Col>

          <Col md={3}>
            <Form.Label visuallyHidden>Return</Form.Label>
            <Form.Control
              type="date"
              id="return"
              placeholder="Return"
            />
          </Col>

          <Col xs={12} className="text-center">
            <Button
              href="/search"
              className="px-4 py-2"
              style={{
                background: 'linear-gradient(90deg, #ff8a80, #c14311)',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none'
              }}
            >
              Search
            </Button>
          </Col>
        </Form>
      </Container>
    </section>
  );
};

export default SearchBar;

