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
						url: 'http://cotta.synology.me:5000/caldav/mirko/owimcb',
						user: 'mirko',
						pass: 'm1rk0',
						maximumEntries: 15
					},
					// {
					// 	symbol: 'calendar-o',
					// 	url: 'http://192.168.0.253/baikal/cal.php/calendars/mirko/default?export',
					// 	user: 'mirko',
					// 	pass: 'm1rk0',
					// 	maximumEntries: 15
					// },
					{
						symbol: 'trash-o',
						url: 'http://cotta.synology.me:5000/caldav/mirko/lrhnv',
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
						url: 'http://cotta.synology.me:5000/caldav/mirko/ekpiwxa',
						user: 'mirko',
						pass: 'm1rk0',
						maximumEntries: 3
					},
					{
        			url: 'http://i.cal.to/ical/80/baden-wuerttemberg/ferien/a6dff02e.3ffcd70f-aa5bccba.ics',
        			symbol: 'star',
        			maximumEntries: 5,
        	}
				]
			}
		},
		// {
    //     module: 'MMM-bringList',
    //     position: 'middle_center',
    //     header: 'Einkaufen',
    //     config: {
    //         listname: 'Einkaufen',
    //         email: 'mirkoogle@gmail.com',
    //         password: 'pRnknC',
    //         columns: 9,
    //         maxrows: 5,
    //         updateInterval: 60000,
    //         verboseLogging: false
    //     }
    // },
		{
	    module: 'MMM-MicrosoftToDo',
	    position: 'middle_center',	// This can be any of the regions. Best results in left or right regions.
	    header: 'Shopping List', // This is optional
	    config: {
				// Primary account mirkob
	      // oauth2ClientSecret: '7cLqRX@r8Z.ZWQ.Y5jIjJstn8Sr.qiIM',
	      // oauth2RefreshToken: 'OAQABAAAAAAAm-06blBE1TpVMil8KPQ41HYV22rHOgutZ27m--olJtKm3vCZ0DLcdNlKw27H_zk6b7-bRn-ZUpA1HJ5bnT6BG_xNuRRLrBmrT-8E9KqUN9SqxjuUc8V5U-_4-PyL6aHL1_c1qW1h1y5-3EbMHWc9kJO0YiQgawy0CZGJ9lbWW86LLwTy3BSoiq2_XIr3ncEovHlYFq5i2CHFrz5AhslC1DJQJJkFMaVulXR90PyiPN__cjWGle4CcSWjf8RA3nHpWXrp-miagYyR99jU6OFn7NSlcgmkw2dhPeQ5NYMxYzEj9xHePsvSZ-vAZpV6TjY8NzVPYdgLe3nm5_iBWihZVJP4n1mrOyQJm_IsnC289cLBApeF49biT6iirBLjrHIEcsg06d5UUBCp1z9U8gxvR4aDPrh4zXC8JLUgEccjZEV0lhVUTp_gp2GTG4wSIySQo0UUXVDLt402sKnrMB36Ei5a-VQzgcgn7psmruoRBfTYdqyuryb-zjhzv2toHf96nXF1AS8AwcvsiCFK7dB4jbv_pKj0TMApfwvFbMnSbi-FdqKiqPY-fj1UiwDlhWtVVLVFq2yFwW6hOeY-3RKZjpB-JPt5jhuvK2rqYBctReXeL-PBnAPNQUtLvQkJOFb-zYhGQwfvkHBupSuhANEiC5mYl3VgS64Rk0KjEcdWfFYFvin3cdWpfaGXxzDFT0929BlmoHrBlFdpd8xhBxLGUd0cTSKyNZ_YFdUXV-4kL0wko7kTbI8zPzx8n2sPuC8dGre2m__J0nfIy2gLeDD2RNQGC-vRe4CJK7L-2H9z9ROEeLvG-JqcAtm3O3D8f-VPONzL1ghIaifwSVrvKk7SGPnFyZNUKy4JDHxf28zSXI2aNT5cggwnxHAElv3iXA2gWFEFHQhD59WAz0LBowY-98dqGKSrrIpkpU8jI5EHwWyAA',
	      // oauth2ClientId: '9888ceaa-8aa3-47d5-984d-a2f68ef66c47',
	      // listId: 'AQMkADAwATM0MDAAMS1jYTVjLWJiADViLTAwAi0wMAoALgAAAxc685MpzwBMjjVqQ6geYTMBABNTHGPzzrBDo2TwiuZVWAYAA4qzC5wAAAA=', // optional parameter: default value is the "Tasks" list

				// Secondary account mirko30000
				// oauth2ClientSecret: '=S4/w7=9]ho9YjXwHlGs5b5m=Zn6NGF?',
				// oauth2RefreshToken: 'OAQABAAAAAAAm-06blBE1TpVMil8KPQ419bbXUWGJOWHKrFJYezwPSSqH_88MiYFK3Fup8r5nUbgXOSlfXSGRFV_PswKW6O9YnCEd4uhGHfhCWxcc8XclRocRhxoYqSy8PBvzyO0qH72D64p_T-0oNa6P-JO0pe6GOEriXEXl_6S6CgGoP7x-FgHBJrCvxVF0AGCAVwBMDmh8R2MdBWRxv7cp0wt4mfEUJ88Mj66GUr8NMK924XJuBItXbnDaU-EBCQe7FOxsxhWkK84lWgDeRU59peA7Ar-MTWaIugxaQ5nYPAtv8sUjTzseLTv9GGetTCc1L8-Is-dtJNdz8ihIvqqbCDeQgdEZ4i-0GmjF08XuFkG3TwzWdu18jKD2co9D1fH9gLcVHGOQlnoLhZNjkKQ4JW6EWsp9r-Dzpo6VLD5QxMQLzUR6h4ZSqLWfeJ9SQTLMmo-9MFUtURGRLZPysn-oj4jhnZMPPfEtshll_3qFc911ZQ9TpVV_-9r3c5nVrohPkyIwbjOuCPx0F8icNykj8oLOA28obzpIGmwjdFIFpVzBtcYKe7tpex3OUMx6bLEQYCwLbLMqPIeMVGE2qmuz7Wl1AW2rcY17E32uRGHh9r7opmlTsECDwh89sP_8ehA9HK9msQC2b2erOh-9m2YALHvcF9P6oH2js5NjLsCWwUTqjIGTKUpy2A9Zoo7FXLLlZeBO24e138eALCZfcN33AKTFPG7yOQ6lVNM8ntKSrTPb5kGeJew1I_I_dyFGlRw-1EdW7B3Fcw5wOjK0cb1zXqVuXkLhVVt5bzZAJQZhP-BLNnvANvuknnCr3tGPXIJsBf3HYisjpSVlfUanBSAwbae9CqTgBjMS9MtIdtkQKkKtDqfqdEe-gfO1RopxOjU_IFHtZA1SK2zcTEbWuygKYQ8lG6IGw9f_KNbQ4ucm-1YdE4GI3CAA',
				// oauth2ClientId: '80260d4f-584b-40d2-a55f-2ae23e1f3774',
				// listId: 'AQMkADAwATMwMAItMmMxMC1kOTZmLTAwAi0wMAoALgAAA0XBCh7RPSNPj3lhuvf43CMBAJPDhFjLY9BHjKl_3vryE1AAAAJvYgAAAA==', // optional parameter: default value is the "Tasks" list

				// Secondary account mirko30001
				oauth2ClientSecret: 'WHdB=poyWN-La1@BeqbGVOjUANUX7-42',
				oauth2RefreshToken: 'MCZPsb5w!LSQE8RmbbhVx8ekul1aMc59JvlnOV7oxS2U3fD*kME05U8GdQmQXWk5kpIShT*AqIVWM3TAaYGOuh5774uN9e3hK3f3sMJlF89*E0kiEvdKoHU36!klytEH2eXlmym!PCbKRtLc6SUvFuo9Qwsk9guT8MZC*c5xdhxLsU0jiALe5Xph4BuXF0kpOVo7hU0*vBcUNOdRNH17ngPXyh4SWQocmohGglwBfXx5n!XUXlxZhljDur8s34XlvZCgfIqtlAN12ldNLJIdn6TzphwYaq0uKLQieypqp9Laodh1k056YfEaMc98TcGph9PC0Xv5tYvgi51lSuGDgrtZxUN3Gpbk!4c4ann2XtObpAPU5SofxbEWs3xljNkf4qkQWLN7rtSGOCNpI0LL0dUWibac3JwLZSxaJpRgEVhW5',
				oauth2ClientId: 'bd0d081a-c098-4600-9ff6-69631457eca7',
				listId: 'AQMkADAwATM0MDAAMS0yNmU3LTk2MDQtMDACLTAwCgAuAAAD3qi3yJG33Uu-XEJ2gr0PnAEAf46Kgy4GD0_hnXSiS04JHAAAAWwRKgAAAA==', // optional parameter: default value is the "Tasks" list


				showCheckbox: true, // optional parameter: default value is true and will show a checkbox before each todo list item
	      hideIfEmpty: false, // optional parameter: default value is false and will show the module also when the todo list is empty
	      maxWidth: 450, // optional parameter: max width in pixel, default value is 450
	      itemLimit: 200 // optional parameter: limit on the number of items to show from the list, default value is 200
	    }
	  },
		// {
	  //       module: 'MMM-Wunderlist',
	  //       position: 'middle_center',  // This can be any of the regions. Best results in left or right regions.
	  //       header: 'Einkaufsliste', // This is optional
	  //       config: {
	  //           // See 'Configuration options' for more information.
	  //           accessToken: '765170aa44e0b4ea434602981f944f290cd3d06b6d238a566cb6ac886ae0',
	  //           clientID: '09469070e011cb037ead',
	  //           lists: ['Einkaufen'],
	  //           maximumEntries: 26,
	  //           interval: 300,
	  //           fade: true,
	  //           fadePoint: 0.8
	  //       }
	  //   },
		//  {
		// 	module: 'MMM-smarthome',
		// 	position: 'bottom_left',
		// 	header: 'Temperature / Humidity',
		// 	config: {
	  //           // See 'Configuration options' for more information.
	  //           gatewayIP: '192.168.0.9',
	  //           gatewayToken: 'cfbdb315c0824ccc971917e36922febe',
	  //           outsideSensorId: '158d0001ad3771',
	  //           animationSpeed: 10,
		// 					updateInterval: 2,
	  //           graphicLayout: false,
	  //           showHeating: true,
	  //           showWindow: true,
	  //           showVentilation: true,
	  //           showLights: false,
	  //           showTrend: true,
	  //           showNotifications: true,
	  //           audioNotifications: true,
	  //           celcius: true,
		// 					username: 'mirkoogle@gmail.com',
	  //           password: 'tado19pass',
		// 					tadoHome: 404052,
	  //           rooms:  [
	  //           	{
		//             	name: 'Kinderzimmer',
		//             	//name: 'Childrens room',
		//             	sortOrder: 40,
		//             	devices : ['158d000171840d', '158d00016ccdae'],
		// 							zoneId: 7
	  //           	},
	  //           	{
		//             	name: 'Handarbeit',
		//             	//name: 'Storage room',
		//             	sortOrder: 70,
		//             	devices : ['158d0001635ac2']
	  //           	},
	  //           	{
		//             	name: 'Wohnzimmer',
		//             	//name: 'Living room',
		//             	sortOrder: 30,
		//             	devices : ['158d0001718447', '158d0001a4ca4f'],
		// 							zoneId: 3
	  //           	},
	  //           	{
		//             	name: 'Schlafzimmer',
		//             	//name: 'Master bedroom',
		//             	sortOrder: 10,
		//             	devices : ['158d0001635bb3', '158d0001a1e587'],
		// 							zoneId: 1
	  //           	},
	  //           	{
	  //           		name: 'Bad groß',
	  //           		//name: 'Main bathroom',
		//             	sortOrder: 20,
		//             	devices : ['158d00017183de', '158d00016ccd92'],
		// 							zoneId: 2
	  //           	},
	  //           	{
		//             	name: 'Arbeitszimmer',
		//             	//name: 'Library',
		//             	sortOrder: 50,
		//             	devices : ['158d0001635b6a', '158d0001a34811'],
		// 							zoneId: 4
	  //           	},
	  //           	{
	  //           		name: 'Bad klein',
	  //           		//name: 'Guest bathroom',
		//             	sortOrder: 60,
		//             	devices : ['158d0001635ac8', '158d0001a22e33'],
		// 							zoneId: 6
	  //           	},
	  //           	{
	  //           		name: 'Küche',
	  //           		//name: 'Guest bathroom',
		//             	sortOrder: 70,
		//             	devices : ['158d0001dcc739']
	  //           	},
	  //           	{
		//             	name: 'Balkon',
		//             	//name: 'Outside',
		//             	sortOrder: 100,
		//             	devices : ['158d0001ad3771']
	  //           	},
	  //           ],
	  //       }
		// },
		{
        module: 'MMM-Tado',
        position: 'bottom_right',
        config: {
            username: 'mirkoogle@gmail.com',
            password: 'tado19pass',
            updateInterval: 300000
        }
    },
	  // {
		// 	module: 'MMM-max',
		// 	position: 'bottom_right',
		// 	header: 'Heizung / Temperatur',
		// 	config: {
		// 		maxIP: '192.168.0.252',
		// 		twoColLayout: false,
		// 		updateInterval: 2
		// 	}
		// },
	  {
			module: 'MMM-FRITZ-Box-Callmonitor',
			position: 'bottom_right',	// This can be any of the regions. Best results in left or right regions.
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
