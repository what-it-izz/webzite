import TwoColumnLayout from './Columns';
import LavaLampBackground from './LavaLampBackground';
import './Styles.css';
// import Header from './Header';
// import { Header, Segment } from 'semantic-ui-react'
// import './Styles.scss'; // Import your Sass file

function App() {
  return (
    <div>
        <header className='floating-header'>
          <nav class="header-nav">
            <ul class="link-list">
            <li><a href="#">Home</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Github</a></li>
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">Spotify</a></li>
            </ul>
          </nav>
        </header>
      <div className="container">
        <img
          src={"./me.jpg"}
          alt="Photo"
          style={{
            width: "200px", // Adjust the desired width
            height: "200px", // Adjust the desired height
            borderRadius: "50%", // Make the image round
            objectFit: "cover", // Maintain aspect ratio and fill the container
            position:"absolute", 
            top:"10px",
            left:"80px",
          }}
        />
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/PjXNHwK15CQ" 
          frameborder="0" 
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
        {/* <TwoColumnLayout
            leftContent={<p>This is the left column.</p>}
            rightContent={<p>This is the right column.</p>}
        /> */}
        <LavaLampBackground />
      </div>
    </div>
  );
}

export default App;
