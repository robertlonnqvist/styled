import { JSX } from "react";
import Container from "./Container";

const keywords = [
  {
    label: "Languages",
    values: ["Java", "TypeScript/JavaScript (ESNext)", "Python", "Ruby", "Go"],
  },

  {
    label: "Frontend",
    values: ["HTML", "CSS", "React", "Angular"],
  },

  {
    label: "Backend",
    values: [
      "Spring Boot/Core/MVC",
      "REST/GraphQL/gRPC/SOAP",
      "Jakarta EE",
      "Tomcat/JBoss/WildFly/GlassFish",
      "Flyway",
      "Jdbi",
    ],
  },

  {
    label: "DevOps/Cloud",
    values: [
      "CI/CD (GitLab CI, GitHub Actions, Jenkins)",
      "Bash/Zsh",
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Docker",
    ],
  },

  {
    label: "Databases",
    values: [
      "PostgreSQL",
      "MySQL/MariaDB/Percona",
      "SQL Server",
      "Redis",
      "MongoDB",
    ],
  },

  {
    label: "Tools/Build",
    values: [
      "Visual Studio Code",
      "IntelliJ IDEA",
      "Vim/NeoVim",
      "Kafka",
      "GitLab",
      "GitHub",
      "Contentful",
      "Netlify",
      "Git",
      "Maven",
      "Gradle",
      "Node.js/NPM",
    ],
  },
  {
    label: "Observability",
    values: ["Kibana", "APM", "SonarQube"],
  },
] as const;

const experiences = [
  {
    title: "2020–Present Tele2 Sverige AB, System Architect",
    body: `System architect and tech lead. My role is to support the teams
        with technical decisions and bridge between the enterprise architects
        and the developers making sure we are doing the right things. During
        my time we migrated the stack from a traditional deployment to a new
        pipeline using Docker and Kubernetes.`,
  },
  {
    title: "2019–2020 Svenska Spel AB, Software Developer",
    body: `Software developer part of a small development team refactoring a big
        Java-based system. The system was deployed on ~2000 devices across
        Sweden. The work included modernizing the codebase and refactoring legacy
        code, introducing IoC with the Spring Framework and improved testability.`,
  },
  {
    title: "2018–2019 Tele2 Sverige AB, Domain Architect",
    body: `Domain architect and responsible for web, self-service and customer
        integrations at Tele2 B2B IT Services. Working with Tele2 online
        channels for self-service for B2B (SME and LE) segments in customer
        projects, IT infrastructure and product management. Project screening
        and solution design.`,
  },
  {
    title: "2017–2018 Tele2 Sverige AB, Solution Architect",
    body: `Architect for online channels and integration services at Tele2 B2B IT
        Services. Working with solutions to migrate and integrate TDC
        application stack onto Tele2 application IT infrastructure. Worked in
        agile projects and end customer projects as well as product management.
        Responsibilities in both design and implementation.`,
  },
  {
    title: "2014–2017 TDC Sverige AB, IT Architect",
    body: `Architect for online channels and integration services in the Nordics.
        Responsible for TDC Nordics web channels and OSS (Operational Service
        Software) applications. Worked in agile projects with product owners and
        product management as well as end customers. Responsibilities in both
        design and implementation.`,
  },
  {
    title: "2007–2014 TDC Sverige AB, System Architect",
    body: `Development lead for TDC's self-service customer portal Nordic TDC
        Service Online. Responsible for a team of 5–10 developers working
        closely with product managers and product owners. Participated in
        implementation and transition of SCRUM for the development teams.`,
  },
  {
    title: "2006–2007 TDC Song AB, Software Developer",
    body: `Developer for TDC's self-service customer portal Nordic TDC Service
        Online. Member of a development team consisting of 5-10 developers. The
        application consisted of a PHP based application which was migrated to
        Java with Spring MVC.`,
  },
] as const;

const Resume = (): JSX.Element => {
  return (
    <Container title="Resume">
      <section className="mb-4">
        <h1 className="text-xl text-blue-400 font-bold mb-2">Summary</h1>
        <p className="mb-0">
          Software developer and architect with deep experience in backend
          platforms, CI/CD, and cloud. Expert in Java/Spring, platform
          modernization, and cross‑team leadership; recently led multiple teams
          to containerized delivery on Docker/Kubernetes, increasing deployment
          frequency and reliability.
        </p>
      </section>
      <h2 className="text-xl text-blue-400 font-bold mb-3">Technical skills</h2>
      <div className="mb-3">
        {keywords.map(({ label, values }) => (
          <div className="mb-3" key={label}>
            <strong>{label}</strong>
            <div>
              <i>{values.join(", ")}</i>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-xl text-blue-400 font-bold mb-3">Experience</h2>
      {experiences.map(({ title, body }) => (
        <div key={title}>
          <h3 className="text-lg font-bold mb-3">{title}</h3>
          <p className="mb-3">{body}</p>
        </div>
      ))}
    </Container>
  );
};

export default Resume;
