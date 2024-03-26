import { generateId } from "../utils/GenerateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get HouseCard() {
    return `
    <div class="col-6 col-md-4">
        <div class="card">
          <img class="card-img-top"
            src="${this.imgUrl}"
            alt="">
          <div class="card-body">
            <h2 class="card-title text-center text-primary"> ${this.year} ${this.bedrooms}bed/${this.bathrooms}bath</h2>
            <p class="card-text">${this.sqft}sqft ${this.description}</p>
            <p class="bg-success p-2 rounded text-light fw-bold text-end">$${this.price}</p>
            <button onclick="app.HouseController.deleteHouse('${this.id}')" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
          </div>
        </div>
      </div>
    `
  }



}