import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
     
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/211/300/200"
          imgAlt="Card Image 1"
          title="View of a Boat"
          description="The given boat is a beautiful vessel that can be used for various purposes."
      
          buttonText="Learn More"
          link="card1"
        />
        <Card
          imgSrc="https://picsum.photos/id/250/300/200"
          imgAlt="Card Image 3"
          title="View of The World"
          description="A camere is a device that captures images or videos of the world around us."
          buttonText="Learn More"
          link="card2"
        />
        <div className ="col"> 
          
          <Card
          imgSrc="https://picsum.photos/id/250/300/200"
          imgAlt="Card Image 3"
          title="Beautiful View"
          description="The beauty of nature is captured by the camera in this image."
          buttonText="Learn More"
          link="card2"
        /><Card
          imgSrc="https://picsum.photos/id/250/300/200"
          imgAlt="Card Image 3"
          title="view form a camera"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
           </div>

      </div>
      
    </div>
  );
}

export default App;