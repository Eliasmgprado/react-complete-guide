import Modal from "../UI/Modal";
import CheckoutForm from "./CheckoutForm";

const Checkout = (props) => {
  return <Modal onClose={props.onClose}>
      <CheckoutForm></CheckoutForm>
  </Modal>;
};

export default Checkout;
