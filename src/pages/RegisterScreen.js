import React from "react";
import '../assets/css/registration_page/css/main.css'
import '../assets/css/registration_page/vendor/datepicker/daterangepicker.css'
import '../assets/css/registration_page/vendor/select2/select2.min.css'
import '../assets/css/registration_page/vendor/font-awesome-4.7/css/font-awesome.min.css'
import '../assets/css/registration_page/vendor/mdi-font/css/material-design-iconic-font.min.css'




const RegisterScreen = () => {
  return (

    <div>
        <div>
  
    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
            <div class="card card-4">
                <div class="card-body">
                    <h2 class="title">Registration Form</h2>
                    <form method="POST">
                        <div class="row row-space">
                           
                                <div class="input-group">
                                    <label class="label">Name</label>
                                    <input class="input--style-4" type="text" name="first_name"/>
                                </div>
                         
                            <div class="col-2">
                            <div class="input-group">
                            <label class="label">Email</label>
                                    <input class="input--style-4" type="email" name="email"/>
                                </div>
                              
                            </div>
                         
                            <div class="input-group">
                            <label class="label">Email</label>
                                    <input class="input--style-4" type="email" name="email"/>
                                </div>
                        
                            
                            
                           
                        </div>
                      
                  
                      
                       
                        <div class="p-t-15">
                            <button class="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>

  );
};


export default RegisterScreen;
