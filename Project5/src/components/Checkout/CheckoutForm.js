import { useContext } from "react";
import useInput from "../../hook/use-input";
import CartContext from "../../store/cart-context";

const CheckoutForm = () => {
  const cartCtx = useContext(CartContext);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangedHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput((val) => val.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredAddressIsValid) {
    formIsValid = true;
  }

  const addOrderHandler = async (order) => {
    try {
      const response = await fetch(
        "https://react-course---food-orde-8db3d-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(order),
          header: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Can`t Add Order To DataBase");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submited')

    if (!formIsValid) {
      return;
    }

    addOrderHandler({
      name: enteredName,
      address: enteredAddress,
      order: cartCtx,
    });

    resetNameInput();
    resetAddressInput();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div>
        <label htmlFor="name">Address</label>
        <input
          type="text"
          id="name"
          onChange={addressChangedHandler}
          onBlur={addressBlurHandler}
          value={enteredAddress}
        />
        {addressInputHasError && (
          <p className="error-text">Address must not be empty</p>
        )}
      </div>
      <div>
        <button disabled={!formIsValid}>Finish Order</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
