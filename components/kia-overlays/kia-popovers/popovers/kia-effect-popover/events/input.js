import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

    static handler(e) {
        if (props.eTarget.getRootNode().host.matches('.effect-field-item-input')) methods.updateEffect();
    }

}

export default Index;