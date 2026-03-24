function Index(canvas){
	return new Promise(resolve=>{
		canvas.toBlob(resolve, "image/png");
	});
}

export default Index;