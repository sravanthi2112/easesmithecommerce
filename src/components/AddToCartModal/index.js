import Popup from 'reactjs-popup'
import { IoClose } from "react-icons/io5";
import 'reactjs-popup/dist/index.css'
import './index.css'

const AddToCartModal = () => {

    const plantImageUrl = 'https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg__';
    return (
        <>
        <Popup
            modal
            trigger={
                <button className="add-to-cart"><p>-</p> <p>Add to Cart</p> <p>+</p></button>
            }
        >
        {close => (
               <div className='modal'>
                    <div className='close-btn-container'>
                        <button
                            type="button"
                            className="close-btn"
                            onClick={() => close()}
                        >
                        <IoClose />
                    </button>
                    </div>
               
                   <p className="header">Your Cart</p>
                   <hr className='hr-line'/>
                   <h1 className="title">Congratulations</h1>
                   <h2 className="title">Order Placed!</h2>
                   <img src={plantImageUrl} alt="Plant" className="plant-image" />
                   <p className="description">
                       Thank you for choosing Chaperone services.
                       <br /> We will soon get in touch with you!
                   </p>
                   <button className="continue-button" onClick={() => close()}>CONTINUE SHOPPING</button>
               </div>
        )}                  
        </Popup>
        
        </>

    );
};



export default AddToCartModal