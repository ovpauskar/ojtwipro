import axios from 'axios';

export class getPaymentStatus {

    getPayment() {
    const payPromise = axios.get('http://demo9727824.mockable.io/paymnetDetails') 
                            .then(res => res.data)
                            .catch(err => console.log(err));

    
    return payPromise;
  }

}