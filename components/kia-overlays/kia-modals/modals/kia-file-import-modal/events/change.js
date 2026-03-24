
import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

	static handler(e){
		if(props.eTAction === 'uploadFileInput') this.importFile();
	}

	static async importFile(){
		const file = props.root.$id.uploadFileInput.files[0];
		const parsedData = await KIA.parsers.psdToObject.parse(file);			
		KIA.actions.kiaFileImportModal.importPageAndLayers(parsedData);
		KIA.actions.kiaModals.closeModal();
	}
} 

export default Index;