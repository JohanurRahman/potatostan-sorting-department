export default {
    data: () => ({
        previousValue: null,
        set: new Set()
    }),
    methods: {
        randomNumber() {
            let result = null;

            while (!result) {
                let n =  Math.floor(Math.random() * 250)
                if (this.set.has(n)) continue
                else this.set.add(result = n)
            }

            return result
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
            return this.randomStr() + Math.floor(Math.random() * 100) + "@mail.com";
        },

        randomName() {
            const str = this.randomStr();
            return str.charAt(0).toUpperCase() + str.substring(1);
        },

        randomUsers(totalUsers) {
            return Array.from(Array(totalUsers), () => ({
                name: this.randomName(),
                email: this.randomMail(),
                potatoes: this.randomNumber(),
            }));
        },
    },
};
