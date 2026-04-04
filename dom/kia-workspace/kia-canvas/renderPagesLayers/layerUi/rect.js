function Index(l) {
    // if(l.name === 'Shape-bg') console.log(l);
    const svgAttrs = KIA.utils.dom.objectToAttributeString(l.attrs);
    const shapeAttrs = KIA.utils.dom.objectToAttributeString(l.sattrs);

    let fillGradient = undefined;
    if(l.gradient) fillGradient = `url(#${KIA.registry.svgGradient.createRegistry(l.stack)})`;
    if(fillGradient) {
        const layerAttrs = Object.assign({}, l.attrs, {fill: fillGradient})
        shapeAttrs = Object.entries(layerAttrs).map(([k, v]) => `${k}="${v}"`).join(' ');
    }

    let html = '';

    if(l.clipPath) {
        html += `
            <defs>
                <clipPath id="${l.key}-arrow">
                  <rect ${shapeAttrs} data-svgshape="${l.key}"></rect>
                </clipPath>
            </defs>
        `;

        l.clipPath.forEach((c) => {
            const translate = `transform="translate(${c.left}, ${c.top})"`;
            if(c.nodeName === 'img') html += `<image x="${c.left}" y="${c.top}" width="${c.width}" height="${c.height}" href="${c.src}" clip-path="url(#${l.key}-arrow)" />`;
            if(c.nodeName === 'path') html += `<path ${KIA.utils.dom.objectToAttributeString(c.css)} ${translate} d="${c.d}"></path>`;
        })


    } else {
        if(l.nodeName === 'rect') html = `<rect ${shapeAttrs} data-svgshape="${l.key}"></rect>`;
    }

     return `
        <svg overflow="visible" data-name="${l.name}" class="canvas-layer" xmlns="http://www.w3.org/2000/svg" ${svgAttrs} data-layer="${l.key}">${html}</svg>
    `;

}

export default Index;