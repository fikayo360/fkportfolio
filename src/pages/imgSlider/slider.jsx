import './slider.css'

const Slider = () => {
    const sliderItems = document.querySelector('.slider-items');
    const items = document.querySelectorAll('.slider-item');
    let currentIndex = 1;
    
    function slideLeft() {
      if (currentIndex >= items.length) {
        currentIndex = 0;
      }
      currentIndex++;
      const translateX = -currentIndex * sliderItems.offsetWidth;
      sliderItems.style.transform = `translateX(${translateX}px)`;
    }

    function slideRight(){
      if(currentIndex <= 0){
        currentIndex = items.length
      }
      currentIndex--
      const translateX = currentIndex * sliderItems.offsetWidth
      sliderItems.style.transform = `translateX(${translateX}px)`
    }
    
    // function startSlider() {
    //   intervalId = setInterval(slideNext, 2000);
    // }
    
    // function stopSlider() {
    //   clearInterval(intervalId);
    // }
    
    // startSlider();
    return (
      <div class="slider">
         <div>
           <img />
           <img />
           <img />
           <img />
         </div>
      </div>
    )
}

export default Slider