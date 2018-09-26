var url='https://newsapi.org/v2/sources?language=en&apiKey=3b4e2f2d6d20449fb47da497f2729363';
var req = new Request(url);
fetch(req)
  .then(function(response) {

    return response.json();
  }).then(function(jsonData){
  console.log(jsonData);
  var setclass="orange"
  for(i=0;i<jsonData.sources.length;i++)
  { if (i%3==0){
    setclass="green";
  } else if (i%3==1){
    setclass="blue"
  }else setclass="orange"
    // console.log(jsonData.sources[i].name);
    document.getElementById("sourceshere").innerHTML+=`<div class='sources `+setclass+`'>
        `+jsonData.sources[i].name+`
    </div>`;

  }
});
var headlinesurl="https://newsapi.org/v2/top-headlines?country=us&apiKey=3b4e2f2d6d20449fb47da497f2729363";
var headlinesreq=new Request(headlinesurl);
fetch(headlinesreq).then((res)=>{
  return res.json();
}).then((jsondata)=>{
  for (var j=0;j<jsondata.articles.length;j++)
   {
    if (j%3==0){
      setclass="success"
    }else if(j%3==1){
      setclass="warning"
    }else setclass="info";

    document.getElementById("topheadlinesshere").innerHTML+=`
      <a href="`+jsondata.articles[j].url+`" target="_blank" ><div class="panel panel-`+setclass+`">
        
        <div class="panel-heading">`+jsondata.articles[j].title+ `<span class="badge" style='float: right;margin-right: -10%'>`+jsondata.articles[j].source.name+`</span></div>
        <div class="panel-body"><p class="publisheddate">`+jsondata.articles[j].publishedAt+`</p><center>
          <img src="`+jsondata.articles[j].urlToImage+`" alt="" class="img-responsive"></center>
        <br>`+jsondata.articles[j].description+`</div>
      </div></a>
  `
  }
  console.log(jsondata.articles);
})

