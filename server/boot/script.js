module.exports = function(app) {
var MongoDB = app.dataSources.MongoDB;

MongoDB.automigrate('Users', function(err) {
  if (err) throw (err);
  var Users = app.models.Users;
  Users.find({ where: { username: 'Admin' }, limit: 1 }, function (err, users) {

  if (!users) {

    Users.create([{username: 'Admin', password: 'admin', name: 'Admin', email: 'admin@admin.com'}
      ], function(err, users) {
        if (err) throw (err);
        var Role = app.models.Role;
        var RoleMapping = app.models.RoleMapping;

        //create the admin role
        Role.create({
          name: 'CLUBOFFICIAL'
        }, function(err, role) {
          if (err) throw (err);
           //make admin
          role.principals.create({
            principalType: RoleMapping.USER,
            principalId: users[0].id
          }, function(err, principal) {
            if (err) throw (err);
          });
        });
          // create the other roles
          Role.create({
            name: 'ATHLETE'
          }, function(err, role) {
            if (err) throw (err);
          });
          Role.create({
            name: 'PARENT'
          }, function(err, role) {
            if (err) throw (err);
          });
          Role.create({
            name: 'AGEMANAGER'
          }, function(err, role) {
            if (err) throw (err);
          });
      });
    } else {
    }
  });
});

MongoDB.automigrate('Events', function(err) {
  if (err) throw (err);
  var Events = app.models.Events;

  Events.find({ where: { kind: 'TIMED' }}, function (err, events) {

  if (!events) {

    Events.create([
        {
            kind: "TIMED",
            name: "100m Run",
            ageGroup: "u13"
        },
        {
            kind: "TIMED",
            name: "200m Run",
            ageGroup: "u13"
        },
        {
            kind: "TIMED",
            name: "400m Run",
            ageGroup: "u13"
        },
        {
            kind: "TIMED",
            name: "800m Run",
            ageGroup: "u13"
        },
        {
            kind: "TIMED",
            name: "1500m Run",
            ageGroup: "u13"
        },
        {
            kind: "TIMED",
            name: "800m Walk",
            ageGroup: "u13"
        },
        {
            kind: "TIMED",
            name: "1500m Walk",
            ageGroup: "u13"
        },
        {
            kind: "TIMED",
            name: "100m Hurdles",
            ageGroup: "u13"
        },
        {
            kind: "TIMED",
            name: "200m Hurdles",
            ageGroup: "u13"
        },
        {
            kind: "DISTANCE",
            name: "Discus",
            ageGroup: "u13"
        },
        {
            kind: "DISTANCE",
            name: "Shotput",
            ageGroup: "u13"
        },
        {
            kind: "DISTANCE",
            name: "Javelin",
            ageGroup: "u13"
        },
        {
            kind: "DISTANCE",
            name: "Long Jump",
            ageGroup: "u13"
        },
        {
            kind: "DISTANCE",
            name: "Triple Jump",
            ageGroup: "u13"
        },
        {
            kind: "HIGHJUMP",
            name: "High Jump",
            ageGroup: "u13"
        },
        {
            kind: "TIMED",
            name: "100m Run",
            ageGroup: "u14"
        },
        {
            kind: "TIMED",
            name: "200m Run",
            ageGroup: "u14"
        },
        {
            kind: "TIMED",
            name: "400m Run",
            ageGroup: "u14"
        },
        {
            kind: "TIMED",
            name: "800m Run",
            ageGroup: "u14"
        },
        {
            kind: "TIMED",
            name: "1500m Run",
            ageGroup: "u14"
        },
        {
            kind: "TIMED",
            name: "800m Walk",
            ageGroup: "u14"
        },
        {
            kind: "TIMED",
            name: "1500m Walk",
            ageGroup: "u14"
        },
        {
            kind: "TIMED",
            name: "100m Hurdles",
            ageGroup: "u14"
        },
        {
            kind: "TIMED",
            name: "200m Hurdles",
            ageGroup: "u14"
        },
        {
            kind: "DISTANCE",
            name: "Discus",
            ageGroup: "u14"
        },
        {
            kind: "DISTANCE",
            name: "Shotput",
            ageGroup: "u14"
        },
        {
            kind: "DISTANCE",
            name: "Javelin",
            ageGroup: "u14"
        },
        {
            kind: "DISTANCE",
            name: "Long Jump",
            ageGroup: "u14"
        },
        {
            kind: "DISTANCE",
            name: "Triple Jump",
            ageGroup: "u14"
        },
        {
            kind: "HIGHJUMP",
            name: "High Jump",
            ageGroup: "u14"
        }
   ], function(err, events) {
   if (err) throw (err);
      });
    } else {
      // It would be good to do some checking here to make sure all of the events exist
    }
    });
  });
};