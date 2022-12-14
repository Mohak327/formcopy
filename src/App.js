import Home from './Pages/Home/Home'
import Navbar from './commons/Navbar/Navbar'
// import Form from './commons/Form/Form'
import FormPut from './commons/Form/FormPut'
import Responses from './Pages/Responses/Responses'
import Gallery from './commons/Gallery/Gallery'
import { makeStyles } from "@material-ui/core/styles";
import {
  Route,
  Routes,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  app: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  }
}))

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPut />} />
        <Route path="/responses" element={<Responses />} />
        <Route path="/infinite" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
