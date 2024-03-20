//More Guests: You've found a bigger dinner table, so there's room for more guests.

let guest_list : string [] = ['yaman','minsa','hiba'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected madam' + guest_list[i] + ',\nwe invited  you on dinner tomorrow.\nThankyou\n')
// }
let not_person :string = 'hiba';
let new_guest :string = 'Kamran Tasoori';
guest_list[2]= new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected madam' + guest_list[i] + ',\nwe invited  you on dinner tomorrow.\nThankyou\n')
// }
guest_list.unshift('tasmiya','ayat','fazeel');
// for(let i=0; i<guest_list.length; i++){
//      console.log('Respected madam' + guest_list[i] + ',\nwe invited you on dinner tomorrow.we found big tabla on we decide to invite 3 more guest \nThankyou\n')
//  }

// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log('/n unfortunately we can not arrange big table , only two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry sir/madam. ${remove_guest}you are not invited  for dinnner.`);
}
for(let i=0; i<guest_list.length; i++){
    console.log('Respected madam' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner \nThankyou\n')
}
guest_list.splice(0,2)
console.log(guest_list);
//Seeing the World: Think of at least five places you’d like to visit.
let places : string [] =['cape town','dehli','faisalabad','bankok','ahemdabad']
console.log('original :' + places);
console.log('copy ' +[...places].sort());
console.log('original :' + places);
console.log('copy ' +[...places].sort().reverse());
console.log('copy ' +[...places].sort().reverse());
console.log('copy ' +[...places].sort());
console.log('copy ' +[...places].sort().reverse());

