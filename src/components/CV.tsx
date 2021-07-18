import React from "react";
import Nav from "./Nav";

const CV = (): JSX.Element => {
  return (
    <div className="container">
      <Nav active="cv" />
      <h1>Curriculum vitae</h1>
      <h2>Techical skills</h2>
      <p>
        <i>
          Java, Javascript, Typescript, NodeJS, HTML, CSS, NPM, jQuery, React,
          Angular, Webpack, Maven, Gradle, Spring Core, Spring MVC, Spring Boot,
          Shell, Bash, Ruby, Python, Flyway, Jersey, REST, JAXWS, SOAP, JavaEE,
          JSP, Thymeleaf, SQL, Tomcat, Glassfish, JBOSS/Wildfly, MacOS, Linux,
          Windows, Mysql, MariaDB, SQL Server, Redis, MongoDB, Visual Studio
          Code, IntelliJ IDEA, VIM, Eclipse, NetBeans, AWS, Kibana, APM
          (Application Performance Monitoring), SonarQube, Kafka, Gitlab,
          GitlabCI, Docker, Jenkins, Git, SVN... and probably more I forgot
          about :)
        </i>
      </p>
      <h2>Experience</h2>
      <h3>2020- Tele2 Svering AB, System Architect</h3>
      <p>
        System architect and tech lead for six development teams. My role is to
        support the teams with techical decisions and bridge between the
        enterprise architects and the developers making sure we are doing the
        right things.
      </p>
      <h3>2019-2020 Svenska Spel AB, Software Developer</h3>
      <p>
        Software developer part of a small development team refactoring a big
        Java based system. The system was deployed on ~2000 devices accross
        Sweden. The work included modernize the code base and refactor legacy
        code introducing IoC with Spring framework.
      </p>
      <h3>2018-2019 Tele2 Sverige AB, Domain Architect</h3>
      <p>
        Domain architect and responsible for web, self-service and customer
        integrations at TELE2 B2B IT Services. Working with TELE2 online
        channels for self-service for B2B (SME and LE) segments in customer
        projects, IT infrastructure and product management. Project screening
        and solution design.
      </p>
      <h3>2017-2018 Tele2 Sverige AB, Solution Architect</h3>
      <p>
        Architect for online channels and integration services at Tele2 B2B IT
        Services. Working with solutions to migrate and integrate TDC
        application stack onto Tele2 application IT infrastructure. Worked in
        agile projects and end customer projects as well as product management.
        Responsibilities in both design and implementation.
      </p>
      <h3>2014-2017 TDC Sverige AB, IT Architect</h3>
      <p>
        Architect for online channels and integration services in the Nordics.
        Responsible for TDC Nordics web channels and OSS (Operational Service
        Software) applications. Worked in agile projects with product owners and
        product management as well as end customers. Responsibilities in both
        design and implementation.
      </p>
      <h3>2007-2014 TDC Sverige AB, System Architect</h3>
      <p>
        Development lead for TDC's self-service customer portal Nordic TDC
        Service Online. Responsible for a team of 5-10 developers working
        closely towards product managers and product owner. Participated in
        implementation and transition of SCRUM for the development teams.
      </p>
      <h3>2006-2007 TDC Song AB, Software Developer</h3>
      <p>
        Developer for TDC's self-service customer portal Nordic TDC Service
        Online. Member of a development team consisting of 5-10 developers. The
        application consisted of a PHP based application which was migrated to
        Java with Spring MVC.
      </p>
    </div>
  );
};

export default CV;