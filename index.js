const drivers =['d1','d2','d3','d4','d5',]
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
    
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
const  selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultipler = function(fareMultipler){
    return fareMultipler * value;
}

const fareDoubler = createFareMultipler(2);

const fareTriper = createFareMultipliers(3);

function specifiedDrivers(drivers,func){
    return func (drivers);
}