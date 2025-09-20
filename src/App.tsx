import { useState, useEffect } from "react";
import { routes, RouteContext, Route } from "./components/routes";

const App = () => {
  const [route, setRoute] = useState<Route>(routes[0]);

  useEffect(() => {
    setRoute(
      routes.find((r) => location.hash.substring(1) === r.href) || routes[0],
    );
  }, []);

  useEffect(() => {
    if (route === null) {
      return;
    }
    window.document.title = `Robert Lönnqvist | ${route.label}`;
    location.hash = route.href;
  }, [route]);

  return (
    <RouteContext.Provider value={[route, setRoute]}>
      {route ? <route.component /> : null}
    </RouteContext.Provider>
  );
};

export default App;
