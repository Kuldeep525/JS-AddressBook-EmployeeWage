const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTHS = 160;
const NUM_OF_WORKING_DAYS = 20;
let empWage;
let totalWage = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let totalEmpHrs = 0;


const getWorkingHours = function (empChecks) {
  let empHrs;
  switch (empChecks) {
    case IS_PART_TIME:
      empHrs = PART_TIME_HOURS;

      break;
    case IS_FULL_TIME:
      empHrs = IS_FULL_TIME_HOURS;
      break;
    default:
      empHrs = 0;
      break;

  }
  return empHrs;

}

while (totalEmpHrs <= MAX_HRS_IN_MONTHS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
  totalWorkingDays++;
  empChecks = (Math.floor(Math.random() * 10) % 3);
  empHrs = getWorkingHours(empChecks);
  empWage = empHrs * WAGE_PER_HOUR;

  empDailyWageArr.push(empWage);
  empDailyWageMap.set(totalWorkingDays, empWage);
  totalEmpHrs = totalEmpHrs + empHrs;
}

function findTotal(sum, empWage) {
  return sum + empWage;
}

//Total wage 
totalWage = empDailyWageArr.reduce(findTotal, 0);
console.log("the total wage of employee month :: " + totalWage);

//Day along with wage 
for (let [key, value] of empDailyWageMap) {
  console.log("Day " + key + " wage :: " + value);
}
// finding a day and wage when employee worked full time
for (let [key, value] of empDailyWageMap) {
  if (value === 160) {
    console.log("This is a day : " + key);
  }
}

//Find the first occurrence when Full Time Wage was earned
console.log("the first occurrence when Full Time Wage was earned ::");
for (let [key, value] of empDailyWageMap) {
  if (value === 160) {
    console.log(" day : " + key);
    break;
  }
}

//Check if there is any Part Time Wage
console.log("the number of dayemployee worked parttime are")
for (let [key, value] of empDailyWageMap) {
  if (value === 80) {
    console.log("Day " + key);
  }
}

// check number of day employee worked 
let numberOfDayEmpWorked = 0;
console.log("Numbr of day employee worked full time is ");
for (let [key, value] of empDailyWageMap) {
  if (value === 80 || value === 160) {
    numberOfDayEmpWorked++;

  }
}
console.log("number of days worked are " + numberOfDayEmpWorked);