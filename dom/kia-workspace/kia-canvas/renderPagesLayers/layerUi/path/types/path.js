function Index(l) {
    const layerSattrs = structuredClone(l.sattrs);
    delete layerSattrs.fill;
    const svgAttrs = KIA.utils.dom.objectToAttributeString(l.attrs);
    const shapeAttrs = KIA.utils.dom.objectToAttributeString(layerSattrs);	

    let fill = l.sattrs.fill;
    const gradientId = KIA.registry.svgGradient.createRegistry(l.stack);
    if(gradientId) fill = `url(#${gradientId})`;

	return `
		<svg overflow="visible" data-name="${l.name}" class="canvas-layer" xmlns="http://www.w3.org/2000/svg" ${svgAttrs} data-layer="${l.key}">
	        <path ${shapeAttrs} fill="${fill}" data-svgshape="${l.key}"></path>
	    </svg>
    `;
}

export default Index;	