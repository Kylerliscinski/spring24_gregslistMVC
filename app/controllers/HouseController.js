import { AppState } from "../AppState.js";





export class HouseController {
  constructor() {
    console.log('🏠🎮 loaded');
    this.drawHouse()
  }

  drawHouse() {
    console.log('drawing the houses');
    const house = AppState.houses
    let housesHTML = ''
    house.forEach(house => housesHTML += house.HouseCard)
    const houseListElem = document.getElementById('house-list')
    houseListElem.innerHTML = housesHTML
  }
}