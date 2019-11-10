/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.0.188"], // Set [] to allow all IP addresses.

	language: 'de',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			clockBold: true,
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'Kalender',
			position: 'top_left',
			maximumEntries: 15,
			config: {
				//maximumNumberOfDays: '60',
				calendars: [
					{
						symbol: 'calendar-o',
						url: 'http://192.168.0.253/baikal/cal.php/calendars/mirko/default?export',
						user: 'mirko',
						pass: 'm1rk0',
						maximumEntries: 15
					},
					{
						symbol: 'trash-o',
						url: 'http://192.168.0.253/baikal/cal.php/calendars/mirko/muell?export',
						user: 'mirko',
						pass: 'm1rk0',
						maximumEntries: 3
					},
					// {
					// 	symbol: 'trash-o',
					// 	url: 'https://service3.stuttgart.de/lhs-services/aws/api/ical?street=Im%20Betzengaiern&streetnr=4',
					// 	maximumEntries: 3
					// },
					{
						symbol: 'birthday-cake',
						url: 'http://192.168.0.253/baikal/cal.php/calendars/mirko/birthday?export',
						user: 'mirko',
						pass: 'm1rk0',
						maximumEntries: 3
					},
					{
            			url: 'webcal://ifeiertage.de/bw-.ics',
            			symbol: 'star',
            			maximumEntries: 5,
        			}
				]
			}
		},
		{
	        module: 'MMM-Wunderlist-Enhanced',
	        position: 'upper_third',  // This can be any of the regions. Best results in left or right regions.
	        header: 'Einkaufsliste', // This is optional
	        config: {
	            // See 'Configuration options' for more information.
	            accessToken: '765170aa44e0b4ea434602981f944f290cd3d06b6d238a566cb6ac886ae0',
	            clientID: '09469070e011cb037ead',
	            lists: ['Einkaufen'],
	            maximumEntries: 26,
	            interval: 300,
	            fade: true,
	            fadePoint: 0.8
	        }
	    },
	  //  {
	//		module: 'MMM-cul',
