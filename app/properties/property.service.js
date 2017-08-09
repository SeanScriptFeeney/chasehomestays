angular.module('property.service', [])

  .factory('propertyService', ['$q', function ($q) {

    var PROPERTIES = [ // Simulate async loading
      {
        id: 1,
        name: 'Lachlan Apartment',
        rooms: [
          {
            roomName: 'One',
            guests: [
              {
                name: "Sean Feeney"
              },
              {
                name: "Charlene Curran"
              }
            ],
            period: '23 days'
          },
          {
            roomName: 'Two',
            guests: [
              {
                name: "Anthony Feeney",
              },
              {
                name: "Valeda Scanlon"
              }
            ],
            period: '23 days'
          }
        ],
        roomsOccupied: '2/2',
        guestCount: 4
      },
      {
        id: 2,
        name: 'Bushey Park Apartment',
        rooms: [
          {
            roomName: 'One',
            guests: [
              {
                name: "Bernadette Feeney"
              },
              {
                name: "Agnes Feeney"
              }
            ],
            period: '23 days'
          },
          {
            roomName: 'Two',
            guests: [
              {
                name: "Colm Feeney",
              },
              {
                name: "Martina Feeney"
              }
            ],
            period: '23 days'
          }
        ],
        roomsOccupied: '2/2',
        guestCount: 4
      }

    ];

    function getProperties() {
      return $q.when(PROPERTIES);
    }

    function getProperty(id) {

      var property;

      for (var i = 0; i < PROPERTIES.length; i++) {
        if (PROPERTIES[i].id == id) property = PROPERTIES[i];
      }

      return $q.when(property);
    }

    function save(id, firstName, lastName) {
      // Find the villain and replace it with the new data
      var index = 0;
      while (index < VILLAINS.length && VILLAINS[index].id !== id) { index += 1; }
      VILLAINS.splice(index, 1, { id: id, firstName: firstName, lastName: lastName });
    }

    return {
      getProperties: getProperties,
      getProperty: getProperty,
      save: save
    };
  }]);
