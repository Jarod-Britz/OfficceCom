const users = document.getSelection('#email');

function renderUsers(doc){

}

db.collection('users').get().then(( snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        
    })
    
})