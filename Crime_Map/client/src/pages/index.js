
import React from 'react';
import image from '../image/uiuc.png'
  
const Home = () => {
  const styles = {
    header: {
      backgroundImage: `url(${image})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
  
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    }
  }
  return (
    <div style={styles.header}>
      <div style={styles.content}>
        <h2 style={{textAlign: "center", color: "HighlightText", fontSize: 30}}>  </h2>
        <h2 style={{textAlign: "center", color: "HighlightText", fontSize: 30}}>Welcome to CRIME MAP</h2>
      </div>
    </div>
  );
};
  
export default Home;