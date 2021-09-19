import { useEffect } from 'react';
import { useStore } from './store';
import './App.css';

function App() {
  const bears = useStore((state) => state.bears);
  const birds = useStore((state) => state.birds);
  const increaseBirds = useStore((state) => state.increaseBirds);
  const increaseBears = useStore((state) => state.increaseBears);

  // Comment out this useEffect and it works fine
  useEffect(() => {
    increaseBirds();
  }, [increaseBirds]);

  return (
    <div>
      <div>Number of bears: {bears}</div>
      <div>Number of birds: {birds}</div>
      <button onClick={increaseBears}>Increase bears</button>
    </div>
  );
}

export default App;
