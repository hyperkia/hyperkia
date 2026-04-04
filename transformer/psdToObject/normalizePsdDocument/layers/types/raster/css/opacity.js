function Index(l){
	const result = {};
	if(l.opacity && l.opacity != 1) result.opacity = KIA.utils.number.fixedDigits(l.opacity);
	return result;
}

export default Index;