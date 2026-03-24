
class Index {

	static components = ['kiaCanvas', 'kiaColorPickerPopover'];

	static handler(e){
		Index.components.forEach((c)=>{
			KIA[c]?.init(e); 
		}) 
	}

}

export default Index;