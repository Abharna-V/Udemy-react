

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div class="nav_bar_title">
            <h1>Udemy</h1>
        </div>
        <div class="searchbar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="search" placeholder="Search for anytime here" />
        </div>
        <div class="navbar_s1">
            <a href="" id="Courses">Courses</a>
            <a href="" id="My_learning">My learning</a>
        </div>
        <div class="navbar_s2">
            <i class="fa-solid fa-cart-shopping"></i>
            <button id="Login">Login</button>
            <button id="Signup">Signup</button>
        </div>
        <div class="navbar_s3">
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
    </>
  )
}

export default Navbar
