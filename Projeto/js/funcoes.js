function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
   
    var avaliacao = 0;
   
   if (estrela == 5){ 
    document.getElementById("s1").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s2").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s3").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s4").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s5").src = "../assets/imagens/post/icon/chef.png";
    avaliacao = 5;
   }
    
    //ESTRELA 4
   if (estrela == 4){ 
    document.getElementById("s1").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s2").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s3").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s4").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s5").src = "../assets/imagens/post/icon/chef0.png";
    avaliacao = 4;
   }
   
   //ESTRELA 3
   if (estrela == 3){ 
    document.getElementById("s1").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s2").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s3").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s4").src = "../assets/imagens/post/icon/chef0.png";
    document.getElementById("s5").src = "../assets/imagens/post/icon/chef0.png";
    avaliacao = 3;
    }
    
   //ESTRELA 2
   if (estrela == 2){ 
    document.getElementById("s1").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s2").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s3").src = "../assets/imagens/post/icon/chef0.png";
    document.getElementById("s4").src = "../assets/imagens/post/icon/chef0.png";
    document.getElementById("s5").src = "../assets/imagens/post/icon/chef0.png";
    avaliacao = 2;
    }
    
    //ESTRELA 1
   if (estrela == 1){ 
    document.getElementById("s1").src = "../assets/imagens/post/icon/chef.png";
    document.getElementById("s2").src = "../assets/imagens/post/icon/chef0.png";
    document.getElementById("s3").src = "../assets/imagens/post/icon/chef0.png";
    document.getElementById("s4").src = "../assets/imagens/post/icon/chef0.png";
    document.getElementById("s5").src = "../assets/imagens/post/icon/chef0.png";
    avaliacao = 1;
    }
    
    document.getElementById('rating').innerHTML = avaliacao;
    
   }