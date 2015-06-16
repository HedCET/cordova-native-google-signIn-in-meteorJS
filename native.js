Template.linto.rendered = function() {
    Meteor.autorun(function() {
        if (Meteor.user()) { // alert user availability
            alert(JSON.stringify(Meteor.user()));
        }
    });
};

Template.linto.events({
    'click #linto': function() {
        if (Meteor.isCordova) { // signIn through cordova
            alert("SignIn button clicked");

            Meteor.cordova_g_plus({ // function added by hedcet:cordova-google-plus-native-sign-in
                cordova_g_plus: true,
                profile: ["email", "email_verified", "gender", "locale", "name", "picture", "id"] // customized Meteor.user() pfofile, availabile options ["email", "email_verified", "family_name", "gender", "given_name", "id", "locale", "name", "picture", "profile"]
            });
        } else { // signIn through browser
            alert("there is no browser handler");
        }
    }
});
