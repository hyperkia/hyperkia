
import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

	static handler(e){
		if(props.eTAction === 'uploadFileInput') this.importFile();
	}

	static async importFile(){
		const file = props.root.$id.uploadFileInput.files[0];
		let parsedData = null;

		if(file.type === 'application/zip') parsedData = await KIA.transformer.fflateZip.zipToProject(file);
		if(file.type === "image/vnd.adobe.photoshop" || file.name.toLowerCase().endsWith(".psd")) parsedData = await KIA.transformer.psdToObject(file);
		KIA.actions.kiaFileImportModal.importProject(parsedData);
		props.root.close();
	}
} 

export default Index;