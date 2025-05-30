import { useRouteError } from "react-router-dom";
export default function Error() {
  const err = useRouteError();
  console.error(err);

  return (
    <div>
      <h1>Oh no!</h1>
      <p>This site has encountered an unexpected error</p>
      <p>
        <i>{err.statusText || err.message}</i>
      </p>
    </div>
  );
}
