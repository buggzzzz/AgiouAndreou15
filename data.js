var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.327584874989709,
        "pitch": 0.12906183190180798,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 0.11322449590344519,
          "pitch": 0.079270177282595,
          "rotation": 0,
          "target": "1-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.779940294162122,
        "pitch": 0.011062442734440125,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.3215290233409611,
          "pitch": 0.13195590817977632,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -3.103893484838167,
          "pitch": 0.11316359363767603,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": 2.04788363895507,
          "pitch": 0.09795630665178479,
          "rotation": 5.497787143782138,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.978706208402979,
          "pitch": 0.12513120827143887,
          "rotation": 0,
          "target": "1-dining-room"
        },
        {
          "yaw": -2.4451872670876202,
          "pitch": 0.1132866496323679,
          "rotation": 1.5707963267948966,
          "target": "4-hall"
        },
        {
          "yaw": 0.07686712478238356,
          "pitch": 0.07094858338628995,
          "rotation": 0,
          "target": "3-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4871130884997665,
          "pitch": 0.09308832919121102,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": -2.4036957011301165,
          "pitch": 0.10978026546149877,
          "rotation": 0,
          "target": "7-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9388007068648996,
          "pitch": 0.13297909394990448,
          "rotation": 0,
          "target": "1-dining-room"
        },
        {
          "yaw": 2.289406282876497,
          "pitch": 0.11421707257221847,
          "rotation": 4.71238898038469,
          "target": "2-living-room"
        },
        {
          "yaw": 0.7391388296332515,
          "pitch": 0.1021829226185389,
          "rotation": 0,
          "target": "7-bedroom"
        },
        {
          "yaw": -0.5559877404243352,
          "pitch": 0.08539168975061351,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": -2.228045501742894,
          "pitch": 0.09133788938490106,
          "rotation": 0,
          "target": "5-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.308230873968254,
        "pitch": 0.018341715297395922,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 0.6820971958553166,
          "pitch": 0.12829445552716656,
          "rotation": 0,
          "target": "4-hall"
        },
        {
          "yaw": 0.8362419071243004,
          "pitch": 0.2805340962340299,
          "rotation": 1.5707963267948966,
          "target": "1-dining-room"
        },
        {
          "yaw": 0.8272101088340147,
          "pitch": 0.1370576599335891,
          "rotation": 0.7853981633974483,
          "target": "2-living-room"
        },
        {
          "yaw": 0.4899275238077845,
          "pitch": 0.27882828546404603,
          "rotation": 4.71238898038469,
          "target": "6-kitchen"
        },
        {
          "yaw": 0.4990113406592229,
          "pitch": 0.13959284486356083,
          "rotation": 5.497787143782138,
          "target": "7-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.111517569266333,
          "pitch": 0.02810814872851175,
          "rotation": 0,
          "target": "4-hall"
        },
        {
          "yaw": -1.9589097773325257,
          "pitch": 0.0904276721418622,
          "rotation": 0.7853981633974483,
          "target": "1-dining-room"
        },
        {
          "yaw": -2.2536611155872137,
          "pitch": 0.09802026722032053,
          "rotation": 5.497787143782138,
          "target": "7-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.085707837420439,
          "pitch": 0.09720003329962346,
          "rotation": 0,
          "target": "3-balcony"
        },
        {
          "yaw": -0.9364079377739198,
          "pitch": 0.044484862274920545,
          "rotation": 0,
          "target": "4-hall"
        },
        {
          "yaw": -0.7833292764499511,
          "pitch": 0.04667582059061104,
          "rotation": 0.7853981633974483,
          "target": "6-kitchen"
        },
        {
          "yaw": -1.0649375764840308,
          "pitch": 0.048052224355442874,
          "rotation": 5.497787143782138,
          "target": "5-bathroom"
        },
        {
          "yaw": -1.0705512811019737,
          "pitch": 0.2009726650914807,
          "rotation": 4.71238898038469,
          "target": "1-dining-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
