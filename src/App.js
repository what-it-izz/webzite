import TwoColumnLayout from './Columns';
import LavaLampBackground from './LavaLampBackground';
import './Container.css';

function App() {
  return (
        <div className="container">
          <h1>Under Construction</h1>
          <TwoColumnLayout
            leftContent={<p>This is the left column.</p>}
            rightContent={<p>This is the right column.</p>}
          />
          <LavaLampBackground />
        </div>
  );
}

export default App;
