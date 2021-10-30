export default {
    methods: {
        randomNumber() {
            return Math.floor(Math.random() * 100);
        },

        randomStr() {
            const chars = "abcdefghijklmnopqrstuvwxyz";
            return Array(8)
                .fill(0)
                .reduce((str) => {
                    str += chars[Math.floor(Math.random() * chars.length)];
                    return str;
                }, "");
        },

        randomMail() {
            return this.randomStr() + this.randomNumber() + "@mail.com";
        },

        randomName() {
            const str = this.randomStr();
            return str.charAt(0).toUpperCase() + str.substring(1);
        },

        randomPotatoes() {
            return this.randomNumber();
        },

        randomUsers(totalUsers) {
            return Array.from(Array(totalUsers), () => ({
                name: this.randomName(),
                email: this.randomMail(),
                potatoes: this.randomPotatoes(),
            }));
        },
    },
};
