var app = angular.module("Mi-primer-APP-AngularJS", [])
app.controller("nombreControlador", function($scope){
 $scope.frase = "Agregar comentarios";
 $scope.nuevoComentario = {};
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
});﻿