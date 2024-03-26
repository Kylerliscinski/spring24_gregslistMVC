import { AppState } from "../AppState.js";
import { House } from "../models/House.js";



class HouseService {
  createHouse(houseData) {
    console.log('service creating a house', houseData)
    const createdHouse = new House(houseData);
    console.log('🏠', createdHouse);
    AppState.houses.push(createdHouse)
    this.saveHouse()
  }

  saveHouse() {
    let dataString = JSON.stringify(AppState.houses)
    localStorage.setItem('houses', dataString)
  }
  deleteHouse(houseId) {
    let indexToDelete = AppState.houses.findIndex(house => house.id == houseId)
    console.log('deleting', indexToDelete);
    AppState.houses.splice(indexToDelete, 1)
    this.saveHouse()
  }

  loadHouse() {
    let dataString = localStorage.getItem('houses')
    console.log('😊', dataString);
    const houseData = JSON.parse(dataString)
    console.log(houseData);
    if (houseData == null) return

    const house = houseData.map(house => new House(house))
    console.log(house);
    AppState.houses = house
  }
}



export const houseService = new HouseService()