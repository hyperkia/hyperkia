function Index(canvas) {
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            if (!blob) return resolve(null);

            const file = new File([blob], "layer.png", {
                type: "image/png",
                lastModified: Date.now()
            });

            resolve(file);
        }, "image/png");
    });
}

export default Index;