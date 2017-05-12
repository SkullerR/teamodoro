// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

			var app = new Vue({
				el: '#app',
				data: {
					message: 'Hello Vusdfewer!'
				}
			})

            var app2 = new Vue({
                el: '#app-2',
                data: {
                    message: 'You loaded this page on ' + new Date()
                }
            })
            
            var app3 = new Vue({
                el: '#app-3',
                data: {
                    seen: true
                },
                methods: {
                    undoSeen: function() {
                        alert('adeus');
                        this.seen = !this.seen;
                    }
                }
            })

            var app4 = new Vue({
                el: '#app-4',
                data: {
                    todos: [
                        { text: 'Learn JavaScript' },
                        { text: 'Learn Vue' },
                        { text: 'Build something awesome' }
                    ]
                }
            })

            var app6 = new Vue({
                el: '#app-6',
                data: {
                    message: 'Hello Vue!'
                }
            })

            Vue.component('todo-item', {
                props: ['todo'],
                template: '<li>{{ todo.text }}</li>'
            })
            var app7 = new Vue({
                el: '#app-7',
                data: {
                    groceryList: [
                        { id: 0, text: 'Vegetables' },
                        { id: 1, text: 'Cheese' },
                        { id: 2, text: 'Whatever else humans are supposed to eat' }
                    ]
                },
                methods: {
                    addToList: function() {
                        //alert('adicionando');
                        this.groceryList.push({
                            id: 4, text: 'Rice'
                        });
                    }
                }
            })

//const Trello = require("node-trello");
//var t = new Trello("294c947e227a53711a6eb7bfe1d5a4cb", "b55fb7dcfca21133ec42537100ce8c166976200cba4507edf53be7a76d5c8e24");

//var AppController = require(__dirname + '/Controllers/AppController.js');
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/trellower');
// var db = mongoose.connection;
 
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {    
    // we're connected!



    // t.get("/1/member/me/boards", function(err, data) {
    //     if (err) {
    //         throw err
    //     };

    //     document.getElementById("content").innerHTML = "<ul>";
            
    //     data.forEach(function(element) {
    //         var item  = '<li>';
    //             item += '<button class="project_btn" data_value="'+element.id+'">'+element.name+'</button>';
    //             item += '</li>';


    //         document.getElementById("content").innerHTML += item;
            
    //     }, this);
    //     document.getElementById("content").innerHTML += "</ul>";
    // });
//});


