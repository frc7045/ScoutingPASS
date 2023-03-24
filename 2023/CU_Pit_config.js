var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "Tank/West Coast<br>",
        "m": "Mechanum<br>",
        "b": "Butterfly/Grashopper<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Floor pickup Cones",
      "code": "fco",
      "type": "bool"
    },
    { "name": "Cone Placement Limit",
      "code": "copl",
      "type": "radio",
      "choices": {
        "f": "Floor<br>",
        "m": "Mid<br>",
        "h": "High<br>"
      },
      "defaultValue":"f"
    },    
    { "name": "Floor pickup Cubes",
      "code": "fcu",
      "type": "bool"
    },
    { "name": "Cube Placement Limit",
      "code": "cupl",
      "type": "radio",
      "choices": {
        "f": "Floor<br>",
        "m": "Mid<br>",
        "h": "High<br>"
      },
      "defaultValue":"f"
    },    
    { "name": "Leave Community",
      "code": "lc",
      "type": "bool"
    },
    { "name": "Crossover Charging Station",
      "code": "ccs",
      "type": "bool"
    },
    { "name": "Balance during Autonomous",
      "code": "bda",
      "type": "bool"
    },
    { "name": "Balance during Endgame",
      "code": "bde",
      "type": "bool"
    },
    { "name": "2nd Game Piece during Autonomous",
      "code": "sgp",
      "type": "radio",
      "choices": {
        "copi": "Cone Picked-up<br>",
        "copl": "Cone Placed<br>",
        "cupi": "Cube Picked-up<br>",
        "cupl": "Cube Placed<br>",
        "np": "Move near piece<br>",
        "n": "Not capable<br>"
      },
      "defaultValue":"n"
    }, 
    { "name": "Any problems of issues, broken mechanisms?",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
