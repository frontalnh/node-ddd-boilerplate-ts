"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mail_1 = __importDefault(require("@sendgrid/mail"));
class Mailer {
    send(to, title, html) {
        // TODO: Need to validation for parameter
        const mailData = {
            to,
            from: {
                name: 'Shareable Asset',
                email: 'no-reply@bluewhale.foundation'
            },
            subject: title,
            html: html
        };
        return mail_1.default.send(mailData);
    }
    sendToMany(tos, title, html) {
        const mailData = {
            tos,
            from: {
                name: 'Shareable Asset',
                email: 'no-reply@bluewhale.foundation'
            },
            subject: title,
            html: html
        };
        return mail_1.default.send(mailData);
    }
}
exports.mailer = new Mailer();
//# sourceMappingURL=mailer.js.map