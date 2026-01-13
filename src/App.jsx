import UserDashboard from "./components/UserDashboard";
import { ThemeProvider } from "./utils/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-200">
        <UserDashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
