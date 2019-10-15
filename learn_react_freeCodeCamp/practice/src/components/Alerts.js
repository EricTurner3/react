import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Alert from 'react-bootstrap/Alert';

//Use of the map statement to iterate through and show all the different types of alerts

function Alerts(){
    return(
        [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ))
    );
            
}

export default Alerts