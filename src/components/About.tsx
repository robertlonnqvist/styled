import { JSX, useContext } from "react";
import { RouteContext, routes } from "./routes";

const strengths = [
  {
    number: "01",
    title: "Architecture",
    detail: "Turning complex systems into clear, evolvable platforms.",
  },
  {
    number: "02",
    title: "Engineering",
    detail: "Building dependable software, from API to production.",
  },
  {
    number: "03",
    title: "Enablement",
    detail: "Helping teams make better technical decisions together.",
  },
] as const;

const About = (): JSX.Element => {
  const [, setRoute] = useContext(RouteContext);

  return (
    <div className="pt-[3.625rem] md:pt-[4.875rem]">
      <section
        className="grid grid-cols-1 items-center gap-[2.375rem] md:grid-cols-[minmax(0,1.3fr)_minmax(16.25rem,0.7fr)] md:gap-[clamp(2.5rem,8vw,6.5rem)]"
        aria-labelledby="hero-title"
      >
        <div className="max-w-[43.75rem]">
          <p className="mb-5 text-[0.625rem] font-semibold uppercase leading-[1.8] tracking-[0.13em] text-blue">
            <span className="mr-[0.5625rem] text-magenta" aria-hidden="true">
              {"<"}
            </span>
            Software / Systems / People
          </p>
          <h1
            className="m-0 font-sans text-[clamp(2.3125rem,11vw,3.1875rem)] font-semibold leading-[1.06] tracking-[-0.065em] text-[var(--text-primary)] md:text-[clamp(2.5rem,6.2vw,4.375rem)]"
            id="hero-title"
          >
            Building systems
            <br />
            <span className="text-[var(--text-heading-secondary)]">
              that stand the test of time.
            </span>
          </h1>
          <p className="mt-[1.625rem] max-w-[37.1875rem] font-sans text-sm leading-[1.85] text-[var(--text-secondary)] min-[481px]:text-base">
            I’m a software developer and architect focused on thoughtful
            engineering, resilient platforms, and helping teams deliver with
            confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[481px]:flex-row min-[481px]:flex-wrap md:items-center">
            <button
              type="button"
              className="inline-flex min-h-[2.875rem] items-center justify-between gap-4 rounded-[0.4375rem] bg-blue px-4 text-[0.6875rem] font-semibold text-[var(--button-primary-text)] transition duration-[160ms] hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue sm:justify-center"
              onClick={() => setRoute(routes[1])}
            >
              Explore my experience <span aria-hidden="true">↗</span>
            </button>
            <a
              className="inline-flex min-h-[2.875rem] items-center justify-between gap-4 rounded-[0.4375rem] border border-[var(--border-strong)] px-4 text-[0.6875rem] font-semibold text-[var(--text-soft)] transition duration-[160ms] hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue sm:justify-center"
              href="https://www.linkedin.com/in/robertlonnqvist"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <aside
          className="signal-card relative w-full max-w-[26.25rem] overflow-hidden rounded-[0.625rem] border border-[var(--border-subtle)] shadow-[0_1.5rem_5rem_rgb(0_0_0_/_18%)]"
          aria-label="Areas of focus"
        >
          <div className="flex min-h-12 items-center justify-between border-b border-[var(--border-subtle)] px-[1.0625rem] text-[0.5625rem] tracking-[0.08em] text-[var(--text-secondary)]">
            <span className="signal-dot" aria-hidden="true" />
            <span className="mr-auto">AREAS OF FOCUS</span>
            <span className="text-[0.5625rem] text-[var(--text-muted)]">
              [ 01 - 03 ]
            </span>
          </div>
          <div
            className="signal-graphic relative grid min-h-[13.125rem] place-items-center overflow-hidden md:min-h-[15.3125rem]"
            aria-hidden="true"
          >
            <span className="signal-orbit signal-orbit-outer" />
            <span className="signal-orbit signal-orbit-inner" />
            <span className="signal-core" />
            <span className="signal-crosshair signal-crosshair-x" />
            <span className="signal-crosshair signal-crosshair-y" />
            <span className="absolute bottom-[0.8125rem] right-[0.875rem] text-[0.5625rem] tracking-[0.08em] text-[var(--text-muted)]">
              59°19&apos;N / 18°04&apos;E
            </span>
          </div>
          <div className="flex min-h-[2.625rem] items-center justify-between border-t border-[var(--border-subtle)] px-[1.0625rem] text-[0.5625rem] tracking-[0.08em] text-[var(--text-muted)]">
            <span>SCALABLE BY DESIGN</span>
            <span className="text-[0.9375rem] text-blue" aria-hidden="true">
              ↗
            </span>
          </div>
        </aside>
      </section>

      <section
        className="mt-[4.75rem] md:mt-[7.25rem]"
        aria-labelledby="focus-title"
      >
        <div className="mb-8 max-w-[33.75rem]">
          <p className="mb-[0.625rem] text-[0.625rem] font-semibold uppercase leading-[1.8] tracking-[0.13em] text-blue">
            How I work
          </p>
          <h2
            className="m-0 font-sans text-[clamp(1.5625rem,3.5vw,2.125rem)] font-medium leading-[1.28] tracking-[-0.045em] text-[var(--text-heading)]"
            id="focus-title"
          >
            Good technology starts with good thinking.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[0.875rem] md:grid-cols-3">
          {strengths.map(({ number, title, detail }) => (
            <article
              className="strength-card relative min-h-[9.625rem] overflow-hidden rounded-lg border border-[var(--border-subtle)] px-[1.375rem] py-[1.3125rem] md:min-h-[11.25rem]"
              key={number}
            >
              <span className="text-[0.625rem] text-magenta">{number}</span>
              <h3 className="mb-2 mt-4 font-sans text-[1.0625rem] font-semibold text-[var(--text-card)] md:mt-6">
                {title}
              </h3>
              <p className="m-0 max-w-[17.5rem] font-sans text-[0.8125rem] leading-[1.7] text-[var(--text-card-secondary)]">
                {detail}
              </p>
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 bg-[linear-gradient(90deg,var(--color-blue),transparent_75%)] opacity-55"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </section>

      <section
        className="ai-panel mt-16 grid grid-cols-1 items-center gap-6 rounded-[0.5625rem] border border-[var(--border-accent)] p-6 md:mt-[5.25rem] md:grid-cols-[minmax(0,1fr)_minmax(15.625rem,0.65fr)] md:gap-[clamp(1.875rem,7vw,5.625rem)] md:p-[clamp(1.5rem,4vw,2.375rem)]"
        aria-labelledby="ai-title"
      >
        <div>
          <p className="mb-3 text-[0.625rem] font-semibold uppercase leading-[1.8] tracking-[0.13em] text-magenta">
            Applied AI
          </p>
          <h2
            className="m-0 max-w-[35rem] font-sans text-[clamp(1.5rem,3.5vw,2.125rem)] font-medium leading-[1.3] tracking-[-0.045em] text-[var(--text-card)]"
            id="ai-title"
          >
            Human judgment, amplified by intelligent tools.
          </h2>
          <p className="mt-4 max-w-[38.75rem] font-sans text-[0.8125rem] leading-[1.85] text-[var(--text-secondary)]">
            I use generative AI as a practical partner in software engineering:
            exploring ideas, working through technical problems, and
            accelerating everyday development. I keep engineering judgment,
            context, and review at the center of the process.
          </p>
          <p className="mt-4 max-w-[38.75rem] font-sans text-xs leading-[1.85] text-[var(--text-accent)]">
            Also exploring where machine learning can create useful, real-world
            value.
          </p>
        </div>
        <div
          className="border-t border-[var(--border-subtle)] pt-5 md:border-l md:border-t-0 md:py-2 md:pl-[clamp(1.375rem,4vw,2.75rem)]"
          aria-label="AI tools"
        >
          <span className="text-[0.5625rem] tracking-[0.1em] text-[var(--text-muted)]">
            TOOLS IN MY WORKFLOW
          </span>
          <ul className="my-[1.0625rem] mb-6 flex flex-wrap gap-2 p-0">
            <li className="rounded-[0.3125rem] border border-[var(--border-accent)] bg-[var(--surface-accent)] px-2.5 py-2 text-[0.625rem] whitespace-nowrap text-[var(--text-accent)]">
              GitHub Copilot
            </li>
            <li className="rounded-[0.3125rem] border border-[var(--border-accent)] bg-[var(--surface-accent)] px-2.5 py-2 text-[0.625rem] whitespace-nowrap text-[var(--text-accent)]">
              Claude Code
            </li>
            <li className="rounded-[0.3125rem] border border-[var(--border-accent)] bg-[var(--surface-accent)] px-2.5 py-2 text-[0.625rem] whitespace-nowrap text-[var(--text-accent)]">
              Google Gemini
            </li>
          </ul>
          <span className="text-[0.5625rem] leading-[1.8] tracking-[0.1em] text-[var(--text-muted)]">
            ASSISTED BY AI <span aria-hidden="true">/</span> VERIFIED BY
            ENGINEERING
          </span>
        </div>
      </section>

      <section
        className="mt-10 flex flex-col items-start gap-[0.9375rem] border-y border-[rgb(149_174_205_/_14%)] py-5 md:mt-[3.625rem] md:flex-row md:items-center md:gap-7"
        aria-label="Technology experience"
      >
        <span className="shrink-0 text-[0.5625rem] tracking-[0.1em] text-[var(--text-muted)]">
          IN THE TOOLKIT
        </span>
        <ul className="m-0 flex flex-wrap gap-x-6 gap-y-2 p-0 text-[0.625rem] text-[var(--text-soft)]">
          <li className="before:mr-2 before:text-blue before:content-['/']">
            Java &amp; Spring
          </li>
          <li className="before:mr-2 before:text-blue before:content-['/']">
            Cloud &amp; Kubernetes
          </li>
          <li className="before:mr-2 before:text-blue before:content-['/']">
            APIs &amp; Integration
          </li>
          <li className="before:mr-2 before:text-blue before:content-['/']">
            CI/CD
          </li>
          <li className="before:mr-2 before:text-blue before:content-['/']">
            TypeScript
          </li>
          <li className="before:mr-2 before:text-blue before:content-['/']">
            Applied AI
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
