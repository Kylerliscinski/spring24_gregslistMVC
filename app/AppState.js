import { Car } from './models/Car.js'
import { House } from "./models/House.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  // NOTE working with this stuff you can just get rid of it
  // /**@type {import('./models/Example.js').Example[]} */
  // examples = []


  // NOTE when we updated our constructor to take in a 'data' object, our default cars needed to be updated too
  // cars = [
  //   new Car('dodge', 'neon', 1996, 'orange', 200, 150000, true, 'https://www.carscoops.com/wp-content/uploads/2019/04/30bd62fe-2005-dodge-neon-srt4-bat-auction-60.jpg'),
  //   new Car('mazda', 'miata', 1995, 'white', 20000, 200000, false, 'https://images.topgear.com.ph/topgear/images/2019/02/03/mazda-miata-mt1-1549188870.jpg'),
  //   new Car('tesla', 'cybertruck', 2024, 'silver', 81895, 100, true, 'https://www.digitaltrends.com/wp-content/uploads/2019/12/tesla-cybertruck-1220.jpg?resize=1200%2C630&p=1'),
  //   new Car('toyota', 'tacoma', 2018, 'cement', 35000, 72000, true, 'https://www.purosautos.com/wp-content/uploads/2018/09/2018-Toyota-Tacoma-.jpg')
  // ]

  cars = [
    new Car({
      make: 'dodge',
      model: 'neon',
      year: 1996,
      color: 'orange',
      price: 200,
      mileage: 150000,
      automatic: true,
      imgUrl: 'https://www.carscoops.com/wp-content/uploads/2019/04/30bd62fe-2005-dodge-neon-srt4-bat-auction-60.jpg'
    }),
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1995,
      color: 'white',
      price: 20000,
      mileage: 200000,
      automatic: false,
      imgUrl: 'https://images.topgear.com.ph/topgear/images/2019/02/03/mazda-miata-mt1-1549188870.jpg'
    }),
  ]

  houses = [
    new House({
      year: '1974',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid-century modern home', imgUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })
  ]



}

export const AppState = createObservableProxy(new ObservableAppState())