/* 
    In order to create a mock API ,
    Mirage.js is used.It is a fake server
    that runs on the client.
    A simple mirage route handler 
    is used to handle the /api/events network 
    requests.
*/
import { createServer } from "miragejs"

createServer({

  routes() {

    this.namespace = "api"

    this.get("/events", () => {
      
      return {
        events: [
          { id: 1, Iname:'Michael Scott',classname: "3 Dimensional Connections", Time:"8:30 AM - 12:00 PM IST",Duration:"30 min",Type:"Finished",Seats:'',Date:'2021-07-10',Attending:'110',SeatsLeft:"",Instructorimage:'https://previews.123rf.com/images/mimagephotography/mimagephotography1602/mimagephotography160200817/53356005-close-up-portrait-of-an-attractive-young-african-american-man-on-white-background.jpg'},
          { id: 2, Iname:'Payal Arora',classname: "The Next Billion and the Rise of Irrational Design", Time:"6:00 PM , 9:30 PM IST",Duration:"2 days",Type:"Registered",Date:'2021-07-11',Attending:'83',SeatsLeft:"",Seats:"Booked",Instructorimage:'https://previews.123rf.com/images/marctran/marctran1903/marctran190300253/122835357-.jpg'},
          { id: 3, Iname:'Don Norman',classname: "Designing your life", Time:"1:30 - 2:30 PM IST",Duration:"45 min",Type:"Register",Seats:"Available",Date:'2021-07-10',Attending:'96',SeatsLeft:"20",Instructorimage:'https://previews.123rf.com/images/nejron/nejron1904/nejron190400874/121899496-hindus-na-castingu.jpg'},
          { id: 4, Iname:'RV Doshi',classname: "Architecture in Everyday life", Time:"8:30 AM - 12:00 PM IST",Duration:"30 min",Type:"Finished",Seats:'',Date:'2021-03-10',Attending:'17',Instructorimage:'https://public-media.interaction-design.org/images/members/1022/profile_pic/medium.2b3381892a5f90d82e503da1b8432810.jpg'},
          { id: 5, Iname:'Kunal Shah',classname: "Talks About CRED", Time:"6:00 PM , 9:30 PM IST",Duration:"2 days",Type:"Registered",Date:'2021-11-11',Seats:"Booked",Attending:'10',SeatsLeft:"",Instructorimage:'https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60eddf33bd254bfba23f621f_5f30f56e0622c7dece7d7271_25_kunal%252525252520shah%252525252520cred.png'},
          { id: 6, Iname:'Nitin Kamath',classname: "Founding Zerodha", Time:"1:30 - 2:30 PM IST",Duration:"45 min",Type:"Register",Seats:"Filling Fast",Date:'2021-03-01',Attending:'112',SeatsLeft:"30",Instructorimage:'https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-06/01/full/1622532143-8731.jpg&width=1200'},
        ],
      }
    })
  },
})