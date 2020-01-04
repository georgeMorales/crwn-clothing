import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
//history props que viene de withRouter
const CartDropdown = ({cartItems, history, dispatch}) => {
    
    //dispatch viene como props ...otherProps ****NOTA
    
    //console.log('otherProps', otherProps)
    // const handleClick = () => {
    //     history.push('/checkout')
    //     toggleCartHidden()
    // }

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {   
                    cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})  

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// })
        
   

export default withRouter(connect(mapStateToProps)(CartDropdown));
