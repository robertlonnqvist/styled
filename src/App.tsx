import { useState, useEffect, Suspense } from "react";
import { routes, RouteContext, Route } from "./components/routes";
import Container from "./components/Container";

const App = () => {
  const [route, setRoute] = useState<Route>(
    () =>
      routes.find((r) => location.hash.substring(1) === r.href) || routes[0],
  );

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
        <Container title={route.label}>
          <Suspense fallback={<div>Loading...</div>}>
            <route.component />
          </Suspense>
        </Container>
      ) : null}
    </RouteContext.Provider>
  );
};

export default App;
