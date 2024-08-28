import React from 'react';
import { canvasClient } from '../lib/dscvrCanvasClient'; // If you export the instance

const placeBid = async (amount) => {
  const response = await canvasClient.walletTransaction({
    amount,
    currency: 'ICP', // Or the currency you’re using
    recipient: 'yourRecipientAddressHere',
  });

  if (response.success) {
    console.log('Bid placed successfully');
  } else {
    console.error('Transaction failed:', response.error);
  }
};

const BidComponent = () => {
  return (
    <div>
      <button onClick={() => placeBid(1)}>Place Bid of 1 ICP</button>
    </div>
  );
};

export default BidComponent;