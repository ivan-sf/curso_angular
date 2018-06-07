

var app = angular.module("App-Local-Storage", ["LocalStorageModule"])
app.controller("localStorage",['$scope','$http','localStorageService', function($scope,$http,localStorageService){

  if(localStorageService.get("angular-myToDoList")){
    $scope.tareas = localStorageService.get("angular-myToDoList");
  }
  else{
  $scope.tareas = [];
  }

 $scope.titulo = "Local Storage";
 $scope.subtitulo = "Agregar tareas y guardar en local storage";

 $scope.$watchCollection('tareas',function (newValue,oldValue) {
 	localStorageService.set("angular-myToDoList",$scope.tareas);
 })

 $scope.agregarTarea = function () {
 	$scope.tareas.push($scope.nuevaTarea);
 	$scope.nuevaTarea = {};
 	
 }

 $scope.limpiar = function() {
 	$scope.tareas = [];
 }
}]);﻿