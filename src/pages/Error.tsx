import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <Link to="/" replace={true}>
        How about going back to stafety?
      </Link>
    </div>
  );
}

export default Error;
