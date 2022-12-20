
class Pages{

	constructor(app ,key){

		this.app = app;
		this.routes = {};
		this.key = key;

	}

	homeMain(e , app , fetchProfile){

 	app.firstChild !== null &&	app.firstChild.remove();

	const div = document.createElement("div");

	  fetchProfile.then(res => {
			
			console.log(res);

		div.innerHTML =  `
	<div class = " mt-3 "  >
	<h1 class = " text-center text-white mb-3 "  >Company Profile </h1>
	<h1 class = " skyColor text-center mb-5  " >Lockheed Martin. Your Mission is Ours.</h1>
		<div class = " accordion " >
			<div class = " accordion-item " >
				<h2 class = " accordion-header " >
					<button class = "accordion-button"  data-bs-target ="#collapse2"  data-bs-toggle ="collapse"   >Statistics</button>
				</h2>
				<div class = " collapse accordion-collapse show " id = "collapse2" >
					<div class = " accordion-body d-flex justify-content-between " >
					<ul  class = " list-group ">
						<li class = "list-group-item "  >Company Name : ${res[0].companyName}</li>
						<li class = "list-group-item  " >CEO : ${res[0].ceo} </li>
						<li class = "list-group-item "  >Industry : ${res[0].industry}</li>
						<li class = "list-group-item " >FullTimeEmployees : ${res[0].fullTimeEmployees}</li>
					</ul>

					<ul class = " list-group "  >
						<li class = " list-group-item " >Country : ${res[0].country}</li>
						<li class = " list-group-item "  >State : ${res[0].state}</li>
						<li class = " list-group-item  " >City : ${res[0].city}</li>
						<li class = " list-group-item "  >Address : ${res[0].address} </li>
					</ul>

					<ul class = " list-group "  >
						<li class = " list-group-item "  >Website : <a  class = " text-dark "   href = "https://www.lockheedmartin.com"  >${res[0].website}</a></li>
						<li class = " list-group-item "  >Symbol : ${res[0].symbol}</li>
						<li class = list-group-item >Phone : ${res[0].phone}</li>
						<li class = list-group-item >ExchangeShortName : ${res[0].exchangeShortName}</li>
					</ul>
					</div>
				</div>
			</div>
			<div class = " accordion-item " >
				<h2 class = " accordion-header " >
					<button class = "accordion-button" data-bs-target="#collapse" data-bs-toggle="collapse">
						Description
					</button>
				</h2>
				<div class = "collapse show accordion-collapse "  id = "collapse" >
					<div class = " accordion-body ">
						<p class = "lead"  > ${res[0].description} </p>
					</div>
				</div>
			</div>
		</div>
		<div>

		<h2 class = " text-white  text-center my-4" > Main company Products </h2>

		<div class = " d-flex flex-wrap  justify-content-center "> 

		<div class = " card ms-3 mb-3  "  >
		<img src="/IMG/Lockheed_Martin_F-22.jpg  "  class = "width"   alt="">
		<div class = " card-body "  >
		
		<h3 class = " text-dark " >Name : F22 Raptor</h3>
		<h3 class = " text-dark "  >Type : FighterJet</h3>
		<h3 class = " text-dark " >Introduced : 1997 </h3>
		
		
		</div>
		</div>

		<div class = " card ms-3 mb-3  "  >
		<img src="/IMG/F-16-Block-70-©-Lockheed-Martin.jpg"  class = "width"  alt="">
		<div class = " card-body "  >
		
		<h3 class = " text-dark " >Name : F16 Viper</h3>
		<h3 class = " text-dark "  >Type : FighterJet</h3>
		<h3 class = " text-dark " >Introduced : 1973 </h3>
		
		</div>
		</div>

		<div class = " card ms-3 mb-3  "  >
		<img src="/IMG/51137865911_050dbff791_b.jpg" class = "width" alt="">
		<div class = " card-body "  >
		
		<h3 class = " text-dark " >Name : F15 strike eagle</h3>
		<h3 class = " text-dark "  >Type : FighterJet</h3>
		<h3 class = " text-dark " >Introduced : 1985 </h3>

		</div>
		</div>

		<div class = " card ms-3 mb-3  "  >
		<img src="https://cdn.mos.cms.futurecdn.net/h5DH34KoSQ7z9Vt77KzcEm.jpg" class = "width"  alt="">
		<div class = " card-body "  >
		
		<h3 class = "text-dark " >Name : New Frontiers 2 </h3>
		<h3 class = "text-dark" >Type : Jupiter orbiter </h3>
		<h3 class = "text-dark" >Introduced : 2011 </h3>

		</div>
		</div>

		<div class = " card ms-3 mb-3  "  >
		<img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Mars_Observer_-_MOC2_cb.jpg" class = "width"  alt="">
		<div class = " card-body "  >
		
		<h3 class = "text-dark"  >Name : Mars Orbiter Camera  </h3>
		<h3 class = "text-dark "  >Type : Scientific Instrument </h3>
		<h3 class = "text-dark" >Introduced : 1997 </h3>
		
		</div>
		</div>

		<div class = " card ms-3 mb-3  "  >
		<img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F511/production/_121173726_silver_1.jpg" class = "width"  alt="">
		<div class = " card-body "  >
		
		<h3  class = "text-dark"> Name : Orion</h3>
		<h3 class = " "  >Type : Beyond  LEO Spacecraft </h3>
		<h3  class = "text-dark">Introduced : 2014  </h3>

		
		</div>
		</div>


		<div class = " card ms-3 mb-3  "  >
		<img src="https://www.westwoodenergy.com/wp-content/uploads/2019/11/ERA_Credit_NedDawson_316_colour.png" class = "width"  alt="">
		<div class = " card-body "  >
		
		<h3 class = "text-dark">Name : Sikorsky S-92 </h3>
		<h3 class = "text-dark">Type : Transport Helicopter </h3>
		<h3 class = "text-dark">Introuced : 1998 </h3>
		
		</div>
		</div>

		<div class = " card ms-3 mb-3  "  >
		<img src="https://www.lockheedmartin.com/content/dam/lockheed-martin/aero/photo/LM-100J/LM-100J%20for%20SHANE%201%20(2).jpg.pc-adaptive.full.medium.jpeg" class = "width"  alt="">
		<div class = " card-body "  >
		
		<h3 class = "text-dark">Name :  LM-100J </h3>
		<h3 class = "text-dark">Type : 	Transport Aircraft </h3>
		<h3 class = "text-dark">Introduced : 1965 </h3>

		</div>
		</div>

		<div class = " card ms-3 mb-3  "  >
		<img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Pesca_1_%283737941060%29.jpg" class = "width"  alt="">
		<div class = " card-body "  >

		<h3 class = "text-dark"  >Name : Sikorsky S-76 </h3>
		<h3 class = "text-dark" >Type : Utility Helicopter  </h3>
		<h3 class = "text-dark">Introduced : 1977  </h3>


		</div>
		</div>

		</div>
		</div>

	</div>
	</div>
	`
	});
	
	app.appendChild(div);

	}

