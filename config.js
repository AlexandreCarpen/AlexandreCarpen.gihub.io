
// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "SUMO Traffic Simulation | Group 8 Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    courseTag: "SMRTTECH 4SC3",

    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Alexandre Carpen",
    program: "B.Tech Automation / Smart Systems",
    university: "McMaster University, Canada",
    email: "carpea1@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official City of Toronto traffic analysis, consultation, or endorsement.",

    long:
      "This website presents a student academic project developed for the Smart Cities and Communities course at McMaster University. The traffic analysis and results are based on SUMO microscopic simulations using assumed traffic demand and vehicle behaviour. They do not represent official City of Toronto traffic data, recommendations, or engineering decisions.",

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

    projectTitle:
      "Roadway and Traffic Modelling at Warden Avenue and Lawrence Avenue East, Toronto",

    heroVideo: "assets/video/video.mp4",

    heroVideoPoster: "",

    heroVideoAlt:
      "SUMO traffic simulation of Warden Avenue and Lawrence Avenue East",

    videoCaption:
      "Project Overview: SUMO Road Network → Traffic Demand → HDV and CAV Simulation → Signal Timing Intervention → Results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",

    backgroundBullets: [
      "Development of a microscopic roadway and traffic simulation using SUMO.",
      "Study area focuses on Warden Avenue and Lawrence Avenue East in Scarborough, Toronto.",
      "Stage A1 develops the roadway network, including junctions, road connections, and lane geometry.",
      "Stage A2 configures traffic demand, vehicle behaviour, routes, and traffic signal timing.",
      "Evaluation of automated vehicles and signal-timing changes to examine potential improvements in traffic flow."
    ],

    problemTitle: "Problem Statement",

    problemBullets: [
      "Developing a connected and functional roadway network from geographic information system (GIS) reference data can be challenging.",
      "Traffic congestion and vehicle interactions near signalized intersections can affect vehicle speeds and road network performance.",
      "The effects of connected automated vehicles (CAVs) on traffic flow need to be evaluated against a human-driven vehicle (HDV) baseline.",
      "Existing signal timing may contribute to vehicle queues and increased density on incoming road approaches.",
      "Simulation results are needed to compare alternative vehicle behaviours and signal-timing strategies."
    ],

    objectivesTitle: "Project Objectives",

    objectivesBullets: [
      "Develop the Stage A1 roadway network and configure Stage A2 traffic demand using SUMO.",
      "Establish a baseline simulation using 100% human-driven vehicles (HDVs).",
      "Compare HDV and connected automated vehicle (CAV) performance using speed-density results on edge E206.",
      "Implement and evaluate a five-second green-time transfer at junction J1.",
      "Compare simulation results using average speed, density, waiting time, and key performance indicators (KPIs)."
    ]
  },

  overview: {
    title: "Methodology",

    steps: [
      {
        title: "Step 1: Road Network Development (SUMO)",

        text:
          "Develop the roadway network around Warden Avenue and Lawrence Avenue East, including road edges, junctions, lane geometry, and internal connections.",

        image: "assets/img/image2.jpg"
      },

      {
        title: "Step 2: Traffic Demand and HDV Baseline (SUMO)",

        text:
          "Configure twelve traffic flows with a nominal total demand of 2,550 vehicles per hour. Establish the baseline simulation using 100% human-driven vehicles.",

        image: "assets/img/image3.jpg"
      },

      {
        title: "Step 3: Connected Automated Vehicle Simulation (SUMO)",

        text:
          "Replace the HDV vehicle types with connected automated vehicles using a cooperative adaptive cruise control (CACC) model. Compare vehicle performance under the same traffic demand and road network conditions.",

        image: "assets/img/image4.jpg"
      },

      {
        title: "Step 4: Signal Timing Intervention and Results Analysis",

        text:
          "Transfer five seconds of green time to the E206-serving phase at junction J1. Compare baseline and intervention results using speed, density, waiting time, and traffic performance indicators.",

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
          {
            text: "Develop the roadway network around Warden Avenue and Lawrence Avenue East using the supplied GIS reference."
          },
          {
            text: "Configure roadway edges, junctions, lane geometry, and connecting routes."
          },
          {
            text: "Retain internal junction connections and verify the selected incoming approach E206."
          }
        ]
      },

      {
        title: "Module 2: Traffic Demand and Vehicle Configuration (SUMO)",

        bullets: [
          {
            text: "Configure twelve traffic flows with a nominal combined demand of 2,550 vehicles per hour."
          },
          {
            text: "Define human-driven vehicle (HDV) and connected automated vehicle (CAV) types."
          },
          {
            text: "Configure vehicle routes, departure times, traffic volumes, and vehicle behaviour."
          },
          {
            text: "Use a 0.1-second simulation step and 100-second edgeData output intervals."
          }
        ]
      },

      {
        title: "Module 3: HDV and CAV Traffic Simulation (SUMO)",

        bullets: [
          {
            text: "Run the baseline simulation with 100% human-driven vehicles."
          },
          {
            text: "Run the CAV scenario using a cooperative adaptive cruise control (CACC) car-following model."
          },
          {
            text: "Compare vehicle speeds and traffic density on the selected incoming edge E206."
          },
          {
            text: "Evaluate the effects of different vehicle-following behaviours on simulated traffic conditions."
          }
        ]
      },

      {
        title: "Module 4: Signal Timing Intervention and Results Analysis",

        bullets: [
          {
            text: "Modify junction J1 signal timing by transferring five seconds from the first green phase to the E206-serving green phase."
          },
          {
            text: "Change the signal phase durations from 27/3/27/3 seconds to 22/3/32/3 seconds while maintaining a 60-second cycle."
          },
          {
            text: "Compare baseline and intervention results using average speed, density, and waiting-time measurements."
          },
          {
            text: "Evaluate traffic performance and identify potential improvements and limitations of the proposed signal timing."
          }
        ]
      }
    ]
  },

  results: {
    title: "Results & Potential Improvements",

    subtitle:
      "SUMO simulation results comparing the 100% HDV baseline, 100% CAV scenario, and revised HDV signal timing. All comparisons use 36 complete 100-second observations over the same simulated hour on incoming edge E206.",

    charts: {
      left: {
        title: "Figure 5 – HDV vs. CAV Speed-Density Comparison",

        src: "assets/img/image6.jpg",

        alt:
          "SUMO speed-density comparison between the 100% HDV baseline and 100% CAV scenario on edge E206."
      },

      right: {
        title: "Figure 6 – HDV Baseline vs. Signal Timing Intervention",

        src: "assets/img/image7.jpg",

        alt:
          "SUMO speed-density comparison between the baseline HDV scenario and revised J1 signal timing on edge E206."
      }
    },

    discussionTitle: "Discussion",

    discussionBullets: [
      "Baseline HDV: Mean speed of 9.114 km/h and mean density of 73.73 vehicles/km on E206.",

      "CAV Scenario: Mean speed increases to 10.095 km/h, while mean density decreases to 65.63 vehicles/km compared with the HDV baseline.",

      "Signal Timing Intervention: Mean speed increases to 12.622 km/h, while mean density decreases to 50.93 vehicles/km.",

      "Signal timing is changed from 27/3/27/3 seconds to 22/3/32/3 seconds, providing an additional five seconds of green time to the E206-serving phase.",

      "The signal intervention also reduces the total waiting-time sum from 5,114.3 seconds to 3,029.7 seconds across the 36 observation intervals.",

      "The results indicate that the signal-timing intervention produces a more substantial improvement on E206 than the CAV scenario in this simulation.",

      "The proposed signal timing requires further testing across all intersection approaches, including pedestrian service, queue lengths, and potential impacts on other traffic movements.",

      "Results are simulation-based and require field calibration, multiple random-seed trials, and additional traffic demand scenarios before real-world implementation."
    ]
  },

  team: {
    title: "Team & Acknowledgments",

    subtitle:
      "Group 8 – McMaster University. This project was completed as part of the Smart Cities and Communities course, focusing on roadway modelling, SUMO traffic simulation, automated vehicles, and signal timing analysis.",

    members: [
      {
        name: "Alexandre Carpen",
        role: "SUMO Simulation Creator"
      },

      {
        name: "Rithik Kottaram",
        role: "Report Creator"
      },

      {
        name: "Marcus Cameron",
        role: "Criteria Checker"
      },

      {
        name: "Shehab Ahmed",
        role: "Team Member"
      }
    ],

    acknowledgments: [
      "Course: SMRTTECH 4SC3 – Smart Cities and Communities",
      "Institution: McMaster University, Hamilton, Ontario, Canada",
      "Course Instructor: Dr. Marjan Alavi, P.Eng., SMIEEE",
      "Lab Instructor: Dr. Ahmad Mohammadi",
      "Tools: SUMO, NETEDIT, Python, GIS"
    ],

    repoLabel: "Project Repository",

    repoUrl: "https://github.com/AlexandreCarpen/REPO"
  }
};
