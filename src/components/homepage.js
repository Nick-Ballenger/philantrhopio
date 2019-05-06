import React, {Component} from 'react';




class homepage extends Component {
  render() {
    return (
      <div className='homepage-wrapper'>
<section class="banner">
<div className="home-img">
<img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="stuffs" className="header-image"></img>
</div>
        
        <p className='header-text'>At Philanthrop.io We are working to make donations of all kinds as seemless and easy as possible. <br/><br/>Whether it's monetary, physical goods, or scheduling volunteer times,  we're here for you every step of the way.</p>
    </section>
    <div className="midContent">
    <div className="card">
    <h2>Volunteer</h2>
    <div className="mid-img">
    <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="educational symbols"  className="content-image"></img>
           
    </div>
    <p className="mid-text">Scheduling volunteers or physical donation pickups has never been easier. Just pick a time and date and get back to doing what you love.</p>

            
           
    </div>
    <div className="card">
    <h2>Donation</h2>
    <div className='mid-img'>
    <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="Three impoverished children" className="content-image"></img>
    </div>
         
          <p className="mid-text">Scheduling and recieving donations shouldn't be tough, so let us take care of all the processing. Just add an amount and an image and you're good to go!</p> 
    </div>
    </div>
    
      </div>
      
     

      
      
    );
  }
}

export default homepage;