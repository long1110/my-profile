'use strict';

var LandingCtrl = function($scope, ProfileStore, EducationStore, ExperienceStore, SkillStore, ProjectStore) {
  var self = this;

  function setInitialScope() {
    var profile = ProfileStore.get(),
        educations = EducationStore.getAll(),
        experiences = ExperienceStore.getAll(),
        skills = SkillStore.getAll(),
        projects = ProjectStore.getAll();
    
    $scope.profile = profile;
    $scope.educations = educations;
    $scope.experiences = experiences;
    $scope.skills = skills;
    $scope.projects = projects;
  }

  function onChange() {
    var profile = ProfileStore.get();
    $scope.profile = profile;
  }

  setInitialScope();
  ProfileStore.addChangeListener(onChange);
  $scope.$on('$destroy', function onDestroy() {
    ProfileStore.removeChangeListener(onChange);
  });
};

module.exports = LandingCtrl;
