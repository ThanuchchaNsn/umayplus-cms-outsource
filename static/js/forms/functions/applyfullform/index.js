import './fields.js';
import './stepper.js';


if($('#ApplyFullForm').length > 0){
    dataLayer.push({
        'event': 'CUSTOMER_INFO',
        'pageview': {
            'funnelName': 'applyCashCard',
            'stepNumber': '3',
            'stepName': 'customer_info'
        }
    });
}
