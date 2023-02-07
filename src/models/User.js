const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [3, 'Username is too short!'],
    },
    password: {
        type: String,
        required: true,
        minLength: [4, 'Password is too short!'],
    },
})

userShema.pre('save', function (next) {
    //може  с async вместо next-> userShema.pre('save', async function () {;await bcrypt.hash(this.password, 10)
    //function (next) e promisse 
    //в последния момент преди да save а user подменяме password с hash.
    //Спазваме условието,че никъде не сме запазили паролата,само сме я използвали

    bcrypt.hash(this.password, 10)// saltOrRounds=10
        .then(hash => {
            this.password = hash;
            next()
        })
    // this е текущата инстанция на модела/текущия user
});
userShema.method('validatePassword', function (password) {

    return bcrypt.compare(password, this.password);
});



const User = mongoose.model('User', userShema);//създава група в базата данни

module.exports = User;