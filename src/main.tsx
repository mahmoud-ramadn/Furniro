import { createRoot } from 'react-dom/client';
import './index.css';
import './main.css';
import AppRouter from './routes/AppRouter';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/ApolloClient';
import { CartProvider } from './context/Cartcontext';


createRoot(document.getElementById('root')!).render(

    <ApolloProvider client={client}>
        <CartProvider>
            <AppRouter />
        </CartProvider>
    </ApolloProvider>

);
