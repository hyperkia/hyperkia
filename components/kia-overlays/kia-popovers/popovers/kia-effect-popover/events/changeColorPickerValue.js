 import props from '../utils/props.js';
 import methods from '../utils/methods.js';

 class Index {

     static handler(e) {
         const c = KIA.state.ui.colorPicker;         
         if (c.target.type === 'effect') {
            props.root.$id.color.value = c.value;
         }
     }



 }

 export default Index;