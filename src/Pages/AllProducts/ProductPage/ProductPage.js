import React, { useState } from 'react';
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import Navigation from '../../Home/Navigation/Navigation';
import AllProduct from '../AllProducts.js/AllProduct';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import RegularProduct from '../RegularProduct/RegularProduct';
import TopProduct from '../TopProduct/TopProduct';

const ProductPage = () => {
 const [key, setKey] = useState("home");
    return (
      <div>
        <Navigation></Navigation>
        <div style={{}}
          className="mt-5 p-5">
          
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={2}>
                <Nav variant="tabs" className="flex-column">
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
                  <Nav.Item>
                    <Nav.Link role="button" eventKey="fourth">
                      All Items
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
                  <Tab.Pane eventKey="fourth">
                    <AllProduct></AllProduct>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
};

export default ProductPage;