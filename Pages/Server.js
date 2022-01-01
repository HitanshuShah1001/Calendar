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
          { id: 2, Iname:'Payal Arora',classname: "The Next Billion and the Rise of Irrational Design", Time:"6:00 PM , 9:30 PM IST",Duration:"2 days",Type:"Registered",Date:'2021-03-11',Attending:'83',SeatsLeft:"",Seats:"Booked",Instructorimage:'https://previews.123rf.com/images/marctran/marctran1903/marctran190300253/122835357-.jpg'},
          { id: 3, Iname:'Don Norman',classname: "Designing your life", Time:"1:30 - 2:30 PM IST",Duration:"45 min",Type:"Finished",Seats:"Available",Date:'2021-07-10',Attending:'96',SeatsLeft:"20",Instructorimage:'https://previews.123rf.com/images/nejron/nejron1904/nejron190400874/121899496-hindus-na-castingu.jpg'},
          { id: 4, Iname:'RV Doshi',classname: "Architecture in Everyday life", Time:"8:30 AM - 12:00 PM IST",Duration:"30 min",Type:"Finished",Seats:'',Date:'2021-03-10',Attending:'17',Instructorimage:'https://public-media.interaction-design.org/images/members/1022/profile_pic/medium.2b3381892a5f90d82e503da1b8432810.jpg'},
          { id: 5, Iname:'Kunal Shah',classname: "Talks About CRED", Time:"6:00 PM , 9:30 PM IST",Duration:"2 days",Type:"Registered",Date:'2021-11-11',Seats:"Booked",Attending:'10',SeatsLeft:"",Instructorimage:'https://assets-global.website-files.com/606cae0c4e05dc45295b04a7/60eddf33bd254bfba23f621f_5f30f56e0622c7dece7d7271_25_kunal%252525252520shah%252525252520cred.png'},
          { id: 6, Iname:'Nitin Kamath',classname: "Founding Zerodha", Time:"1:30 - 2:30 PM IST",Duration:"45 min",Type:"Registered",Seats:"Available",Date:'2021-03-01',Attending:'12',SeatsLeft:"45",Instructorimage:'https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-06/01/full/1622532143-8731.jpg&width=1200'},
          { id: 7, Iname:'Mark Zuckerberg',classname: "Exploring Meta", Time:"3:30 - 4:30 PM IST",Duration:"1 hr",Type:"Registered",Seats:"Booked",Date:'2021-04-01',Attending:'200',SeatsLeft:"",Instructorimage:'https://image.cnbcfm.com/api/v1/image/106872760-1619140354026-gettyimages-962142728-100154525.jpeg?v=1630496196&w=630&h=354'},
          { id: 8, Iname:'Nikhil Kamath',classname: "Dropping out at 14", Time:"4:30 - 5:30 PM IST",Duration:"30 min",Type:"Finished",Seats:"Filling Fast",Date:'2021-05-15',Attending:'112',SeatsLeft:"09",Instructorimage:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2020/12/Nikhil-Kamath.jpg'},
          { id: 9, Iname:'Jack Dorsey',classname: "Founding Square", Time:"5:30 - 6:30 PM IST",Duration:"1 hr",Type:"Finished",Seats:"",Date:'2021-06-14',Attending:'112',SeatsLeft:"",Instructorimage:'https://cdn.britannica.com/w:400,h:300,c:crop/31/217131-050-3DF60FAE/Twitter-founder-Jack-Dorsey-2018.jpg'},
          { id: 10, Iname:'Amit Trivedi',classname: "Composing Music", Time:"6:30 - 7:30 PM IST",Duration:"45 min",Type:"Registered",Seats:"Filling Fast",Date:'2021-08-19',Attending:'112',SeatsLeft:"16",Instructorimage:'https://static.india.com/imageTopics/abcd74ae13d038752d50c6f5670d4b7b.jpg'},
          { id: 11, Iname:'Falguni Nayar',classname: "Breaking Barriers", Time:"1:30 - 2:30 PM IST",Duration:"45 min",Type:"Registered",Seats:"Booked",Date:'2021-03-10',Attending:'112',SeatsLeft:"",Instructorimage:'https://media.vogue.in/wp-content/uploads/2019/11/Falguni-Nayar-1366x768.jpg'},
          { id: 12, Iname:'Indra Nooyi',classname: "Women on Top", Time:"7:30 - 8:30 PM IST",Duration:"45 min",Type:"Finished",Seats:"",Date:'2021-04-06',Attending:'112',SeatsLeft:"",Instructorimage:'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdanschawbel%2Ffiles%2F2017%2F11%2FIndra-Nooyi.jpg'},
          { id: 13, Iname:'Whitney Wolfe',classname: "Bumble Phenomenon", Time:"9:30 - 11:30 AM IST",Duration:"45 min",Type:"Register",Seats:"Filling Fast",Date:'2021-12-12',Attending:'22',SeatsLeft:"33",Instructorimage:'https://static.india.com/wp-content/uploads/2021/02/Bumble.jpg'},
          { id: 14, Iname:'Bill Gates',classname: "Code world", Time:"10:00 - 11:30 AM IST",Duration:"45 min",Type:"Finished",Seats:"Booked",Date:'2021-02-02',Attending:'11',SeatsLeft:"",Instructorimage:'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg?w=1140&hash=2615322238AF387F984167896A2577A8'},
          
        ],
      }
    })
  },
})