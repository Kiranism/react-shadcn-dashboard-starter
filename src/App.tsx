import AppProvider from './providers';
import AppRouter from './routes';

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
