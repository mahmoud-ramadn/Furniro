import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary-500 text-text-primary">
      <h1 className="text-4xl font-bold">404: Page Not Found</h1>
      <p className="text-text-secondary mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-400 transition duration-300"
      >
        Go Back to Safety
      </Link>
    </div>
  );
}

export default Error;
