import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

const OrderSummary = ({ ingredients }) => {
  const ingredientSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger'>Cancel</Button>
      <Button btnType='Success'>Continue</Button>
    </Fragment>
  );
};

export default OrderSummary;