//			position: 'bottom_right',
//			header: 'Temperatur',
//			config: {
//			}
//		},

		 {
			module: 'MMM-xiaomi',
			position: 'bottom_left',
			header: 'Temperature / Humidity',
			config: {
	            // See 'Configuration options' for more information.
	            gatewayIP: '192.168.0.9',
	            gatewayToken: 'cfbdb315c0824ccc971917e36922febe',
	            outsideSensorId: '158d0001ad3771',
	            animationSpeed: 10,
	            graphicLayout: false,
	            showHeating: true,
	            showWindow: true,
	            showVentilation: true,
	            showLights: false,
	            showTrend: true,
	            showNotifications: true,
	            audioNotifications: true,
	            celcius: true,
	            rooms:  [
	            	{
		            	name: 'Kinderzimmer',
		            	//name: 'Childrens room',
		            	sortOrder: 40,
		            	devices : ['158d000171840d', '158d00016ccdae']
	            	},
	            	{
		            	name: 'Handarbeit',
		            	//name: 'Storage room',
		            	sortOrder: 70,
		            	devices : ['158d0001635ac2']
	            	},
	            	{
		            	name: 'Wohnzimmer',
		            	//name: 'Living room',
		            	sortOrder: 30,
		            	devices : ['158d0001718447', '158d0001a4ca4f']
	            	},
	            	{
		            	name: 'Schlafzimmer',
		            	//name: 'Master bedroom',
		            	sortOrder: 10,
		            	devices : ['158d0001635bb3', '158d0001a1e587']
	            	},
	            	{
	            		name: 'Bad groß',
	            		//name: 'Main bathroom',
		            	sortOrder: 20,
		            	devices : ['158d00017183de', '158d00016ccd92']
	            	},
	            	{
		            	name: 'Arbeitszimmer',
		            	//name: 'Library',
		            	sortOrder: 50,
		            	devices : ['158d0001635b6a', '158d0001a34811']
	            	},
	            	{
	            		name: 'Bad klein',
	            		//name: 'Guest bathroom',
		            	sortOrder: 60,
		            	devices : ['158d0001635ac8', '158d0001a22e33']
	            	},
	            	{
	            		name: 'Küche',
	            		//name: 'Guest bathroom',
		            	sortOrder: 70,
		            	devices : ['158d0001dcc739']
	            	},
	            	{
		            	name: 'Balkon',
		            	//name: 'Outside',
		            	sortOrder: 100,
		            	devices : ['158d0001ad3771']
	            	},
	            ],
	        }
		},
	  {
			module: 'MMM-max',
			position: 'bottom_right',
			header: 'Heizung / Temperatur',
			config: {
				maxIP: '192.168.0.252',
				twoColLayout: false,
				updateInterval: 5
			}
		},
	    {
			module: 'MMM-FRITZBox-Callmonitor',
			position: 'bottom_center',	// This can be any of the regions. Best results in left or right regions.
			header: "Anrufe", // This is optional
			config: {
				// See 'Configuration options' for more information.
				fritzIP: '192.168.0.1',
				password: 'motzi13#',
				showContactsStatus: false,
				numberFontSize: 40,
				minimumCallLength: 30,
				maximumCallDistance: 1440,
				maximumCalls: 8,
				fade: true,
	      fadePoint: 0.25
			}
		},
	    //{
		// 	module: 'trainconnections-google',
		// 	position: 'bottom_left',
		// 	header: 'Nächste Verbindungen',
		// 	config: {
		// 		//from: 'Markuskirche+Stuttgart', // Departure stations
		// 		fromId: 'ChIJe5loUlLbmUcR4ABBT7Q0GJ4',
		// 		fromName: 'Markuskirche',
		// 		toId: 'ChIJSXWWsLXEmUcRbSpM5Ct0rS0', // Final Station
		// 		toName: 'Olgaeck',
		// 		maximumEntries: '3', // Max departures displayed
		// 	}
		// },
		// {
		// 	module: 'trainconnections-vvs',
		// 	position: 'lower_third',
		// 	header: 'Nächste Verbindungen',
		// 	config: {
		// 		//from: 'Markuskirche+Stuttgart', // Departure stations
		// 		//fromId: '5002411',
		// 		//fromName: 'Markuskirche',
		// 		//toId: '5006119', // Final Station
		// 		//toName: 'Olgaeck',
		// 		fromId: '5006166',
		// 		fromName: 'Peregrinastr',
		// 		toId: '5002061',
		// 		toName: 'Wilhelmsbau',
		// 		maximumEntries: '3', // Max departures displayed
		// 		onlyNonstop: false
		// 	}
		// },
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Stuttgart',
                locationID: '2825297',  //ID from bulk.openweather.org/sample/
                appid: 'bdf4274306fec284ae89ae4bf213cbc3'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Wettervorhersage',
			maxNumberOfDays: 10,
			config: {
	            location: 'Stuttgart',
                locationID: '2825297',  //ID from bulk.openweather.org/sample/
                appid: 'bdf4274306fec284ae89ae4bf213cbc3'
			}
		},
		{
      		module: 'MMM-Sonos',
      		position: 'lower_third', // you may choose any location
      		header: 'Sonos',
      		config: {
     			showRoomName: true,
     			showStoppedRoom: false,
     			showAlbumArt: true
     		}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "Spiegel Online",
						url: "http://www.spiegel.de/schlagzeilen/tops/index.rss"
					},
					{
						title: "Süddeutsche",
						url: "http://rss.sueddeutsche.de/rss/Eilmeldungen"
					},
					{
						title: "Stuttgarter Zeitung",
						url: "http://www.stuttgarter-zeitung.de/stuttgart.rss.feed"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				ignoreOldItems: true,
				ignoreOlderThan: 43200000
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