	aboutMain(e , app){

	 app.firstChild.remove();

	const div = document.createElement("div");
	div.innerHTML = `
	
	<div class = "container " >

		<div class = " d-flex   mb-5 "  >
			<div class = " W text-center " >
				<h2 class = "skyColor"  >Our Mission</h2>
					<p class = " text-white px-2 "  >
						We solve complex challenges, advance scientific discovery and deliver 
						innovative solutions to help our customers keep  </br> people safe.
					</p>
			</div>

			<div class = " W text-center "  >
				<h2 class = "skyColor"  >Our Vision</h2>
				<p class = " text-white px-2 " >
					Be the global leader in supporting our customers' missions, strengthening 
					security and advancing  </br> scientific discovery.
				</p>
			</div>
			
			
			<div class = " W2 text-center "  >
				<h2 class = "skyColor" >Our Values</h2>
				<ul class = "text-white px-4 list-unstyled "  >
					<li  >Do What's Right</li>
					<li  >Respect Others</li>
					<li  >Perform With Excellence</li>
				</ul>
			</div>
		</div>
		

		<div class = " d-flex  "  >

			<div class = "W  text-center px-2 " >	
				<h2 class = "skyColor"  >Organization</h2>
				<p class = " text-white " >
					Aeronautics, with approximately $26.7 billion in 2021 sales which includes tactical aircraft, airlift, 
					sustainment and aeronautical research and development lines of business.
					</br></br>
					Space, with approximately $11.8 billion in 2021 sales which includes development of commercial and government satellites, 
					strategic missiles, mission solutions and the deep space exploration lines of business.
					</br></br>
					Missiles and Fire Control, with approximately $11.7 billion in 2021 sales that includes 
					the Terminal High Altitude Area Defense System and PAC-3 Missiles as some of its high-profile programs.
				</p>
			</div>


			<div class = "W text-center px-2 "  >
				<h3 class = "skyColor"  >Where We Are</h3>
				<p class = " text-white" >
					Employees: Approximately 114,000 employees in the United States and internationally
					</br></br>
					Operations: 370+ facilities and 13,700 active suppliers, including suppliers in every U.S. 
					state and more than 900 suppliers in over 60 countries outside the U.S.
					</br></br>
					Headquarters: </br>
					Lockheed Martin Corporation </br>
					6801 Rockledge Drive </br>
					Bethesda, MD 20817 U.S.A.<br>
					(301) 897-6000
				</p>
			</div>
			
			
			<div class = " W2 text-center px-4 "  >
				<h3 class = "skyColor"  >Financial Performance</h3>
				<p class = " text-white " >
					2021 Net Sales: $67 billion 
					2021 Net Earnings: $6.3 billion </br></br>
					Backlog: $135 billion 
					Cash Flow from Operations: $9.2 billion </br></br>
					Stock Symbol : LMT, NY Stock Exchange. 
					Ranked 49th on the 2021 Fortune 500
				</p>
			</div>

		</div>
	</div>


	`
	app.appendChild(div);

	}


