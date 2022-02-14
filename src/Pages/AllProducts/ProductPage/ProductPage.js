import React, { useState } from 'react';
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import HomePageProduct from '../HomPageProduct/HomePageProduct';
import ProductCard from '../ProductCard/ProductCard';
import RegularProduct from '../RegularProduct/RegularProduct';
import TopProduct from '../TopProduct/TopProduct';

const ProductPage = () => {
 const [key, setKey] = useState("home");
    return (
      <div className="p-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant='tabs'  className="flex-column">
                <Nav.Item>
                  <Nav.Link role="button" eventKey="first">
                    Regular
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link role="button" eventKey="second">
                    Top
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link role="button" eventKey="third">
                    Featured
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <RegularProduct></RegularProduct>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <TopProduct></TopProduct>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <FeaturedProduct></FeaturedProduct>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
};

export default ProductPage;