function Index(layer) {
  const result = {};

  const fontSize = layer.text.style?.fontSize;
  const scaleX = layer.text?.transform?.[0] || 1;
  const finalFontSize = fontSize * scaleX;

  const leading = layer.text.style?.leading;
  const scaleY = layer.text?.transform?.[3] || 1;
  let finalLeading = leading * scaleY;
  if(finalLeading <= finalFontSize) finalLeading = finalFontSize+10;

  const height = (layer.bottom - layer.top) + (finalLeading - finalFontSize);
  result.height = height + 'px';

  return result;
}

export default Index;