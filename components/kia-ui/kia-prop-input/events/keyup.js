
class Index {
  
    static handler(e) {        
        const css = KIA.utils.dom.controlToCss(e.target);
        KIA.managers.css.propsInputToSelection(css);
    } 

}

export default Index;