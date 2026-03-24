 
import psdToObject from './psdToObject/index.js';
import htmlToObject from './htmlToObject/index.js';
import fontsToObject from './fontsToObject/index.js';

const PARSERS = {
	psdToObject,
	htmlToObject,
	fontsToObject
};


KIA.parsers = PARSERS;