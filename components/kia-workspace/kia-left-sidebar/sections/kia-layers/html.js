const html = `
	<section class="section">
		<header class="header">
			<h5>Layers. </h5>			
		</header> 
		<article class="layers scroll-design" data-id="layers">

			<template data-id="page-item-template">
				<div class="page-item">
					<span class="page-name">Layer 1</span>
					<kia-button class="arrow-button" data-icon="angle-right-solid-full-symbol"></kia-button>
				</div>
			</template>

			<template data-id="layer-item-template">
				<div class="layer-item">
					<kia-button class="layer-icon" data-icon="code-solid-full-symbol"></kia-button>
					<span class="layer-name">Layer 1</span>
					<span class="layer-visible mask-image" data-visiblity="visible" data-event="layerVisible"></span>
					<span class="layer-lock mask-image" data-lock="auto" data-event="layerLock"></span>
				</div>
			</template>
						
		</article>		
	</section>
`;

export default html;
