import "./Components/CSS/proj.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1 className="Header1"> PHOTOGRAPHER </h1>
        <h1> John Doe </h1>
        <div class="btn-group">
          <button>Home</button>
          <button>Portfolio</button>
          <button>Contact</button>
          <button>Weddings</button>
        </div>
      </div>
      <div className="photos">
        <div className="photos-left">
          <img src="https://www.w3schools.com/w3images/wedding.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/rocks.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/falls2.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/paris.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/nature.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/mist.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/paris.jpg" alt="#" />
        </div>

        <div className="photos-right">
          <img src="https://www.w3schools.com/w3images/underwater.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/ocean.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/wedding.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/mountainskies.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/rocks.jpg" alt="#" />
          <img src="https://www.w3schools.com/w3images/underwater.jpg" alt="#" />
        </div>
      </div>

      <div className="footer">
        <div className="logo">
          <i class="fa fa-facebook-official"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-snapchat"></i>
          <i class="fa fa-pinterest"></i>
          <i class="fa fa-linkedin"></i>
          <i class="fa fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
