

function Index(layer) {
  const result = {};

  const height = (layer.bottom - layer.top) + 26;
  result.height = height + 'px';

  return result;
}

export default Index;