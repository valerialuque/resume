import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
       
           <section id="contact">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span></span></h1>
            </div>

            <div className="ten columns flex-container">
                  
           
               <div className="">

					   <h4>Contacto :)</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
                     <span>{email}</span>
                     <span>{message}</span>
					   </p>
				   </div>
             
           

               </div>
            </div>
         </div>
   </section>

         

           
     
 
    );
  }
}

export default Contact;
