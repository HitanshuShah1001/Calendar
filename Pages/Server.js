import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/classes", () => {
      return {
        classes: [
          { id: 1, classname: "3 Dimensional Connections", Time:"8:30 AM - 12:00 PM IST",Duration:"30 min",Type:"Finished",Seats:'',Instructorimage:'../assets/Rectangle 83.png'},
          { id: 2, classname: "The Next Billion and the Rise of Irrational Design by Payal Arora", Time:"6:00 PM -13 Feb, 9:30 PM IST",Duration:"2 days",Type:"Registered",Seats:"",Instructorimage:'../assets/favicon.png'},
          { id: 3, classname: "Designing your life", Time:"1:30 - 2:30 PM IST",Duration:"45 min",Type:"Register",Seats:"22",Instructorimage:'../assets/favicon.png'},
        ],
      }
    })
  },
})