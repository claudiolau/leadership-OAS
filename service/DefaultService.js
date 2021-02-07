'use strict';


/**
 * Return a list of the competition files.
 *
 * competitionId Integer 
 * returns Files
 **/
exports.getCompetitionFiles = function(competitionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return a list of competitions.
 * Every inactive competion has been filtered. 
 *
 * returns Competitions
 **/
exports.getCompetitions = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns Success
 **/
exports.getHealth = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Accept the competition terms of use.
 * User must accept each competition terms of use. 
 *
 * competitionId Integer 
 * returns Success
 **/
exports.postCompetitionAgreement = function(competitionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return a file url.
 *
 * competitionId Integer 
 * fileId Integer 
 * returns Download
 **/
exports.postCompetitionFile = function(competitionId,fileId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "FL_insurance_sample.csv.zip",
  "url" : "http://spatialkeydocs.s3.amazonaws.com/FL_insurance_sample.csv.zip",
  "fileId" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return a list of file urls.
 *
 * competitionId Integer Competition Identifier
 * returns Downloads
 **/
exports.postCompetitionFiles = function(competitionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Submit file to the competition.
 * Submit file relative to competition
 *
 * competitionId String 
 * submissionFile File 
 * submissionAnalysis String 
 * submissionApplication String 
 * submissionNote String  (optional)
 * returns Success
 **/
exports.postCompetitionSubmit = function(competitionId,submissionFile,submissionAnalysis,submissionApplication,submissionNote) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

