import History from "./History";
import List from "./List";
import '../../styles/layouts/Nav.css';

function Nav() {
  return (
    <div className="nav">
      <List />
      <History />
    </div>
  );
}

export default Nav;