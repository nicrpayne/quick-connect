<div class="ui three column grid">
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img src="/images/avatar/large/daniel.jpg">
      </div>
      <div class="content">
        <a class="header">Daniel Louise</a>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img src="/images/avatar/large/helen.jpg">
      </div>
      <div class="content">
        <a class="header">Helen Troy</a>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img src="/images/avatar/large/elliot.jpg">
      </div>
      <div class="content">
        <a class="header">Elliot Fu</a>
      </div>
    </div>
  </div>
</div> 


                                          // MODAL

                                          {/* WILL BE MODAL */}
            {/* Your Message: */}
            {/* <p>
              "{this.getGreeting()}{" "}
              {this.getGuestNameById(this.state.newMessage.guestId)} and welcome
              to
              {this.getCompanyById(this.state.newMessage.companyId)}! Room
              number{" "}
              {this.getRoomNumberByGuestId(this.state.newMessage.guestId)} is
              now ready you. Enjoy your stay, and let us know if you need
              anything."
            </p>
            Date:
            <br></br>
            <button>Send Message</button> */
            // }



          
        
 

        
              <div className="three column row">


              <div className="column">



               <div className="ui fluid card"> 
                 <div className="select container template">
                   Select Template
                   <select
                     className="ui selection dropdown"
                     value={newMessage.templateId}
                     onChange={(event) =>
                      this.handleChangeFor(event, "templateId")
                    }
                   >
                    {this.props.store.templates.map((template) => (
                      <option key={template.id} value={template.id}>
                        {template.template_name}
                      </option>
                    ))}
                   </select>
                  </div>
                </div>
              </div>
              
             





        
          <div className="column">
            <div className="ui fluid card">
              <div className="select container guest">
                  Select Guest
                  <select
                    className="ui dropdown"
                    type="text"
                    name="select guest"
                    value={newMessage.guestId}
                    onChange={(event) =>
                      this.handleChangeFor(event, "guestId")
                    }
                  >
                    {this.props.store.allGuestsReducer.map((guest) => (
                      <option key={guest.id} value={guest.id}>
                        {guest.first_name}
                        {guest.last_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              </div>





            <div className="column">

              <div className="ui fluid card">
                <div className="select container company">
                  Select Hotel
                  <select
                    defaultValue={{ label: "Hotel" }}
                    className="ui dropdown"
                    type="text"
                    name="select hotel"
                    value={newMessage.companyId}
                    onChange={(event) =>
                      this.handleChangeFor(event, "companyId")
                    }
                  >
                    {this.props.store.allHotelsReducer.map((company) => (
                      <option key={company.id} value={company.id}>
                        {company.company_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            </div>
          

          {/* <div className="one column row">
            <div className="column">
              <button onClick={this.handleClick}>Generate Message</button>
            </div>
          </div> */}
          {/* </div>
          </div> */}
        

   
      
    

