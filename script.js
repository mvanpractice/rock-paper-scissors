/* 
* param event takes an event object
*/
function handleBeforeUnload(event) {
   event.preventDefault();
   event.returnValue = '';
}

/* 
* I put the beforeunload event listener (add and remove) in functions.
* Because I will need to control when to trigger and remove this listener.
*/
function addBeforeUnload() {

   window.addEventListener('beforeunload', handleBeforeUnload);

}

function removeBeforeUnload() {

   window.removeEventListener('beforeunload', handleBeforeUnload);

}
