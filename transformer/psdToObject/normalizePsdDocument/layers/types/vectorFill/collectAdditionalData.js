
import props from '../../../../props/index.js';
import methods from '../methods/index.js';

function normalizeClipBaseLayer(clipBaseLayer){
	const result = [];

	function getChild(layer){
		if(layer.children) {
			layer.children.forEach((c)=> getChild(c))
		} else {
			result.push(layer);
		}
	}
	getChild(clipBaseLayer);

	return result;
}

function Index(obj) {

	const l = props.activeParseLayer.layer;

	// Gradient
	const overlay = l.effects?.gradientOverlay[0]
	if(overlay) objRef.gradient = methods.getGradientData(overlay);
	// Clipping	
	if(l.clipping) {

		obj.clipPath = [];

		const maskLayers = normalizeClipBaseLayer(props.activeParseLayer.clipBaseLayer);		
		
		maskLayers.forEach((ml)=>{

			const mlRect = {
				width: (ml.right - ml.left),
				height: (ml.bottom - ml.top),
				left: ml.left,
				top: ml.top,
			}

			let clipPathShape = null;
			if(ml.vectorMask) {
				const shape = methods.getSvgPathD(ml);
				const c = ml.vectorFill.color;
	  			const fill = `rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`;
				clipPathShape = {
					nodeName: 'path',
					d: shape.d,
					viewBox: shape.viewBox,
					width: (l.right - l.left),
					height: (l.bottom - l.top),
					left: Math.abs(l.left - mlRect.left),
					top: Math.abs(l.top - mlRect.top),
					css: {
						fill,
					}
				};
				
			} else if (ml.placedLayer || l.canvas) {				
				const src = ml.canvas.toDataURL();
				const blobSrc = KIA.utils.string.base64ToBlobUrl(src);
				clipPathShape = {					
					nodeName: 'img',
					src: blobSrc,
					width: (ml.right - ml.left),
					height: (ml.bottom - ml.top),
					left: (mlRect.left - l.left),
					top: (mlRect.top - l.top),
				}
			}
			if(clipPathShape) obj.clipPath.push(clipPathShape);
		})
	}
}

export default Index;