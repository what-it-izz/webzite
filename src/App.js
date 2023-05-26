import TwoColumnLayout from './Columns';
import LavaLampBackground from './LavaLampBackground';
import './Styles.css';
// import Header from './Header';
import { Header, Segment } from 'semantic-ui-react'
// import './Styles.scss'; // Import your Sass file

function App() {
  return (
    <div>
      {/* <div className="header"> */}
        <header className='floating-header'>
          <nav class="header-nav">
            <ul class="link-list">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Spotify</a></li>
              <li><a href="#">Contact Me</a></li>
            </ul>
          </nav>
        </header>
      {/* </div> */}
      <div className="container">
        <TwoColumnLayout
          leftContent={<p>This is the left column.</p>}
          rightContent={<p>This is the right column.</p>}
        />
        <LavaLampBackground />
      </div>
    </div>
  );
}

export default App;
