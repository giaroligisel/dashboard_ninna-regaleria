import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1 className="h3 mb-2 text-gray-800 ">Oops!</h1>
      <p>La ruta a la que intenta acceder no existe!!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default NotFound;