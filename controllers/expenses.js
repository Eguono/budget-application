'use strict';

const firebase = require('../helpers/firebase.js');
let db = firebase.database(),
    ref = db.ref('expenses'),
    fire_base = firebase.auth(),
    expensesRef = ref.child('details');

module.exports.save_expenses = (req, res) => {
    //get data from DOM
    let flex_item = req.body.flex_item,
        amount_spent = req.body.amount_spent,
        userId;
    
    let user = fire_base.currentUser;
    if(user) {
        //get user id
        userId = user.uid;

    expensesRef.child('/' + userId).push({
        flex_item,
        amount_spent
    })
    .then(res.redirect('/dashboard/view-expenses'))
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            return res.render('/dashboard/expenses', {error: errorMessage});
        });
    }
}