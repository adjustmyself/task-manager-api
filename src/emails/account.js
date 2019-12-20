const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'adjustmyself@gmail.com',
        subject: 'Welcome to CRWN-clothing',
        text: `Hi ${name}, Thanks for joining us, please enjoy the shopping time!`
    })
}

const sendByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'adjustmyself@gmail.com',
        subject: 'Account has been removed.',
        html: `<h1>That sad!</h1><p>Hi ${name}, if there any suggestion, please let us know.</p>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendByeEmail
}