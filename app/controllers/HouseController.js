import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { getFormData } from "../utils/FormHandler.js";




export class HouseController {
  constructor() {
    console.log('🏠 loaded');
    houseService.loadHouse()
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

  createHouse() {
    event.preventDefault()
    let houseData = getFormData(event.target)
    console.log('Creating a new house', houseData);
    houseService.createHouse(houseData);
    event.target.reset()
    this.drawHouse()
  }

  deleteHouse(houseId) {
    console.log('deleting', houseId);
    houseService.deleteHouse(houseId)
    this.drawHouse()
  }

}