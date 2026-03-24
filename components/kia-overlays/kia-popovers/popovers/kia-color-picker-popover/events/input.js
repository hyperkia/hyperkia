import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Input {
    static handler() {
        if (props.eTarget.closest('[data-id="inputslider-hue"]')) this.hueSliderInput();
        if (props.eTarget.closest('[data-id="inputslider-alpha"]')) this.alphaSliderInput();
    }
 
    static hueSliderInput(e) {
        const percent = (props.root.$id.inputsliderHue.value / 360) * 100;
        const rgb = methods.getHueGradientColorAt(percent);
        Object.assign(props.rgba, rgb);
        methods.updateSVBoxBaseColor();
        methods.updateRGBInputs();
        methods.updateAlphaSliderColor();
        methods.updateHexInput();
        methods.eventDispatchedToTarget();
    }

    static alphaSliderInput(e) {
        const value = props.root.$id.inputsliderAlpha.value;
        props.root.$id.inputalpha.value = value;
        props.rgba.a = value / 100;
        methods.eventDispatchedToTarget();
    }

}

export default Input;