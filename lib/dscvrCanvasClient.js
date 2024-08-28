import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';

const canvasClient = new CanvasClient();

export const initializeCanvas = async () => {
  const response = await canvasClient.ready();
  if (response) {
    const user = response.untrusted.user;
    const content = response.untrusted.content;
    return { user, content };
  }
  return null;
};

export const placeBid = async (amount, recipient) => {
  const response = await canvasClient.walletTransaction({
    amount,
    currency: 'ICP', // Customize for your currency
    recipient: recipient,
  });

  if (response.success) {
    console.log('Bid placed successfully');
  } else {
    console.error('Transaction failed:', response.error);
  }
};
