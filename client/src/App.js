import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorList from "./components/AuthorList";
import EditAuthor from "./components/EditAuthor";
import AuthorForm from "./components/AuthorForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorList />} />
          <Route path="/new" element={<AuthorForm />} />
          <Route path="/edit/:id" element={<EditAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
