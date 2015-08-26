'use strict';

var lodash = require('lodash');

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

    $scope.languageSkill = mapSkillsToRadorData(skills.languages);
    $scope.serverFrameworkSkill = mapSkillsToRadorData(skills.serverFrameworks);
    $scope.webTechnologiesSkill = mapSkillsToRadorData(skills.webTechnologies);
    $scope.toolSkills = skills.tools;
    $scope.databaseSkills = skills.databases;

  }

  function mapSkillsToRadorData(skills) {
    return {
      labels: lodash.pluck(skills, 'name'),
      data: lodash.pluck(skills, 'level')
    };
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
