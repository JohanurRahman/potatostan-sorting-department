import moment from 'moment'

export default {
    methods: {
        // Return maximum time to  to sort a dataset
        findMaxTimeToComplete(dataSize) {
            if (dataSize >= 20 && dataSize <= 40) {
                return 3;
            }
            if (dataSize > 40 && dataSize <= 60) {
                return 4;
            }
            if (dataSize > 60 && dataSize <= 80) {
                return 6;
            }
            if (dataSize > 80 && dataSize <= 100) {
                return 8;
            }
        },
        calculateScore(usersCount, time) {
            const maxTime = this.findMaxTimeToComplete(usersCount);
            const completionTimeInMinutes = Number(moment.duration(time).asMinutes().toFixed(2));
            // adding 0.01 because if user complete sorting at the exact max time
            return Math.round(Math.max(0, maxTime + 0.01 - completionTimeInMinutes) * 100)
        }
    }
}
