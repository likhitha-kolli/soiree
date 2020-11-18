import logo from './logo.svg';
import data from './data';
import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


<head>
        <meta charset="UTF-8" />
        <title>SOIREE</title>
        <link rel="stylesheet" href="style.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital@1&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>



function App() {
  return (
  <BrowserRouter>
  <div>
    <div className="header-1">
      <div className="container">
        <div className = "navbar">
            <div className = "logo">

               <Link to="/"><img src="/images/images/logo.png" alt="LOGO" width="175px"></img></Link>
            </div>
            <nav>
                <ul id="MenuItems">
                    <li><a href="">Home</a> </li>
                    <li><a href="">Products</a> </li>
                    <li><a href="">About</a> </li>
                    <li><a href="">Contact</a> </li>
                    <li><a href="">Acount</a> </li>
                </ul>
            </nav>
            <img src="/images/images/cart.png" width="50px" height="30px"></img>
            <img src="/images/images/menu.png" className="menu-icon" onclick="menutoggle()"></img>
        </div>
    </div>
  </div>
    <Route path="/" exact={true} component={HomeScreen}/>
    
        {/*--------FEATURED PRODUCTS----------*/}
        <div className="small-container">
        <Route path="/products/:id" component={ProductScreen}/>
        </div>
        {/*--------OFFERS----------*/}
        
        
        {/*--------BRANDS-----------*/}
        <div className="brands">
            <div className="small-container">
                <div className="row">
                {
                data.brands.map(brand =>
                
                    <div className="col-6">
                        <img src={brand.image}></img>
                    </div>)
                }
            </div>
        </div>
        </div>

        {/*-----FOOTER--------*/}
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Dowanload App</h3>
                        <p>Dowanload App for android and ios mobile phone.</p>
                        <div className="app-logo">
                            <img src="/images/images/app-store.png"></img>
                            <img src="/images/images/play-store.png"></img>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src="/images/images/a.png"></img>
                        <p>Our purpose is to sustainably make the Pleasure and Benefits of Fashion accessible to many .</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Useful links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>

                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">YouTube</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright"/>Copyright 2020 - Easy Tutorials
            </div>
        </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
