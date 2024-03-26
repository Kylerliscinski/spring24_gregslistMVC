import { generateId } from "../utils/GenerateId.js"

export class House {
  constructor(data) {
    this.id = generateId()
    this.year = parseFloat(data.year)
    this.bedrooms = parseInt(data.bedrooms)
    this.bathrooms = parseFloat(data.bathrooms)
    this.sqft = parseInt(data.sqft)
    this.price = parseFloat(data.price)
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
            <h4 class="card-title text-center text-primary"> ${this.year} | ${this.bedrooms}bed/${this.bathrooms}bath</h4>
            <p class="card-text text-center">${this.sqft}-sqft | ${this.description}</p>
            <p class="bg-primary p-2 rounded text-light fw-bold text-center">$${this.price}</p>
            <button onclick="app.HouseController.deleteHouse('${this.id}')" class="btn btn-danger"><i class="mdi mdi-trash-can"></i></button>
          </div>
        </div>
      </div>
    `
  }
}