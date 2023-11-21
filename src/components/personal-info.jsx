import '../components-styles/personal-info.scss'

function PersonalInfo() {
  return ( 
    <>
      <section id="personal-info">
        <h2>Personal info</h2>
        <p className='instruction'>Please provide your name, email address, and phone number.</p>

      <form id='personal-info-form' autofill="true">
        <label htmlFor='name'>Name</label>
        <input type='name' id="name" name="name" placeholder='e.g. Stephen King' required/>

        <label htmlFor='email-address'>Email Address</label>
        <input type='email' id="email-address" name="email address" placeholder='e.g. stephenking@lorem.com' required/>
        
        <label htmlFor='phone-number'> Phone Number</label>
        <input type='tel' id="phone-number" name="phone number" maxLength="20" placeholder='e.g. +1 234 567 890' required/>
      </form>
      </section>
    </>
   );
}

export default PersonalInfo;