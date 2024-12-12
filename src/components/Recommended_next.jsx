import image10 from '../assets/images/image10.avif'
import image11 from '../assets/images/image11.avif'
import image12 from '../assets/images/image12.avif'
import image13 from '../assets/images/image13.avif'

const Recommended_next = () => {
  return (
    <>
        <div class="Recommended_next">

<div class="coursecard">
    <img src={image10}
        alt=""/>
    <h3>Master AI and ML</h3>
    <p>Col Stable</p>
    <p>4.9 ⭐⭐⭐⭐⭐</p>
    <p>499 <del>1999</del></p>
</div>

<div class="coursecard">
    <img src={image11} alt=""/>
    <h3>Basic to Advance C++ Core Training</h3>
    <p>Col Stable</p>
    <p>2.9 ⭐⭐</p>
    <p>449 <del>1999</del></p>
</div>
<div class="coursecard">
    <img src={image12} alt=""/>
    <h3>Master DevOps Training</h3>
    <p>Col Stable</p>
    <p>4.9 ⭐⭐⭐⭐⭐</p>
    <p>449 <del>1999</del></p>
</div>
<div class="coursecard">
    <img src={image13} alt=""/>
    <h3>Automation Testing Training</h3>
    <p>Col Stable</p>
    <p>2.9 ⭐⭐</p>
    <p>449 <del>1999</del></p>
</div>
</div> 
    </>
  )
}

export default Recommended_next
