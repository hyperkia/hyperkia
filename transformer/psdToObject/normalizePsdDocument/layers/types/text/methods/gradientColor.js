function Index(g) {
    if (!g || g.type !== "gradient") return "";

    const angle = (90 - (g.angle || 0) + 360) % 360;

    let stops = g.stops.map(s => {
        const r = Math.round(s.rgb.r);
        const gVal = Math.round(s.rgb.g);
        const b = Math.round(s.rgb.b);
        const a = s.opacity ?? 1;

        const percent = (s.location * 100).toFixed(2);

        return `rgba(${r}, ${gVal}, ${b}, ${a}) ${percent}%`;
    });

    if (g.reverse) stops.reverse();

    const gradient = `${g.variant}-gradient(${angle}deg, ${stops.join(", ")})`;

    return {
    	'background-image': gradient,
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
		'background-clip': 'text',
		color: 'transparent',
    }
}

export default Index;