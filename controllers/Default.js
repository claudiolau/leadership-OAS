'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.getCompetitionFiles = function getCompetitionFiles (req, res, next) {
  var competitionId = req.swagger.params['competitionId'].value;
  Default.getCompetitionFiles(competitionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCompetitions = function getCompetitions (req, res, next) {
  Default.getCompetitions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHealth = function getHealth (req, res, next) {
  Default.getHealth()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCompetitionAgreement = function postCompetitionAgreement (req, res, next) {
  var competitionId = req.swagger.params['competitionId'].value;
  Default.postCompetitionAgreement(competitionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCompetitionFile = function postCompetitionFile (req, res, next) {
  var competitionId = req.swagger.params['competitionId'].value;
  var fileId = req.swagger.params['fileId'].value;
  Default.postCompetitionFile(competitionId,fileId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCompetitionFiles = function postCompetitionFiles (req, res, next) {
  var competitionId = req.swagger.params['competitionId'].value;
  Default.postCompetitionFiles(competitionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCompetitionSubmit = function postCompetitionSubmit (req, res, next) {
  var competitionId = req.swagger.params['competitionId'].value;
  var submissionFile = req.swagger.params['submission-file'].value;
  var submissionAnalysis = req.swagger.params['submission-analysis'].value;
  var submissionApplication = req.swagger.params['submission-application'].value;
  var submissionNote = req.swagger.params['submission-note'].value;
  Default.postCompetitionSubmit(competitionId,submissionFile,submissionAnalysis,submissionApplication,submissionNote)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
