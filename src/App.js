
import Black_box from "./components/Black_box.jsx";
import Container from "./components/Container.jsx";
import Container_image from "./components/Container_image";
import Most_popular from "./components/Most_popular.jsx";
import Navbar from "./components/Navbar";
import Recommended_container from "./components/Recommended_container.jsx";
import Recommended_next from "./components/Recommended_next.jsx";
import Topics_recommended from "./components/Topics_recommended.jsx";


function App() {
  return (
    <>
    <Navbar/>
    <Container/>
    <Container_image/>
    <Recommended_container/>
    <Topics_recommended/>
    <Most_popular/>
    <Recommended_next/>
    <Black_box/>
    </>
  );
}

export default App;
