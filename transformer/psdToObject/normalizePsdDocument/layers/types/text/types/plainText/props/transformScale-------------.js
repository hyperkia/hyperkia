function Index(l){
	const t = l.text?.transform || undefined;
	return {
		transform: `matrix(${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)}, ${t[3].toFixed(2)}, ${t[4].toFixed(2)}, ${t[5].toFixed(2)})`
	}
}

export default Index;