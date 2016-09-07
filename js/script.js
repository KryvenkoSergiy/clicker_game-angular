var title = "Clicker game";
var timerCheck = false;
var score = 0;

var clicker = angular.module("clicker", []);

clicker.controller("clickerCtrl", function($scope, $interval) {
    var startBtn = angular.element(document.querySelector('.start-prev'));
    var startLogo = angular.element(document.querySelector('.start-logo'));

    $scope.message = title;

    $scope.timerCount = timerCheck;
    timerCheck != true ? $scope.timerCount = "50" : $scope.timerCount = '0';

    //timer
    function UpdateTime() {
        $scope.timerCount = $scope.timerCount - 1;
        EndTime();
    }

    function EndTime() {
        if ($scope.timerCount <= 0) {
            startBtn.addClass('start-logo')
            startBtn.removeClass('hide')
            $interval.cancel($scope.timer)
        }
    }

    $scope.randomInteger = function(min, max) {
        var rand = min + Math.random() * (max - min)
        rand = Math.round(rand);
        return rand;
    }

    $scope.timerStart = function() {
        $scope.left = $scope.randomInteger(0, 480)
        $scope.top = $scope.randomInteger(0, 280)
        //reset score
        $scope.score = 0;
        //hide start logo
        startBtn.removeClass('start-logo')
        startBtn.toggleClass('hide');
        //reset score
        $scope.timerCount = '50';
        //start timer
        $scope.timer = $interval(UpdateTime, 1000);
    }


    $scope.timerStop = function() {
        $scope.left = $scope.randomInteger(0, 480)
        $scope.top = $scope.randomInteger(0, 280)
        startBtn.addClass('start-logo')
        startBtn.removeClass('hide');
        $interval.cancel($scope.timer);
        $scope.score = 0;
        $scope.timerCount = '50';
    }

    // clicks
    $scope.score = 0;

    $scope.ClickMe = function() {
        $scope.left = $scope.randomInteger(0, 480)
        $scope.top = $scope.randomInteger(0, 280)
        $scope.score = $scope.score + 1;
    }

});