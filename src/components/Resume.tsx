import { JSX } from "react";

const keywords = [
  {
    label: "Programming Languages",
    values: [
      "Java",
      "JavaScript/ECMAScript",
      "TypeScript",
      "Rust",
      "Python",
      "Ruby",
      "Go",
    ],
  },
  {
    label: "Backend & Integration",
    values: [
      "Spring Boot/Core/MVC",
      "Jakarta EE",
      "REST/GraphQL/gRPC/SOAP",
      "Kafka",
      "Flyway",
      "Jdbi",
      "Tomcat/JBoss/WildFly/GlassFish",
    ],
  },
  {
    label: "Frontend",
    values: ["React", "Angular", "HTML", "CSS"],
  },
  {
    label: "Cloud & DevOps",
    values: [
      "Azure (AKS, APIM)",
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Bicep/ARM",
      "GitOps",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
      "Azure Pipelines",
      "GitLab CI",
    ],
  },
  {
    label: "Security & Identity",
    values: [
      "Microsoft Entra ID",
      "Keycloak",
      "Curity",
      "OAuth 2.0",
      "OpenID Connect",
      "SAML 2.0",
      "Managed Identities",
      "Key Vault",
    ],
  },
  {
    label: "Data & Observability",
    values: [
      "PostgreSQL",
      "MySQL/MariaDB/Percona",
      "SQL Server",
      "Redis",
      "MongoDB",
      "APM",
      "Kibana",
      "SonarQube",
    ],
  },
  {
    label: "Tools & Practices",
    values: [
      "IntelliJ IDEA",
      "Visual Studio Code",
      "Maven",
      "Gradle",
      "Node.js/NPM",
      "Agile",
      "Scrum",
      "Kanban",
      "Enterprise architecture alignment",
    ],
  },
  {
    label: "AI & Machine Learning",
    values: [
      "GitHub Copilot",
      "Claude Code",
      "Google Gemini",
      "AI-assisted software development",
      "Applied AI/ML exploration",
    ],
  },
] as const;

const experiences = [
  {
    title: "2026-present · SEB Kort Bank AB - Tech Lead",
    body: `IAM team responsible for authentication, authorization, and signing for SEB Kort customers
     across Europe. Collaborate as a core member of the SEB IAM unit to provide enterprise-grade
    shared identity and access services across the broader organization.`,
    technologies: [
      "Java",
      "Spring Boot",
      "Rust",
      "React",
      "TypeScript",
      "Kafka",
      "Kubernetes",
      "Azure",
      "Google Cloud",
      "Entra ID",
      "Keycloak",
      "Curity",
      "CI/CD",
      "Github Copilot",
    ],
  },
  {
    title: "2020-2026 · Tele2 Sverige AB - System Architect",
    body: `Support teams with technical decision-making and bridge enterprise
      architecture and software delivery. Drive architectural alignment and
      technical quality across teams, establishing patterns for scalable,
      maintainable solutions. Work with a hybrid microservices platform across
      Azure AKS and on-premises Kubernetes, GitOps-based promotions, CI/CD, and
      centralized observability/APM. Azure services use Entra ID; on-premises
      applications use Keycloak.`,
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Kafka",
      "Kubernetes",
      "Azure",
      "AWS",
      "APIM",
      "Entra ID",
      "Keycloak",
      "Curity",
      "Terraform",
      "CI/CD",
      "Claude Code",
      "Google Gemini",
    ],
  },
  {
    title: "2019-2020 · Svenska Spel AB - Senior Software Developer",
    body: `Refactored a large Java system deployed to approximately 2,000
      Linux-based embedded devices across Sweden, improving reliability and
      update cadence. Introduced Spring IoC with profiles and conditional
      configuration to reduce coupling, improve testability, and support safer
      refactoring and automated fleet-wide delivery. Worked in a Kanban team
      focused on continuous prioritization and shorter lead times.`,
    technologies: [
      "Java",
      "Spring Framework",
      "REST",
      "Maven",
      "Docker",
      "SQL",
      "Kanban",
    ],
  },
  {
    title: "2018-2019 · Tele2 Sverige AB - Domain Architect",
    body: `Owned solution design for B2B online channels, IT infrastructure, and
      customer integrations. Designed on-premises and Azure integration and
      security patterns, including federated identity for single sign-on and
      machine-to-machine integrations. Focused on e-commerce checkout and
      account flows, plus ITSM ticketing integrations with customer systems.`,
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Azure",
      "APIM",
      "Entra ID",
      "OAuth 2.0",
      "OpenID Connect",
      "SAML 2.0",
    ],
  },
  {
    title: "2017-2018 · Tele2 Sverige AB - Solution Architect",
    body: `Designed and implemented solutions to migrate and integrate TDC
      applications into Tele2 infrastructure. Worked across customer projects
      and internal IT transformation, including migration of the TDC customer
      portal and API layer and end-to-end rebranding of TDC products to Tele2.`,
    technologies: [
      "Java",
      "React",
      "TypeScript",
      "Angular",
      "Python",
      "Azure",
      "API development",
      "Web services",
    ],
  },
  {
    title: "2014-2017 · TDC Sverige AB - IT Architect",
    body: `Managed TDC Nordic web channels and OSS applications. Designed and
      delivered large agile projects and customer-facing services, coordinating
      teams in Sweden, Norway, and Finland for services used by Nordic network
      and mobile customers.`,
    technologies: [
      "Java EE",
      "Spring",
      "Angular",
      "JavaScript",
      "REST APIs",
      "Docker",
      "SQL Server",
      "Agile",
    ],
  },
  {
    title: "2007-2014 · TDC Sverige AB - System Architect",
    body: `Led a team of 5-10 Java developers working on customer-facing web
      applications. Introduced Scrum and led the migration of TDC's customer
      portal from a large PHP and Python application to Java with Spring MVC.`,
    technologies: [
      "Java",
      "JavaScript",
      "Python",
      "Spring MVC",
      "SQL",
      "Scrum",
    ],
  },
  {
    title: "2006-2007 · TDC Song AB - Software Developer",
    body: `Worked on TDC's Nordic self-service customer portal as part of a
      development team, contributing to its migration from PHP to Java with
      Spring MVC.`,
    technologies: ["Java", "PHP", "Spring MVC"],
  },
] as const;

