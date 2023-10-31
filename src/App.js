import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accounts from './Components/Accounts';
import Form from './Components/Form';
import Form2 from './Components/Form2';
import Excellency from './Components/Excellency';
import './App.css';
import Upload from './Components/Upload';


  function App() {
  return (
  <Router>
        <Routes>

          <Route path="/" element={<Accounts />} />
           <Route path="/Form" element={<Form />} />
            <Route path='/Form2' element={<Form2/>}/>
             <Route path="/view/:document" render={({ match }) => <Excellency document={match.params.document} />} />
              <Route path='/Upload' element={<Upload/>}/>
        
        </Routes>
     
      </Router>
      
    
  );
}
export default App;
