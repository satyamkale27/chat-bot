const App = () => {
  return (
    <div className="chat-bot">
      <div className="chat-header">
        <div className="info-container">
          <h3>Chat with</h3>
          <h2>Gemini Bot</h2>
        </div>
        {/* //svg */}
      </div>
      <div className="feed">
        <div className="questions bubble"></div>
        <div className="response bubble"></div>
      </div>
      {/* <textarea value={} onChange={}/> */}
      {/* <button onClick={}>⇾</button> */}
    </div>
  );
};

export default App;
