function useAge (age) {
  if (age < 18) {
    console.log('Wait for ' + (18 - age) + ' years.');
  } else if (age < 21) {
    console.log('You can work, pay taxes, drive and so on.'); 
  } else {
    console.log('You can do anything within the law.')
  }
}
useAge(14)
useAge(22)
useAge(19)