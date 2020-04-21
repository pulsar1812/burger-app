import React, { Component } from 'react';

import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'David',
        address: {
          street: 'Test Street',
          zipCode: '12345',
          country: 'US',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'the fastest method',
    };
    axios
      .post('/orders.json', order)
      .then((res) => {
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input
            className={styles.Input}
            type='text'
            name='name'
            placeholder='Your Name'
          />
          <input
            className={styles.Input}
            type='email'
            name='email'
            placeholder='Your Email'
          />
          <input
            className={styles.Input}
            type='text'
            name='street'
            placeholder='Street'
          />
          <input
            className={styles.Input}
            type='text'
            name='postal'
            placeholder='Postal Code'
          />
          <Button btnType='Success'>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
