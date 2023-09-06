import './App.css';
import './style.css';
import SidebarComponent from './components/sidebar.jsx';
import NavbarComponent from './components/navbar.jsx';
import ListProducts from './components/products/list-products.jsx';
import FooterComponent from './components/footer.jsx';

function App() {
  return (
    <div className="App relative h-screen">
      <div className="flex h-screen">
        <SidebarComponent />
        <div className="flex-auto relative h-screen">
          <NavbarComponent />
          <ListProducts />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
