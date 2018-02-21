var app = new Vue({
    el: '#chat-app',
    data: {
        myData: {
            name: 'Anatoliy',
            message: '',
            img: 'images/user3-picture.jpg',
            me: true
        },
        currentInputMessage: '',
        fakeMessages: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Accusamus architecto inventore minus modi molestias repellendus vero.' +
            ' Amet deleniti dicta earum enim error ex exercitationem ipsum laudantium quos,' +
            ' sapiente similique voluptatem!', 'Question 2', 'Hello my friend!', 'How are you?', 'How old are you?'
        ],
        dialogMessages: []
    },
    methods: {
        sendMessage: function (e) {
            e.preventDefault();
            if (this.currentInputMessage.length) {
                console.log(this.currentInputMessage)
                var randomNum = Math.floor(Math.random()*this.fakeMessages.length);
                var randomMessage = this.fakeMessages[randomNum];
                var that = this;
                var myDataCopy = Object.assign({}, this.myData);
                myDataCopy.message = this.currentInputMessage;
                this.dialogMessages.push(myDataCopy);
                this.currentInputMessage = '';
                setTimeout(function () {
                    that.dialogMessages.push({
                        name: 'Yevhenia',
                        message: randomMessage,
                        img: 'images/user4-picture.jpg',
                        me: false
                    });
                }, 2000)
            }
        }
    }
});