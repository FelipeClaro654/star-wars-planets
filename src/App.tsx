import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme/theme-provider";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
