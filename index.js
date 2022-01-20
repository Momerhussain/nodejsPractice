var cron = require('node-cron');
const axios = require('axios')
var d=new Date();
console.log(d);

//////////////s  m  h  dom m dow
cron.schedule('* * * * * *', () => {
  console.log('Running a job at 10:45 at America/Sao_Paulo timezone');
  console.log(d);
  getOrders();
},
{

  scheduled: true,
  timezone: "Asia/Karachi"
});



// var CronJob = require('cron').CronJob;
// var job = new CronJob('45 14 * * *', function() {
//   console.log('You will see this message every second');
//   console.log(d);

// }, null, true, 'Asia/Karachi');


const getOrders = async () => {
  try {
    orders = await axios.get('http://localhost:3000/orders/getOrders')
    console.log(orders.data);
  }
  catch (error) {
    console.error(error)
  }
}










// const countBreeds = async () => {
//   const breeds = await getBreeds()

//   if (breeds.data.message) {
//     // console.log(breeds.data)
//     // console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
//   }
// }

// countBreeds();
// getBreeds();