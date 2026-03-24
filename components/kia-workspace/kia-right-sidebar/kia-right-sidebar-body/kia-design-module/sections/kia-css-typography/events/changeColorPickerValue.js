 import props from '../utils/props.js';
 import methods from '../utils/methods.js';

 class Index {

     static handler(e) {
         const c = KIA.state.ui.colorPicker;
         const p = c.target.payload.property;
         if (c.target.type === 'css' && p === 'color') {
            KIA.propInputs.color.value = c.value;
            KIA.managers.css.propsInputToSelection({[p]: c.value});
         }
     }



 }

 export default Index;