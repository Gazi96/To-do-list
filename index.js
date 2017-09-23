var title = document.getElementsByClassName("add");
var list__item = document.getElementsByClassName("list__item");
var list = document.getElementsByClassName("list");

title[0].addEventListener("click", addItem);

list[0].addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') 
  {
      console.log(list__item);
      ev.target.classList.toggle('checked');
  }
}, false);

function addItem()
{
    var text = document.getElementsByClassName("title")[0].value;
    var alert = document.getElementsByClassName("alert");
    
    if(text != "")
    {
        alert[0].style.display = "none";
        
        var list = document.getElementsByClassName("list");
        var list__item = document.getElementsByTagName("li");
        var list__add = document.createElement("li");
        var span__add = document.createElement("span");
        
        list[0].appendChild(list__add);
        var list__length = list__item.length;

        list__item[list__length - 1].className = "list__item";
        list__item[list__length - 1].innerHTML += text; 
        
        list__item[list__length - 1].appendChild(span__add);
        var span__exit = list__item[list__length - 1].getElementsByTagName("span");
                
        span__exit[0].innerHTML = "x";
        span__exit[0].className = "exit";
        
        del();
    }
    
    else
    {
        console.log(alert);
        alert[0].style.display = "block";
    }
}

function del()
{
    var span__delete = document.getElementsByClassName("exit");
    
    for(var i = 0; i < span__delete.length; i++)
    {
        span__delete[i].addEventListener('click', function () 
        {
            this.parentNode.style.display = "none";
        });
    } 
}

