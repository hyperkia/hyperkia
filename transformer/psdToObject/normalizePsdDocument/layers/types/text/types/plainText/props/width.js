function Index(layer) {
  const result = {};

  const fontSize = layer.text.style?.fontSize;
  const scaleX = layer.text?.transform?.[0] || 1;
  const finalFontSize = fontSize * scaleX;
  const correction = finalFontSize*0.1;
  const width = (layer.right - layer.left)+correction;
  result.width = width + 'px';

  return result;
}

export default Index;