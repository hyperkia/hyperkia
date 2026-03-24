

 
class Index {

    static handler(e){
        if (KIA.state.ui.activeTool === 'zoom') KIA.actions.kiaCanvas.changeCanvasZoom(e);
    }

    
}

export default Index;