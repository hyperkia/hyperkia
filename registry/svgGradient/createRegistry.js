import normalize from "./normalize.js";
import createKey from "./createKey.js";
import createElement from "./createElement/index.js";


const registry = new Map();
let counter = 0;

  
function Index(stack) {
  let gradientStack = null;
  for(let [sKet, sObj] of Object.entries(stack)) {
    if(sObj.type === 'gradient' && sObj.source === 'psd') gradientStack = sObj;
  }

  if(!gradientStack) return;

  const normalized = normalize(gradientStack);
  const key = createKey(normalized);

  if (registry.has(key)) {
    return registry.get(key);
  }

  const id = `grad-${++counter}`;
  registry.set(key, id);

  const gradientElement = createElement(id, normalized);
  
  if(!gradientElement) return;
  KIA.kiaCanvas.$id.gradientRegistryDefs.appendChild(gradientElement);
  
  return id;
}


export default Index;