	notFoundMain(app){
		
		 app.firstChild.remove();
		const div = document.createElement("div");
		div.innerHTML = 
		`
		<div class = " text-center "  >
			<h1 class = " text-white mb-2" > Oops!</h1>
			<h2 class = " text-white mb-3  " >Page Not Found</h2>
			<a  href = "#/"  class = " btn btn-warning btn-lg w-50 "  >Back to home <i class="bi bi-house-door"></i></a>
		</div>
		`
		app.appendChild(div);

	}

}

class Fetch extends Pages {

	constructor(app , key){

		super(app , key);

	}


	async fetchProfile(key){
	
		const response = await fetch(key);
		const json = await response.json();
		return json
	
	}
}


class Control extends Fetch {

	constructor(app , key){

		super(app , key);
	
	}


getUrl(e , routes , fetchProfile , key){
	
	const url = window.location.hash.slice(1);

	try{
		routes[url]( null , this.app , fetchProfile(key));
	}catch{
		console.error("Pagina inexistenta");
		this.notFoundMain(this.app);
	}

}	

route(path , template){

	this.routes[path] = template;
	
}	

init(){

	this.route("/" , this.homeMain);
	this.route("/about" , this.aboutMain);

	window.addEventListener("load" ,(e) => this.homeMain(e , this.app , this.fetchProfile(this.key)));
	window.addEventListener("hashchange" ,(e) => this.getUrl(e, this.routes , this.fetchProfile , this.key ));

}
}

const control = new Control(document.getElementById("App") , "https://financialmodelingprep.com/api/v3/profile/LMT?apikey=f00f409bc0b76b6b96c175f495f51963");

control.init();


