
import normalizePsdDocument from './normalizePsdDocument/index.js';
import props from './props/index.js';

async function Index(file){
	props.file = file;
	const parseData = await normalizePsdDocument();
	props.file = null;
	return parseData;
}

export default Index;