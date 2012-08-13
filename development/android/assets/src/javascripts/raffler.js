function ChoiceCtrl($scope) {
  
  $scope.choices = [
    {text:'Choice 1'},
    {text:'Choice 2'},
    {text:'Choice 3'}
  ];
 
  $scope.addChoice = function() {
    $scope.choices.push({text: $scope.choiceText});
    $scope.choiceText = '';
  };

  $scope.removeChoice = function(choice) {
    if($scope.choices.length > 1) {
      for (var i = 0, length = $scope.choices.length; i < length; i++) {
        if (choice === $scope.choices[i]) {
          $scope.choices.splice(i, 1);
        }
      }
    }
  };

  $scope.choose = function() {
    $scope.chosen = "Go for - " + _.shuffle($scope.choices)[0].text;
    $('#myModal').modal();
  };

  $scope.isInvalid = function() {
    return ($scope.choiceText === undefined || $scope.choiceText === '');
  };
 
}