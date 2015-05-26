angular.module('F1FeederApp.controller',[]).
controller('driversController', function($scope, ergastAPIservice){

	$scope.nameFileters = null;
	$scope.driversList = [];
	/*$scope.driversList = [

		{
          Driver: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          points: 322,
          nationality: "German",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      {
          Driver: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          points: 207,
          nationality: "Spanish",
          Constructors: [
              {name: "Ferrari"}
          ]
      }
	]; */
	ergastAPIservice.getDrivers().success(function(response){
		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	});
});