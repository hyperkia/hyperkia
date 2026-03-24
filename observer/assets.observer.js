
const Index = {
	observe(payload) {
		this[payload]?.();
	},
} 

export default Index; 