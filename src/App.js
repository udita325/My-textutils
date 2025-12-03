import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = React.useState(null);
  const [textColor, setTextColor] = React.useState("black");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
   const toggleMode = (cls) => {
  document.body.classList.remove('bg-primary', 'bg-danger', 'bg-success', 'bg-warning', 'bg-light');

  let newColor = "black"; // default

  if (cls === "primary") newColor = "blue";
  if (cls === "danger") newColor = "red";
  if (cls === "success") newColor = "green";
  if (cls === "warning") newColor = "orange";

  if (cls) {
    document.body.classList.add('bg-' + cls);
  } else {
    document.body.classList.add('bg-light');
  }

  setTextColor(newColor);
};

  return (
    <>
      <Router>

        <Navbar title="TextUtils" about="About" home="Home" toggleMode={toggleMode}/>

        <Alert alert={alert} />

        <div className="container my-3">

          <Routes>
            
            {/* HOME PAGE */}
            <Route 
              path="/" 
              element={
                <TextForm 
                  textColor={textColor}
                  style={{ color: "white" }}
                  heading="Enter the text to analyze"
                  showAlert={showAlert}
                />
              }
            />

            {/* ABOUT PAGE */}
            <Route 
              path="/about" 
              element={
                <About showAlert={showAlert} />
              } 
            />

          </Routes>

        </div>

      </Router>
    </>
  );
}

export default App;
