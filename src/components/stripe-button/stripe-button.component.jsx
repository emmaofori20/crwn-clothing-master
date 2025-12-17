import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // Stripe expects the price in cents
  const publishableKey =
    "pk_test_51PjnrjKWbpTZckQhnoQTQsl7kVjceEBBcrCt3VjWs69BvQPIuWLM7oinl5iB2v7MtEfgMgxA7PImFSccjDiAfv2J008YtBCST3";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
