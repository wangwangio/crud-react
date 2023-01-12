import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h1 className="page-header text-center">React CRUD with PHP and MYSQL</h1>
      <br />
      <Router>
        <center>
          <Link to="/" className="btn btn-success">List Users</Link>&nbsp;&nbsp;
          <Link to="user/create" className="btn btn-success">Create User</Link>
        </center>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
