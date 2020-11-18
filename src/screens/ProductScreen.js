import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import ReactDOM from 'react-dom';
import ScriptTag from 'react-script-tag';
<script type="text/javascript" src="./assets/js/onchnge.js"></script>
 
function ProductScreen(props){
    
    
    console.log(props.match.params.id)
    const temp = data.featuredProd.find(x=>x._id === props.match.params.id)
    
    if(temp===undefined)
    {
        var product = data.trendingProd.find(x=>x._id === props.match.params.id);
    }
    else
    {
        var product = data.featuredProd.find(x=>x._id === props.match.params.id);
    }
    function sayHello()
    {
        alert(this.src);
    }
     {/*var ProductImg = document.getElementById("ProductImg");
    var SmallImg = document.getElementsByClassName("small-img");
   SmallImg[0].onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }
    SmallImg[2].onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }
    SmallImg[3]. onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }*/}
    
    
    return<div> 
        <div>
            <Link to="/">Back to result</Link>
        </div>
        <div className="small-container single-product">
            <div className="row">
                <div className="col-2">
                    <img src={product.image} width="80%" alt="product" id="ProductImg"></img>
                     <div className="small-img-row">
                        <div className="small-img-col1">
                            <img src={product.image} ></img>
                        </div>
                        <div className="small-img-col2">
                            <img src={product.sample_image1}></img>
                        </div>
                        <div className="small-img-col3">
                            <img src={product.sample_image2}></img>
                        </div>
                        <div className="small-img-col4">
                            <img src={product.sample_image3}></img>
                        </div>
                        </div>
                         
                </div>
                <div className="col-2">
                    <p>{product.brand}</p>
                    <h2>{product.name}</h2>
                    <h4><b>Rs.{product.price}&nbsp;</b> <s>Rs.{product.originalPrice}</s> </h4>
                    <select>
                        <option>Select Size</option>
                        <option>XXL</option>
                        <option>XL</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                    <input type = "number" value="1"></input>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" className="btn"> Add to Cart</a>
                    <h3>Product Details<i className="fa fa-indent"></i></h3>
                    <p>{product.details}</p>
                    <br />
                    <h3>Product Material and Specifications</h3>
                    {/*{data.product.Specifications.map(([key, value]) =>
                    {
                        return(
                            <div>
                            {key}:{value}
                            <hr />
                            </div>
                            
                            
                        );
                        
                    })} */}

                    
                </div>
            </div>
            
    
            
        </div>
    
</div>


}

export default ProductScreen;