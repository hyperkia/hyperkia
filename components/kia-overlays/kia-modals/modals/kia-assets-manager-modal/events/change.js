
import props from '../utils/props.js';
import methods from '../utils/methods.js';

class Index {

	static handler(e){
		if(props.eTAction === 'uploadFileInput') {
			KIA.actions.kiaAssetsManagerModal.uploadAssets(props.root.$id.uploadFileInput.files);
		}
	}

} 

export default Index;