type onNavigateType = (h:string) => void

export class HomeContainer {
    onNavigate:onNavigateType

    constructor(onNavigate: onNavigateType){
        this.onNavigate = onNavigate
        const homeMenuButton = document.getElementById('home-menu-button')
        homeMenuButton.addEventListener('click', () => this.onClick())
    
    }

    onClick(){
  
        this.onNavigate('#menu')
    }
}