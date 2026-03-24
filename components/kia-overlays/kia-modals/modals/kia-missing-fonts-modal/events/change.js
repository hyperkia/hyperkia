import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {    
    static handler(e) {
        if (props.eTarget.matches('.uploadCustomFont-input')) this.replaceByNewFont();
    }  

    static replaceByNewFont(){
        const itemEl = props.eTarget.closest('.missing-item');
        const key = itemEl.dataset.font;
        props.fonts[key].data = itemEl.querySelector('.uploadCustomFont-input').files[0];        
        props.fonts[key].status = true;
    }  
}

export default Index;