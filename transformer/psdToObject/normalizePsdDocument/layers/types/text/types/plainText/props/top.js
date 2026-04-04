function Index(layer) {
  const result = {};
  
  const fontSize = layer.text.style?.fontSize;
  const scaleX = layer.text?.transform?.[0] || 1;
  const finalFontSize = fontSize * scaleX;

  const leading = layer.text.style?.leading;
  const scaleY = layer.text?.transform?.[3] || 1;
  let finalLeading = leading * scaleY;

  const height = layer.top + Math.abs(finalLeading - finalFontSize);
  result.height = height + 'px';

  return result;
}

export default Index;