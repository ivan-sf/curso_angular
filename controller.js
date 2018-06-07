var app = angular.module("Mi-primer-APP-AngularJS", [])
app.controller("nombreControlador",["$scope","$http", function($scope,$http){
 $scope.titulo = "Peticion GET";
 $scope.subtitulo = "Lista JSON";
 $scope.posts = [];
 $http.get("http://jsonplaceholder.typicode.com/posts")
 	.success(function (data) {
 		console.log(data);
 		$scope.posts = data;
 	})
 	.error(function () {
 		
 	});
 $scope.comentarios = [
 	{
 		comentario: "Hola mundo todo bien !",
 		usuario: "Isma"
 	},
 	{
 		comentario: "Hola mundo todos locos !",
 		usuario: "Ivan"
 	}
 ];
 $scope.agregarComentario = function () {
 	$scope.comentarios.push($scope.nuevoComentario);
 	$scope.nuevoComentario = {};
 }
}]);﻿