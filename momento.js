angular.module("momento", []);

angular.module("momento")
  .controller('myCtrl', function ($scope) {

  $scope.showDate = false;
  $scope.date = moment().format('MMM Do YYYY');
  $scope.showTime = false;

})

$(document).ready(function () {


    function update() {
      $('#date').fitText(1.3)
      $('#clock').fitText(1.3).html(moment().format('H:mm:ss'));
    }

    setInterval(update, 1000);
});
