import {FC} from 'react';
import './App.css';
import NavigationContainer from "./PagesApp/StaticPages/Navigation/NavigationContainer";
import FirstStart from "./PagesApp/FirstStart";


const App: FC = () => {
  return (
    <div className="App">
        <NavigationContainer/>
        <FirstStart/>
    </div>
  );
}

export default App;
