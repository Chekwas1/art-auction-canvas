import React, { useEffect, useState } from 'react';
import AuctionCanvas from '../components/AuctionCanvas';
import BidComponent from '../components/BidComponent';
import { initializeCanvas } from '../lib/dscvrCanvasClient';

const Home = () => {
  const [user, setUser] = useState(null);
  const [content, setContent] = useState(null);
  const [highestBid, setHighestBid] = useState(0);
  const [auctionEndTime, setAuctionEndTime] = useState("24h"); // Example end time

  useEffect(() => {
    const initCanvas = async () => {
      const response = await initializeCanvas();
      if (response) {
        setUser(response.user);
        setContent(response.content);
      }
    };
    initCanvas();
  }, []);

  return (
    <div>
      <h1>Blockchain-Based Art Auction</h1>
      {user && <p>Welcome, {user.username}</p>}
      <AuctionCanvas 
        artImage={content ? content.image : null} 
        highestBid={highestBid} 
        auctionEndTime={auctionEndTime} 
      />
      <BidComponent recipient="auctionOwnerAddress" />
    </div>
  );
};

export default Home;
