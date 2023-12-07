import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
        Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/AgustinLupa"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>                  
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/agustin-luparini-242ab51b7/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>                  
        </ul>
      </Col>
    </Row>
  </Container>
  )
}

export default Social