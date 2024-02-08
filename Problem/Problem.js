function calculateMoney(ticketSale) {
      if(ticketSale < 0) {
            return "Invalud Number";
      }
      const ticketPrice = 120;
      const daroanCost = 500;
      const lanchCost = 8 * 50;
      const totalTicketSale = ticketSale * ticketPrice;
      const totalCost = daroanCost + lanchCost;
      const totalEarning = totalTicketSale - totalCost;
      return totalEarning;
}


function checkName(name) {
      if (typeof name !== "string") {
            return "invalid";
      }
      let nameLastLetter = name[name.length -1].toLowerCase();
      const goodNamesLastLetters = ["a","y","i","e","o","u","w"];
      if (goodNamesLastLetters.includes(nameLastLetter)) {
            return "Good Name";
      }else {
         return "Bad Name";
      }
}



function deleteInvalids(array) {
      if (!Array.isArray(array)) {
            return "Invalid Array";
      }
      const numberArray = array.filter( (value) => {
            return (typeof value === "number" && !isNaN(value) );
      })
      return numberArray;
}


function password(obj) {
      if(obj && !(obj === Object(obj))) {
            return "invalid"
      }
      if(obj.name && obj.birthYear && obj.siteName) {
            const birthYearString = obj.birthYear.toString().length;
            if (birthYearString === 4) {
                  const siteNameFirstLetter = obj.siteName[0].toUpperCase();
                  const siteNamelastLetters = obj.siteName.slice(1);
                  const fullSiteName = siteNameFirstLetter + siteNamelastLetters;
                  return `${fullSiteName}#${obj.name}@${obj.birthYear}`;
            }else {
                  return "invalid" 
            }
      }else {
            return "invalid" 
      }
}


function monthlySavings(arr , livingCost) {
      if ((Array.isArray(arr)) && (typeof livingCost === 'number' && !isNaN(livingCost))) {
            let  bankTax = 0;
            let totalMoney = 0;
            for (value of arr) {
                  if (value >= 3000) {
                        bankTax += 20 / 100 * value;  
                  }
                  totalMoney += value;
            }
            const totaLivingCost = bankTax + livingCost;
            const totalSavings = totalMoney - totaLivingCost;
            if (totalSavings < 0) {
                  return "earn more";
            }else {
                  return totalSavings;
            }
      }else {
            return "invalid input";
      }
}
