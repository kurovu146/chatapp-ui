import Content from '../layouts/content/Content';
import Header from '../layouts/header/Header';
import Nav from '../layouts/nav/Nav';

function App() {
  return (
    <div className="">
      <Header />
      <div className='flex'>
        <Nav />
        <Content />
      </div>
    </div>
  );
}

export default App;
