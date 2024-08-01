// #This is the JS script with the controllers. In our controllers, we have included various functions below, such as one that states the time of submission, as well as the local time. 


var app = angular.module('class_demo', []);

app.controller("first_controller", function($scope, $timeout, $interval){

    $scope.theTime = new Date().toLocaleTimeString();

    $timeout(function(){
        $scope.my_header = "Submit your form in real time."
    }, 3000)

    $scope.my_num = 1

    $interval(function(){
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000)

    $interval(function(){
        $scope.my_num += 1;
    }, 1000)
})

// #This controller is commanding to get the data, in particular the name, age, city and hobby of the User, from the form. 
app.controller("second_controller", function($scope, $http){

    $http({
        method: 'GET',
        url: 'http://localhost:8082/get_data'
    }).then(function mySuccess(response){
        $scope.my_res = response.data;
    },
    function myError(response){
        $scope.my_err = response;
    })

    $scope.my_post = function(the_name, the_age, the_city, the_hobby){
        $scope.dummy_data = {
            u_name : the_name,
            u_age : the_age,
            u_city : the_city,
            u_hobby : the_hobby
        }
        $http({
            method: 'POST',
            url: 'http://localhost:8082/save_data',
            data: $scope.dummy_data
        }).then(function mySuccess(response){
            $scope.my_res_post = response.data;
        },
        function myError(response){
            $scope.my_err_post = response;
        })
    }

    
})

app.controller("third_controller", function($scope){
})