export default {
	title: "Dockar",
	url: "https://dockar.axcora.com",
	language: "en",
	description: "Documentation Project for JAMSTACK 11ty eleventy Website Themes Template",
	image: "/media/img/dockarlogo.png",
	favicon: "/media/img/dockarlogo.png",
	show_social_icon: true, // change false if you do not want to show social icon navbar
	show_footer: false, // change false if you do not want to show footer
	show_search: true, // change false if you do not want to show search widget
    search_widget: {
                        nav_title: "Search",
                        modal_title: "Search"
                    },
    github_project: {
                        repo: "https://github.com/axcora/dockar",
                        branch: "main"
                    },
	nav: 
          [
            {
        		name: "Home",
		        link: "/"
	         },
            {
        		name: "About",
		        link: "/about/"
	         },
            {
        		name: "Docs",
		        link: "/doc/introduction/"
	         },
            {
        		name: "Blog",
		        link: "/blog/"
	         },
             {
                 name: "Showcase",
                 link: "/showcase/"
              },
              {
                  name: "Add Site",
                  link: "/addsite/"
               },
             {
                 name: "Sponsor",
                 link: "/sponsor/"
              },
            {
        		name: "Contact",
		        link: "/contact/"
	         }
        ],
	social:
            [
             {
        		title: "Github Repo",
        		icon: "github",
		        link: "https://github.com/mesinkasir/dockar/"
	         },
             {
        		title: "JAMSTACK THEMES",
        		icon: "rocket-takeoff",
		        link: "https://www.hockeycomputindo.com/themes/"
	         },
             {
        		title: "JAMSTACK DEVELOPER",
        		icon: "robot",
		        link: "https://creativitas.dev/services/"
	         }
           ],
	showcase:
             {
        		title: "SHOWCASE",
        		text: "Explore all documentation site developed using dokar",
        		cover: "/media/img/jamstackthemes.jpg",
        		button: 
                     [
                        { 
                            name: "View All Project",
                            icon: "laptop",
                            link: "/showcase/"
                        },
                        { 
                            name: "Add Your Site",
                            icon: "plus-circle",
                            link: "/addsite/"
                        }
                     ]
	         },
	support:
             {
        		title: "Support Us",
        		text: "Buy Me A cup of Coffee",
        		button: 
                     [
                        { 
                            name: "Paypal",
                            icon: "paypal",
                            link: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JVZVXBC4N9DAN"
                        },
                        { 
                            name: "Gumroad",
                            icon: "flower1",
                            link: "https://creativitaz.gumroad.com/coffee"
                        },
                        { 
                            name: "Github",
                            icon: "github",
                            link: "https://github.com/sponsors/mesinkasir/"
                        }
                     ]
	         },
	footer:
            [
             {
        		title: "Get Start",
        		nav: [
                        { 
                            name: "Download",
                            link: "/doc/getstart/download/"
                        },
                        { 
                            name: "Installation",
                            link: "/doc/getstart/install/"
                        },
                        { 
                            name: "Run Project",
                            link: "/doc/runproject/"
                        }
                        { 
                            name: "Configuration",
                            link: "/doc/configuration/"
                        }
                     ]
	         },
             {
        		title: "Pages",
        		nav: [
                        { 
                            name: "Home",
                            link: "/"
                        },
                        { 
                            name: "About",
                            link: "/about/"
                        },
                        { 
                            name: "Blog",
                            link: "/blog/"
                        },
                        { 
                            name: "Docs",
                            link: "/doc/"
                        },
                        { 
                            name: "Contact",
                            link: "/contact/"
                        }
                     ]
	         }
	       ],
	author: {
		name: "Creativitas",
		email: "creativebydre@gmail.com",
		facebook: "https://www.hockeycomputindo.com",
		twitter: "https://www.axcora.com",
		twitter_user: "https://www.hockeycomputindo.com/en/jamstack/",
		url: "https://creativitas.dev"
	}
}
