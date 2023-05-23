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

 
    return(
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
   
    )
 }           


export default CartLine;