import '../components-styles/personal-info.scss'
import FormField from './form-field';

function PersonalInfo() {
  return ( 
    <>
      <section id="personal-info">
        <h2>Personal info</h2>
        <p className='instruction'>Please provide your name, email address, and phone number.</p>

      <form id='personal-info-form' autofill="true">
        <FormField
          labelFor='name'
          labelText='Name'
          inputType='name'
          inputName='name'
          inputPlaceholder='e.g. Stephen King'
          inputRegexPattern = '[A-Za-z\s]+'
        />

        <FormField
          labelFor='email-address'
          labelText='Email Address'
          inputType='email'
          inputName='email address'
          inputPlaceholder='e.g. stephenking@lorem.com'
          inputRegexPattern = '[A-Za-z\d+\@\.]+'
        />

        <FormField
          labelFor='phone-number'
          labelText='Phone Number'
          inputType='tel'
          inputName='phone number'
          inputPlaceholder='e.g. +1 234 567 890'
          inputRegexPattern='[\d+\-\s]{8,20}'
        />
      </form>
      </section>
    </>
   );
}

export default PersonalInfo;