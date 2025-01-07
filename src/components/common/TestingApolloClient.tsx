import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query {
    products {
      id
      category {
        image
      }
      price
      images
      description
    }
  }
`;

interface TUser {
  id: string;
  name: string;
  email: string;
}
interface GetUsersData {
  users: TUser[];
}

const UserList = () => {
  const { loading, error, data } = useQuery<GetUsersData>(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
