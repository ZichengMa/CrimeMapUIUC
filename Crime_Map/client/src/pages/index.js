
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
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    }
  }
  return (
    <div style={styles.header}>
      <div style={styles.content}>
        <h2 style={{textAlign: "center", color: "HighlightText"}}>Welcome to CRIME MAP</h2>
      </div>
    </div>
    // <div>
    //   <div style={{ backgroundImage:`url(${image})`}}>
    //   </div>
    //   <h1>Welcome to CRIME MAP</h1>
    // </div>
  );
};
  
export default Home;