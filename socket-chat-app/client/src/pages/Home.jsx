import React from "react";

const Home = ({ username }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="bg-card p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Welcome, {username}!</h1>
        <p className="mb-4">You are now in the global chat room.</p>
        {/* Chat UI and Socket.io logic will go here */}
      </div>
    </div>
  );
};

export default Home;