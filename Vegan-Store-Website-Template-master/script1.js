function convertToJson() {
    var form = document.getElementById("myForm");
    var formData = new FormData(form);
    var jsonObject = {};
    formData.forEach(function(value, key){
        jsonObject[key] = value;
    });
    var jsonData = JSON.stringify(jsonObject);
    console.log(jsonData); // You can also save or process this JSON data as needed
}
