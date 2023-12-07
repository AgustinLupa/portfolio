import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import flutterApp from "../assets/projects/flutterApp.jpg";
import image from "../assets/projects/image.png";
import candys from "../assets/projects/candys.jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="ERP System"
              description="Experience the future of enterprise management with our advanced ERP system currently in development. This innovative solution seamlessly integrates the dynamic capabilities of React and Bootstrap on the frontend, providing a user-friendly interface. Meanwhile, the backend is powered by the robust performance of .NET 7 and the reliability of MySQL, ensuring efficient data management and business processes. In summary, our ERP system merges innovation and reliability, poised to elevate and streamline your business operations."
              ghLink="https://github.com/AgustinLupa/ERP_WEB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutterApp}
              isBlog={false}
              title="GlubApp"
              description="Explore our aircraft management solution, a Flutter application seamlessly integrated with a robust .NET backend. This user-friendly app offers a streamlined experience for overseeing and organizing aircraft data efficiently. The visually appealing Flutter frontend ensures a responsive interface, while the .NET backend handles the intricacies of aircraft management, from maintenance schedules to flight logs. Whether you're managing a small fleet or a large aviation operation, our app is designed to meet your aircraft management needs with precision and ease."
              ghLink="https://github.com/AgustinLupa/GlubApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={candys}
              isBlog={false}
              title="Candy Supplier"
              description="Experience a simple and efficient way to manage candy providers with our console application built on .NET. This command-line tool allows you to perform basic CRUD operations seamlessly, enabling you to add, view, modify, and delete candy supplier information directly from the console. Whether you're a candy shop owner or just a sweet enthusiast, our .NET console app makes candy provider management straightforward and hassle-free."
              ghLink="https://github.com/AgustinLupa/SweetsSupplier"
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects