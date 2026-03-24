
class Index {

	static components = ['kiaDesignModule', 'kiaCssTag', 'kiaCanvas'];

	static handler(e){
		Index.components.forEach((c)=>{
			KIA[c]?.handleEvents(e);
		})
	}

}

export default Index;