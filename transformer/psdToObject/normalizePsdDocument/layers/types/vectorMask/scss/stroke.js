function Index(l){
	const result = {};
	const s = l.effects?.stroke?.[0];
	if(s && s.enabled !== false) {
		if(s.fillType === 'color') {
			const c = s.color
			if(c) result.stroke = `rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`;
			if(s.size?.value) result['stroke-width'] = s.size?.value+'px';
			if (s.opacity != null && s.opacity !== 1) result['stroke-opacity'] = s.opacity;
		}
	}

	return result;
}

export default Index;