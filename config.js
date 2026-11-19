// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Alexandre Carpen",
    program: "B.Tech Automation / Smart Systems",
    university: "McMaster University, Canada",
    email: "carpea1@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#232A33",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Mini Project A",
    projectTitle: "Sumo Simulation",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): raw video → Traffic Simulation → Blender → Unity → Results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"Smart Cities and Communities lab",
			"Coming up with Github page for the sumo report of mini project one",
			"Showcasing issues, actions and results",
			"In addition to that a video as well"
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"Simulating real-world traffic flow and road network conditions can be challenging",
			"Creating detailed traffic networks and scenarios in SUMO can be time-consuming.",
			"Traditional 2D visualizations offer limited perspective on traffic movement and road infrastructure.",
			"Analyzing and communicating traffic simulation results can be difficult."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Simulate traffic flow, vehicle movement, and road network conditions using SUMO.",
			"Develop traffic scenarios and road networks within SUMO.",
			"Present simulation results through KPIs, figures, and a showcase website",
			"Design and simulate realistic urban traffic scenarios using SUMO."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
       		title: "Step 1: Traffic Network and Scenario Setup (SUMO)",
			text: "Build a simulated road network and configure vehicle routes, traffic flows, and traffic demand.",

        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: Digital Twin Assets Development (Blender)",
				text: "Create 3D traffic assets, including vehicles, buildings, roads, and other urban elements using generative AI and Blender.",
        image: "assets/img/image3.jpg"
      },
      {
			
			title: "Step 3: Traffic Simulation and Scenario Testing (SUMO)",
			text: "Run traffic simulations under different conditions to examine vehicle movement, traffic flow, and congestion.",

        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Results Analysis and Communication (SUMO)",
				text: "Analyze simulation outputs using KPIs, charts, traffic statistics, and a showcase website.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {

		  title: "Module 1: Road Network Development (SUMO)",
			bullets: [
			    { text: "Build an urban road network in SUMO, including roads, intersections, and connecting routes." },
			    { text: "Configure lane numbers, speed limits, and road connections throughout the network." },
			    { text: "Validate the road network using SUMO network editing and simulation tools." }
			],
			
			title: "Module 2: Vehicle and Traffic Demand Configuration (SUMO)",
			bullets: [
			    { text: "Define different vehicle types, including passenger cars, buses, and heavy vehicles." },
			    { text: "Generate vehicle routes and assign traffic flows across the road network." },
			    { text: "Configure vehicle departure times, traffic volumes, and simulation demand." }
			],
			
			title: "Module 3: Traffic Simulation and Scenario Testing (SUMO)",
			bullets: [
			    { text: "Run traffic simulations to observe vehicle movement and interactions across the network." },
			    { text: "Test different traffic demand levels to examine changes in traffic flow and congestion." },
			    { text: "Evaluate the effects of traffic volume and vehicle distribution on overall network performance." }
			],
			
			title: "Module 4: Results Analysis and Communication",
			bullets: [
			    { text: "Extract simulation data, including vehicle counts, average speeds, travel times, and waiting times." },
			    { text: "Compare simulation scenarios using charts, graphs, and key performance indicators (KPIs)." },
			    { text: "Identify congestion patterns, evaluate network performance, and discuss potential traffic improvements." }
			],
       
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
			"Traffic simulation outputs comparing two SUMO scenarios, highlighting vehicle counts, average speeds, travel times, and congestion levels across the road network. Results are for educational purposes only.",
			
			charts: {
			    left: {
			        title: "Scenario 1 – Traffic Flow and Vehicle Performance",
			        src: "assets/img/image6.jpg",
			        alt: "Scenario 1 SUMO traffic simulation showing vehicle counts and average speeds"
			    },
			    right: {
			        title: "Scenario 2 – Traffic Flow and Vehicle Performance",
			        src: "assets/img/image7.jpg",
			        alt: "Scenario 2 SUMO traffic simulation showing vehicle counts and average speeds"
			    }
			},
			
			discussionTitle: "Discussion",
			discussionBullets: [
			    "Scenario 1 establishes a baseline traffic simulation to evaluate vehicle movement and overall road network performance.",
			    "Scenario 2 examines how increased traffic demand influences vehicle movement and traffic conditions.",
			    "Higher traffic volumes can result in reduced average speeds, increased travel times, and greater congestion.",
			    "Intersections and heavily travelled road segments can become bottlenecks as traffic demand increases.",
			    "Comparing simulation scenarios demonstrates how SUMO can be used to evaluate traffic conditions and identify potential improvements to road network efficiency."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Alexandre Carpen", role: "Sumo Sim-creator" },
		{name: "Rithik", role: "report creator"},
		{name: "Marcus", role: "Criteria Checker"}, 
		{name: "Shehab", role: "Team member"}
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/AlexandreCarpen/REPO"
  }
};
