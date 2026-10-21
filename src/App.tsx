import { useState, useEffect, Suspense } from "react";
import { routes, RouteContext, Route } from "./components/routes";
import Container from "./components/Container";

const App = () => {
  const [themePreference, setThemePreference] = useState<
    "system" | "light" | "dark"
  >(() => {
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "system";
  });
  const [systemPrefersDark, setSystemPrefersDark] = useState(
    () =>
      typeof window.matchMedia !== "function" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [route, setRoute] = useState<Route>(
    () =>
      routes.find((r) => location.hash.substring(1) === r.href) || routes[0],
  );
  const isLight =
    themePreference === "system" ? !systemPrefersDark : themePreference === "light";

  useEffect(() => {
    if (themePreference === "system") {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = themePreference;
    }
  }, [themePreference]);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      setSystemPrefersDark(event.matches);
    };

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isLight ? "dark" : "light";
    window.localStorage.setItem("theme", nextTheme);
    setThemePreference(nextTheme);
  };

  useEffect(() => {
    if (route === null) {
      return;
    }
    window.document.title = `Robert Lönnqvist | ${route.label}`;
    location.hash = route.href;
  }, [route]);

  useEffect(() => {
    const onHashChange = () => {
      const newRoute =
        routes.find((r) => location.hash.substring(1) === r.href) || routes[0];
      if (newRoute !== route) {
        setRoute(newRoute);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [route]);

  return (
    <RouteContext.Provider value={[route, setRoute]}>
      {route ? (
        <Container
          title={route.label}
          isLight={isLight}
          onToggleTheme={toggleTheme}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <route.component />
          </Suspense>
        </Container>
      ) : null}
    </RouteContext.Provider>
  );
};

export default App;
