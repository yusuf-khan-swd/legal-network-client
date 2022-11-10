import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Router/Router";

function App() {
  return (
    <div className="bg-orange-50 max-w-screen-2xl mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
