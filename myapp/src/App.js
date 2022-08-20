import { useState } from 'react'
import ProductDisplay from "./components/ProductDisplay";
import OrderDisplay from "./components/OrderDisplay";
import ProductDetail from "./components/ProductDetail";
import AddProduct from "./components/AddProduct.jsx";
import RenderIf from "./components/RenderIf";
import './App.css';
function App() {
  const [color, setColor] = useState('');
  const [show, setShow] = useState(false);
  const ChooseColor = (e) => {
    setColor(e.target.value); e.preventDefault()
  }
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <div className="container">
        <header className="row">
          <RenderIf condition={show}>
            <ProductDetail setShow={setShow} />
          </RenderIf>
          <div className="col-md-12">
            <ProductDisplay setShow={setShow} />
          </div>
        </header>
        <footer className="row">
          <div className="col-md-4">
            <input className='color btn btn-warning' type="color" value='#50213A' onChange={ChooseColor} />
          </div>
          <div className="col-md-4"><AddProduct /></div>
          <div className="col-md-4"><OrderDisplay /></div>
        </footer>
      </div>
    </div>
  );
}
export default App;
