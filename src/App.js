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
            {/* <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li> */}
            <li><a href="https://github.com/what-it-izz" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/isabelle-velasco-14491b1aa/" target="_blank">Linkedin</a></li>
            <li><a href="https://open.spotify.com/user/izzybellebelle?si=7fbad71d66c44f05&nd=1" target="blank">Spotify</a></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div>
        <img
            src={"./me.jpg"}
            alt="Photo"
            style={{
              width: "200px", // Adjust the desired width
              height: "200px", // Adjust the desired height
              borderRadius: "50%", // Make the image round
              objectFit: "cover", // Maintain aspect ratio and fill the container
              position:"absolute", 
              top:"80px",
              left:"80px",
            }}
          />
        </div>
        <div>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/PjXNHwK15CQ" 
            frameborder="0" 
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>
        <LavaLampBackground />
      </div>
    </div>
  );
}

export default App;
