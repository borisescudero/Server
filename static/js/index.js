//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("Led Encendido");
    	message.destinationName = "borisescudero1@gmail.com/T1";
    	client.send(message);
      

}


function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("Led Apagado");
    	message.destinationName = "borisescudero1@gmail.com/T1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
    
  




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "borisescudero1@gmail.com",
    password: "1805116199Boris.",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("borisescudero1@gmail.com/T2");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "borisescudero1@gmail.com/T1";
    client.send(message);

  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor1").innerHTML=message.payloadString;

  }
  function LED1_On(){
  {document.getElementById('sensor').innerHTML='Led Encendido';}
console.log('SE presiono el boton 1:')
  ;}
function LED1_Off(){
  {document.getElementById('sensor').innerHTML='Led Apagado';}
console.log('SE presiono el boton 2:')
  ;}
  function Hiii(){
  {document.getElementById('sensor1').innerHTML='Boris Escudero';}
console.log('SE presiono el boton 3:')
  ;}
function Hii(){
  {document.getElementById('sensor1').innerHTML='Quinto Semestre';}
console.log('SE presiono el boton 4:')
  ;}  
  
