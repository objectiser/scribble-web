/// Copyright 2014-2015 Red Hat, Inc. and/or its affiliates
/// and other contributors as indicated by the @author tags.
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///   http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.

/// <reference path="scribblePlugin.ts"/>
module Scribble {

  export var RoleController = _module.controller("Scribble.RoleController", ["$scope", "$routeParams", "$http", ($scope, $routeParams, $http) => {

    $scope.moduleName = $routeParams.module;
    $scope.protocolName = $routeParams.protocol;
    $scope.roleName = $routeParams.role;
    
    $scope.projectAction = {
      module: $scope.moduleName,
      protocol: $scope.protocolName,
      role: $scope.roleName
    };
    
    $http.post('/scribble-server/actions/project', $scope.projectAction).success(function(data) {
      $scope.projection = data;
    });

    $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      readOnly: true,
      mode: 'scribble'
    };
  }]);

}