const Resume = (): JSX.Element => {
  return (
    <div className="pt-[3.375rem] md:pt-[4.375rem]">
      <section className="mb-16 max-w-[51.25rem] border-l-2 border-blue py-2 pl-[1.5625rem] md:mb-[5.375rem]">
        <p className="mb-3 text-[0.625rem] font-semibold uppercase leading-[1.8] tracking-[0.13em] text-blue">
          Summary
        </p>
        <h1 className="mb-4 mt-0 font-sans text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.06em] text-[var(--text-primary)]">
          Senior Developer &amp; System Architect
        </h1>
        <p className="m-0 max-w-[47.5rem] font-sans text-sm leading-[1.85] text-[var(--text-secondary)]">
          A software developer and architect with nearly two decades of
          experience designing, building, and leading complex IT solutions. With
          deep Java and full-stack expertise alongside modern cloud
          technologies, I connect hands-on engineering with architectural
          vision. Across enterprise and telecom environments, I bridge business
          and technology to deliver scalable, maintainable solutions aligned
          with organizational goals.
        </p>
      </section>

      <section
        className="mb-16 md:mb-[5.25rem]"
        aria-labelledby="highlights-title"
      >
        <div className="mb-7">
          <p className="mb-[0.625rem] text-[0.625rem] font-semibold uppercase leading-[1.8] tracking-[0.13em] text-blue">
            In short
          </p>
          <h2
            className="m-0 font-sans text-[clamp(1.5625rem,3.5vw,2.125rem)] font-medium leading-[1.28] tracking-[-0.045em] text-[var(--text-heading)]"
            id="highlights-title"
          >
            Architecture grounded in delivery.
          </h2>
        </div>
        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-3">
          <li className="resume-card flex flex-col gap-2 rounded-lg border border-[var(--border-subtle)] px-[1.1875rem] py-[1.125rem]">
            <strong className="text-xs text-[var(--text-card)]">
              Technically versatile
            </strong>
            <span className="font-sans text-xs leading-[1.7] text-[var(--text-secondary)]">
              Broad experience across platforms, frameworks, and architectures.
            </span>
          </li>
          <li className="resume-card flex flex-col gap-2 rounded-lg border border-[var(--border-subtle)] px-[1.1875rem] py-[1.125rem]">
            <strong className="text-xs text-[var(--text-card)]">
              Architectural mindset
            </strong>
            <span className="font-sans text-xs leading-[1.7] text-[var(--text-secondary)]">
              Connects enterprise direction with practical software delivery.
            </span>
          </li>
          <li className="resume-card flex flex-col gap-2 rounded-lg border border-[var(--border-subtle)] px-[1.1875rem] py-[1.125rem]">
            <strong className="text-xs text-[var(--text-card)]">
              Collaborative leader
            </strong>
            <span className="font-sans text-xs leading-[1.7] text-[var(--text-secondary)]">
              Guides teams and supports agile ways of working.
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-16 md:mb-[5.25rem]" aria-labelledby="skills-title">
        <div className="mb-7">
          <p className="mb-[0.625rem] text-[0.625rem] font-semibold uppercase leading-[1.8] tracking-[0.13em] text-blue">
            Capabilities
          </p>
          <h2
            className="m-0 font-sans text-[clamp(1.5625rem,3.5vw,2.125rem)] font-medium leading-[1.28] tracking-[-0.045em] text-[var(--text-heading)]"
            id="skills-title"
          >
            Technical skills
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {keywords.map(({ label, values }) => (
            <article
              className="resume-card rounded-lg border border-[var(--border-subtle)] p-5"
              key={label}
            >
              <h3 className="mb-[0.875rem] mt-0 text-xs text-blue">{label}</h3>
              <ul className="m-0 flex list-none flex-col items-start gap-[0.4375rem] p-0 md:flex-row md:flex-wrap">
                {values.map((value) => (
                  <li
                    className="rounded border border-[var(--border-subtle)] px-2 py-[0.3125rem] text-[0.625rem] leading-[1.5] text-[var(--text-chip)]"
                    key={value}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mb-16 border-l-2 border-magenta py-1 pl-[1.375rem] md:mb-[5.25rem]"
        aria-labelledby="ai-resume-title"
      >
        <p className="mb-[0.625rem] text-[0.625rem] font-semibold uppercase leading-[1.8] tracking-[0.13em] text-magenta">
          Applied AI
        </p>
        <h2
          className="mb-3 mt-0 font-sans text-[clamp(1.3125rem,3vw,1.75rem)] font-medium leading-[1.35] tracking-[-0.04em] text-[var(--text-heading)]"
          id="ai-resume-title"
        >
          AI as an engineering aid, guided by experience.
        </h2>
        <p className="m-0 max-w-[50rem] font-sans text-[0.8125rem] leading-[1.85] text-[var(--text-secondary)]">
          Uses tools such as GitHub Copilot, Claude Code, and Google Gemini to
          support software development and technical exploration. AI-generated
          output is reviewed in context and verified through engineering
          judgment; continues to explore practical applications of AI and
          machine learning.
        </p>
      </section>

      <section
        className="mb-16 md:mb-[5.25rem]"
        aria-labelledby="experience-title"
      >
        <div className="mb-7">
          <p className="mb-[0.625rem] text-[0.625rem] font-semibold uppercase leading-[1.8] tracking-[0.13em] text-blue">
            Selected career history
          </p>
          <h2
            className="m-0 font-sans text-[clamp(1.5625rem,3.5vw,2.125rem)] font-medium leading-[1.28] tracking-[-0.045em] text-[var(--text-heading)]"
            id="experience-title"
          >
            Experience
          </h2>
        </div>
        <div className="border-t border-[rgb(149_174_205_/_14%)]">
          {experiences.map(({ title, body, technologies }) => (
            <article
              className="relative border-b border-[rgb(149_174_205_/_14%)] py-6 pl-[1.125rem] md:pl-6"
              key={title}
            >
              <span
                className="absolute left-[0.125rem] top-[1.9375rem] size-[0.4375rem] rounded-full border border-blue bg-bg shadow-[0_0_0.625rem_rgb(116_224_208_/_34%)]"
                aria-hidden="true"
              />
              <h3 className="mb-[0.5625rem] mt-0 text-[0.8125rem] leading-[1.7] text-[var(--text-card)]">
                {title}
              </h3>
              <p className="m-0 max-w-[53.125rem] font-sans text-[0.8125rem] leading-[1.85] text-[var(--text-secondary)]">
                {body}
              </p>
              <ul
                className="mt-[0.8125rem] flex list-none flex-wrap gap-1.5 p-0"
                aria-label="Technologies"
              >
                {technologies.map((technology) => (
                  <li
                    className="rounded border border-[var(--border-subtle)] px-[0.4375rem] py-1 text-[0.5625rem] leading-[1.5] text-[var(--text-chip)]"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
