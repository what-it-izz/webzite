import TwoColumnLayout from './Columns';
import LavaLampBackground from './LavaLampBackground';
import Header from './Header';
import './Styles.css';
import './Header.css';
// import './Styles.scss'; // Import your Sass file

function App() {
  return (
    <div>
      <div className="header">
        <h1>Testing</h1>
      </div>
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
