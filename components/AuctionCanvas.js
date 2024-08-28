import React from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';

const AuctionCanvas = ({ artImage, highestBid, auctionEndTime }) => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {/* Art Display */}
        <Image image={artImage} x={50} y={50} width={400} height={400} />
        
        {/* Auction Data */}
        <Text text={`Highest Bid: ${highestBid}`} x={500} y={50} fontSize={24} />
        <Text text={`Auction Ends In: ${auctionEndTime}`} x={500} y={100} fontSize={24} />
      </Layer>
    </Stage>
  );
};

export default AuctionCanvas;
