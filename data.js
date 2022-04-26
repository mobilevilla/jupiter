var APP_DATA = {
  "scenes": [
    {
      "id": "0-kuchnia--kitchen",
      "name": "Kuchnia (Kitchen)",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.590667216638602,
          "pitch": 0.13323718177538346,
          "rotation": 0,
          "target": "2-salon2-living-room"
        },
        {
          "yaw": -2.7247483229581686,
          "pitch": 0.10172148064034303,
          "rotation": 0,
          "target": "1-salon1-living-room"
        },
        {
          "yaw": -0.9154073831888674,
          "pitch": 0.0424817223507592,
          "rotation": 0,
          "target": "3-toaleta-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon1-living-room",
      "name": "Salon 1 (Living room 1)",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3900276593741907,
          "pitch": 0.0074967745324610036,
          "rotation": 0,
          "target": "0-kuchnia--kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon2-living-room",
      "name": "Salon 2 (Living room 2)",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08180658800596596,
          "pitch": 0.1286669889637917,
          "rotation": 0,
          "target": "0-kuchnia--kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-toaleta-toilet",
      "name": "Toaleta (Toilet)",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7269441564179218,
          "pitch": 0.1005309856361869,
          "rotation": 0,
          "target": "0-kuchnia--kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Jupiter",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
