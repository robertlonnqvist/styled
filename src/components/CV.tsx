import React from "react";
import Container from "./Container";

const keywords = [
  "Java",
  "Javascript/ECMAScript",
  "Typescript",
  "Ruby",
  "Python",
  "Go",

  "NodeJS",
  "HTML",
  "CSS",
  "NPM",
  "jQuery",
  "React",
  "Angular",
  "Webpack",
  "Parcel",

  "Rest",
  "GraphQL",
  "Protobuf",
  "Soap",

  "Spring Boot",
  "Spring Core",
  "Spring MVC",
  "Maven",
  "Gradle",
  "Flyway",
  "JavaEE",
  "Jersey",
  "JAXWS",
  "JSP",
  "JSF",
  "Thymeleaf",
  "SQL",
  "Tomcat",
  "Glassfish",
  "JBOSS/Wildfly",

  "Shell",
  "Bash",
  "Git",
  "SVN",

  "MacOS",
  "Linux",
  "Windows",

  "MySQL",
  "MariaDB",
  "PostgreSQL",
  "SQL Server",
  "Redis",
  "MongoDB",

  "Visual Studio Code",
  "IntelliJ IDEA",
  "VIM",
  "Eclipse",
  "NetBeans",

  "AWS",
  "Azure",
  "Kibana",
  "APM",
  "SonarQube",
  "Kafka",
  "Gitlab",
  "GitlabCI",
  "GitHub",
  "GitHub Actions",
  "Jenkins",
  "ContentFul",
  "Netifly",
  "Docker",
];

const experiences = [
  {
    title: "2020- Tele2 Sverige AB, System Architect",
    body: `System architect and tech lead for six development teams. My role is to
        support the teams with techical decisions and bridge between the
        enterprise architects and the developers making sure we are doing the
        right things.`,
  },
  {
    title: "2019-2020 Svenska Spel AB, Software Developer",
    body: `Software developer part of a small development team refactoring a big
        Java based system. The system was deployed on ~2000 devices accross
        Sweden. The work included modernize the code base and refactor legacy
        code introducing IoC with Spring framework.`,
  },
  {
    title: "2018-2019 Tele2 Sverige AB, Domain Architect",
    body: `Domain architect and responsible for web, self-service and customer
        integrations at TELE2 B2B IT Services. Working with TELE2 online
        channels for self-service for B2B (SME and LE) segments in customer
        projects, IT infrastructure and product management. Project screening
        and solution design.`,
  },
  {
    title: "2017-2018 Tele2 Sverige AB, Solution Architect",
    body: `Architect for online channels and integration services at Tele2 B2B IT
        Services. Working with solutions to migrate and integrate TDC
        application stack onto Tele2 application IT infrastructure. Worked in
        agile projects and end customer projects as well as product management.
        Responsibilities in both design and implementation.`,
  },
  {
    title: "2014-2017 TDC Sverige AB, IT Architect",
    body: `Architect for online channels and integration services in the Nordics.
        Responsible for TDC Nordics web channels and OSS (Operational Service
        Software) applications. Worked in agile projects with product owners and
        product management as well as end customers. Responsibilities in both
        design and implementation.`,
  },
  {
    title: "2007-2014 TDC Sverige AB, System Architect",
    body: `Development lead for TDC's self-service customer portal Nordic TDC
        Service Online. Responsible for a team of 5-10 developers working
        closely towards product managers and product owner. Participated in
        implementation and transition of SCRUM for the development teams.`,
  },
  {
    title: "2006-2007 TDC Song AB, Software Developer",
    body: `Developer for TDC's self-service customer portal Nordic TDC Service
        Online. Member of a development team consisting of 5-10 developers. The
        application consisted of a PHP based application which was migrated to
        Java with Spring MVC.`,
  },
];

const CV = (): JSX.Element => {
  return (
    <Container title="CV" headline="Curriculum vitae">
      <h2 className="text-xl text-blue-400 font-bold mb-3">Technical skills</h2>
      <p className="mb-3">
        <i> {keywords.join(", ")}... and probably more I forgot about :)</i>
      </p>
      <h2 className="text-xl text-blue-400 font-bold mb-3">Experience</h2>
      {experiences.map(({ title, body }, i) => (
        <div key={i}>
          <h3 className="text-lg text-yellow-400 font-bold mb-3">{title}</h3>
          <p className="mb-3">{body}</p>
        </div>
      ))}
    </Container>
  );
};

export default CV;
