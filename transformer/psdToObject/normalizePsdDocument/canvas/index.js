
import props from '../../props/index.js';

function Index(data){
	return {
		pagesOrder: [Object.keys(data.pages)[0]],
	}
}

export default Index;