import image6 from '../assets/images/image6.avif'
import image7 from '../assets/images/image7.avif'
import image8 from '../assets/images/image8.avif'
import image9 from '../assets/images/image9.avif'

const Recommended_container = () => {
  return (
    
     <div class="recommended_container">
        <h1>Recommended for you</h1>
        <p>Pick the best fit</p>
   
    <div class="Recommended_main">
        <div class="coursecard">
            <img src={image6} alt=""/>
            <h3>2023 Python Data Visualization Masterclass</h3>
            <p>Col Stable</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>499 <del>1999</del></p>
        </div>
        <div class="coursecard">
            <img src={image7} alt=""/>
            <h3>Web Development Bootcamp 2023|Advance</h3>
            <p>Col Stable</p>
            <p>3.9 ⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="coursecard">
            <img src={image8} alt=""/>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Stable</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="coursecard">
            <img src={image9} alt=""/>
            <h3>Basic to Advance Java Core Training</h3>
            <p>Col Stable</p>
            <p>2.9 ⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
    </div>
</div> 
  )
}

export default Recommended_container
