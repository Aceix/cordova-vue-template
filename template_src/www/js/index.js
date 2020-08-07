import Vue from 'vue';

// import main app component
import App from '../components/App.vue';

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.setupVue();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display: none;');
        receivedElement.setAttribute('style', 'display: block;');

        console.log('Received Event: ' + id);
    },

    // function to initialise VueJS
    setupVue: function () {
    const vm = new Vue({
      el: '#app',
      components: {
        App
      },
      template: '<App />'
    });
  }
};

app.initialize();