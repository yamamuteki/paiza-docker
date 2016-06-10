function runCode(){
  $("#run_button").text("実行中...").prop("disabled", true);

  var language = $("#language").val();
  var source_code = aceEditor.getValue();
  var input = $("#input").val();
  $.ajax({
    url: "http://api.paiza.io/runners/create",
    method: "POST",
    data: {
      language: language,
      source_code: source_code,
      input: input,
      longpoll: false,
      api_key: 'guest',
    },
  }).done(function(result){
    var sessionId = result.id;
    var retryCount = 0;
    var getResult = function(){
      console.log("getResult");
      $.ajax({
        url: "http://api.paiza.io/runners/get_details?api_key=guest&id=" + sessionId,
        method: "GET",
      }).done(function(result){
        if(result.status == "running" && retryCount++ < 10){
          setTimeout(getResult, 1000);
          return;
        }
        console.log("result:", result);
        $("#stdout").text(result.stdout);
        $("#stderr").text(result.stderr);
        $("#time").text(result.time);
        $("#exit_code").text(result.exit_code);
        $("#run_button").text("実行(Ctrl-Enter)").prop("disabled", false);
      }).fail(function(error){
        alert("Request Fialed:" + error);
        $("#run_button").text("実行(Ctrl-Enter)").prop("disabled", false);
      });
    };
    getResult();
  }).fail(function(error){
    alert("Request Fialed:" + error);
    $("#run_button").text("実行(Ctrl-Enter)").prop("disabled", false);
  });
}
