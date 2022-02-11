import logo from './logo.svg';
import Article from './Article';
import InfoSection from './infosection';
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Article />
      <InfoSection />
    </div>
  );
}

export default App;
