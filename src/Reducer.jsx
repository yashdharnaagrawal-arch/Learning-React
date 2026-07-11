import react from 'react';

const initialState = {count: 0};

function rec(state, action){
    switch(action.type){
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset":
            return initialState;
    }
}

const ini = {cart: []};

function cart(item, action){
    switch(action.type){
        case "AddItem":
            return {
                ...item, cart: [...item.cart, action.payload]
            };
        case "RemoveItem":
            return {
                ...item, cart: item.cart.filter((value) => {
                    return value.id !== action.payload
                })
            };
        case "ClearCart":
            return {
                ...item, cart: []
            };

        default:
            return item;
    }
}

function Reducer(){

    const [state, dispatch] = react.useReducer(rec, initialState)

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 100000
        },
        {
            id: 2,
            name: "Mobile",
            price: 209999
        },
        {
            id: 3,
            name: "Tablet",
            price: 3088888
        },
        {
            id: 4,
            name: "Watch",
            price: 4077777
        }
    ]

    const [item, dispatchItem] = react.useReducer(cart, ini)

    const addItemToCart = (product) => {
        dispatchItem({type: "AddItem", payload: product})
    }

    const removeItemFromCart = (productId) => {
        dispatchItem({type: "RemoveItem", payload: productId})
    }

    const clearCart = () => {
        dispatchItem({type: "ClearCart"})
    }

    return(
        <>
        <h2>Reducer component</h2>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
{/* 
        <h2>Cart Reducer</h2>
        <p>Cart Items: {item.cart.join(", ")}</p>
        <button onClick={() => dispatchItem({type: "AddItem", payload: "Item 1"})}>Add Item 1</button>
        <button onClick={() => dispatchItem({type: "AddItem", payload: "Item 2"})}>Add Item 2</button>
        <button onClick={() => dispatchItem({type: "RemoveItem", payload: "Item 1"})}>Remove Item 1</button>
        <button onClick={() => dispatchItem({type: "ClearCart"})}>Clear Cart</button> */}

        <br></br>
        <h2>Products</h2>
        {products.map((product) => (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <button onClick={() => addItemToCart(product)}>Add to Cart</button>
                <button onClick={() => removeItemFromCart(product.id)}>Remove from Cart</button>
            </div>
        ))}

        {/* <h2>Cart Items</h2>
        {item.cart.length === 0 ? (
            <p>No items in the cart.</p>
        ) : (
            item.cart.map((cartItem, index) => (
                <div key={index}>
                    <p>{cartItem.name} - Price: {cartItem.price}</p>
                </div>
            ))
        )} */}

        <br></br>
        <h2> Cart Items {item.cart.length}</h2>
        {
            item.cart.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                item.cart.map((cartItem, index) => (
                    <div key={index}>
                        <p>{cartItem.name} - Price: {cartItem.price}</p>
                    </div>
                ))
            )
        }

        <button onClick={clearCart}>Clear Cart</button>
        <br></br>

        </>
    )
}

export default Reducer