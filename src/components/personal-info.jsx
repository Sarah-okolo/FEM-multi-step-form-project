import '../components-styles/personal-info.scss'

function PersonalInfo() {
  return ( 
    <>
      <section id="personal-info-section">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>

      <form>
        <label htmlFor='name'>Name</label>
        <input id="name" name="name" placeholder='e.g. Stephen King'/>

        <label htmlFor='email-address'>Email Address</label>
        <input id="email-address" name="email address" placeholder='e.g. stephenking@lorem.com'/>
        
        <label htmlFor='phone-number'> Phone Number</label>
        <input id="phone-number" name="phone number" placeholder='e.g. +1 234 567 890'/>
      </form>
      </section>
    </>
   );
}

export default PersonalInfo;