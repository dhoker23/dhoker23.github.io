function inp(){
    var input_text,inp_lang,out_lang;
    input_text = document.getElementById("input").value;
    inp_lang = document.getElementById("inplang").value;
    out_lang = document.getElementById("out_lang").value;
  
  var commandsByLang = {};
  commandsByLang['JavaScript'] = {}; 
  commandsByLang['JavaScript'][0] = "alert('Hello, World!')";
  commandsByLang['JavaScript'][1] = "var a = ''";
  commandsByLang['C#'] = {}; 
  commandsByLang['C#'][0] = "Console.Write('Hello, World');";
  commandsByLang['C#'][1] = "var a = ''"
  commandsByLang['PHP'] = {}; 
  commandsByLang['PHP'][0] = "echo('Hello, World!')";
  commandsByLang['PHP'][1] = "$ a = ''";
  commandsByLang['Ruby'] = {}; 
  commandsByLang['Ruby'][0] = "puts 'Hello, World!'";
  commandsByLang['Ruby'][1] = "@ a = ''";
  commandsByLang['Python'] = {}; 
  commandsByLang['Python'][0] = "print 'Hello, World!'";
  commandsByLang['Python'][1] = "a = ''";
  commandsByLang['Pascal'] = {}; 
  commandsByLang['Pascal'][0] = "Writeln('Hello, World!')";
  commandsByLang['Pascal'][1] = "a:''";
  var commands = Object.values(commandsByLang[inp_lang]);
  var indexOfCommand = commands.indexOf(input_text);
  
  document.getElementById("out").value = commandsByLang[out_lang][indexOfCommand];
  
  if(indexOfCommand == "-1"){
    alert("error");
  }
}
