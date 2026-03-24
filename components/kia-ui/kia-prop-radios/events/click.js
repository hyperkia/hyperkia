
import props from '../utils/props.js';

class Index {
  
    static handler(e) {        
        const css = KIA.utils.dom.controlToCss(props.eTarget);
        KIA.managers.css.propsInputToSelection(css);
    }

}

export default Index;