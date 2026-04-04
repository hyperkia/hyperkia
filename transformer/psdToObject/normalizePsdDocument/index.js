
import {readPsd} from './library/ag-psd/ag-psd.mjs';
import props from '../props/index.js';
import pages from './pages/index.js';
import canvas from './canvas/index.js';
import layers from './layers/index.js';
import assets from './assets/index.js';

async function Index() {
	const data = {};
	const buffer = await props.file.arrayBuffer();
	props.psdRaw = readPsd(buffer);	
	data.pages = pages();
	data.layers = await layers(data);
	data.pages[Object.keys(data.pages)[0]].layers = Object.keys(data.layers);
	data.canvas = canvas(data);
	data.assets = assets(data);
	props.psdRaw = null;

	return data;	
}

export default Index;