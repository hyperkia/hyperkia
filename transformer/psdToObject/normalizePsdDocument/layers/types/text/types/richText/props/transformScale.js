function Index(l){
	const result = {};
	const t = l.text?.transform;
	if(t) {
		result.scale = `${t[0]} ${t[3]}`;
		result['transform-origin'] = '0 0';
	} 

	return result;
}

export default Index;