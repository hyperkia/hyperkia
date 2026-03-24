import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {    
    static handler(e) {
        if (e.detail.source.matches('.available-fonts')) this.replaceByNewFont();        
    }

    static replaceByNewFont(){   
        const itemEl = props.eTarget.closest('.missing-item');
        const key = itemEl.dataset.font;
        props.fonts[key].data = itemEl.querySelector('.available-fonts').value;
        props.fonts[key].status = true;      
    }
}

export default Index;