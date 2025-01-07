import { createRoot } from 'react-dom/client';
import './index.css';
import './main.css';
import AppRouter from './routes/AppRouter';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/ApolloClient';



createRoot(document.getElementById('root')!).render(
<ApolloProvider client={client}>
<AppRouter />
</ApolloProvider>

);
