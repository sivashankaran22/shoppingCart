import React,{useState} from 'react';





 const CartLine = ({productSale,productUrl,productName,productRating,productFirstPrice,productFinalPrice,cartCount,setCartCount}) => {
     
    const [show, setShow] = useState(true)

    const clickAddtoCard =()=>{
        setShow(!show)
        setCartCount(cartCount+1)
    }
    const clickRemoveCard =()=>{
        setShow(!show)
        setCartCount(cartCount-1)
    }
// d-flex justify-content-center
// container px-4 px-lg-5 mt-5
// row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4
// 
// 
    return(
       
        <div className= "">
        <div class = "container px-4 px-lg-5 mt-5 d-flex justify-content-center flex-column" >
        <div class ="row gx-4 gx-md-5 row-cols-4 row-cols-md-3 row-cols-xl-4 justify-content-center">
    
         <div class="col mb-5" >
            <div class="card h-100">
                <button class=" badge bg-dark text-white position-absolute salebad">{productSale}</button>
                <img class="" src={productUrl} alt="..."/>
                <div class="card-body p-4">
                    <div class="text-center">
                       <h5 class="fw-bolder">{productName}</h5>
                       <div class="d-flex justify-content-center small text-warning mb-2">
                       <div class="bi-star-fill">{productRating}</div>
                       <div class="bi-star-fill">{productRating}</div>
                       <div class="bi-star-fill">{productRating}</div>
                       <div class="bi-star-fill">{productRating}</div>
                       <div class="bi-star-fill">{productRating}</div>
                    </div>
                       <h5><span class="text-muted text-decoration-line-through">{productFirstPrice}</span>{productFinalPrice}</h5>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            {show ? <button onClick={clickAddtoCard} class="a btn btn-outline-dark mt-3">Add to cart</button> : 
                                    <button onClick={clickRemoveCard} class="a btn btn-outline-dark mt-3">Remove Cart</button>}
                        </div>
                        
                    </div>
                </div>
            </div>
         </div>
         </div> 
    </div>  
    </div> 
    )
 }           


export default CartLine;