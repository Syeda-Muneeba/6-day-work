//More Guests: You've found a bigger dinner table, so there's room for more guests.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guest_list = ['yaman', 'minsa', 'hiba'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected madam' + guest_list[i] + ',\nwe invited  you on dinner tomorrow.\nThankyou\n')
// }
var not_person = 'hiba';
var new_guest = 'Kamran Tasoori';
guest_list[2] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected madam' + guest_list[i] + ',\nwe invited  you on dinner tomorrow.\nThankyou\n')
// }
guest_list.unshift('tasmiya', 'ayat', 'fazeel');
// for(let i=0; i<guest_list.length; i++){
//      console.log('Respected madam' + guest_list[i] + ',\nwe invited you on dinner tomorrow.we found big tabla on we decide to invite 3 more guest \nThankyou\n')
//  }
// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log('/n unfortunately we can not arrange big table , only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry sir/madam. ".concat(remove_guest, "you are not invited  for dinnner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected madam' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner \nThankyou\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
//Seeing the World: Think of at least five places you’d like to visit.
var places = ['cape town', 'dehli', 'faisalabad', 'bankok', 'ahemdabad'];
console.log('original :' + places);
console.log('copy ' + __spreadArray([], places, true).sort());
console.log('original :' + places);
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
console.log('copy ' + __spreadArray([], places, true).sort());
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
