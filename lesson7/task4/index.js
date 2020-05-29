function getMessagesForBestStudents(arrPassed, arrFailed){
    return arrPassed
    .filter(name => !arrFailed.includes(name))
    .map(name => 'Good job, ' + name);
}