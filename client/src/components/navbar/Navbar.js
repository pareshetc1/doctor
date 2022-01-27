import { Layout } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

let Navbar = () => {
  return (
    <Header>
      <div className="row">
        <div style={{ color: "white", display: "inline-block" }}>
          <Link to="/">Doctor</Link>
        </div>
        <div style={{ color: "white", display: "inline-block" }}>
          <Link to="/disease-list">List</Link>
        </div>
      </div>
    </Header>
  );
};
export default Navbar;
