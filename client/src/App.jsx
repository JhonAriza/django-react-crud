import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { UserFormPage } from "./pages/UserFormPage";
import { UsersPage } from "./pages/UsersPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to users */}
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserFormPage />} />
          <Route path="/users-create" element={<UserFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
