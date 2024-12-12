import image2 from '../assets/images/image2.avif'
import image3 from '../assets/images/image3.avif'
import image4 from '../assets/images/image4.avif'
import image5 from '../assets/images/image5.avif'

const Most_popular = () => {
  return (
    <>
          <div class="Most_popular">
        <h1>Most Popular</h1>
        <p>Pick the best fit</p>
    <div class="Recommended-most">
        <div class="coursecard">
            <img src={image2} alt=""/>
            <h3>2023 Python Data Visualization Masterclass</h3>
            <p>Col Stable</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>499 <del>1999</del></p>
        </div>
        <div class="coursecard">
            <img src={image3} alt=""/>
            <h3>Web Development Bootcamp 2023 | Advance</h3>
            <p>Col Stable</p>
            <p>3.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="coursecard">
            <img src={image4} alt=""/>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Stable</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="coursecard">
            <img src={image5} alt=""/>
            <h3>Basic to Advance Java Core Training</h3>
            <p>Col Stable</p>
            <p>2.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
    </div>
</div>
    </>
  )
}

export default Most_popular
