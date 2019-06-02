var express = require('express');
var request = require('request');
const crypto = require('crypto');
var router = express.Router();

var api = require('marvel-api');
const url_base = "http://localhost:3000/marvel/";

var marvel = api.createClient({
  publicKey: 'd69523b56ff3e1089329082cf2af76fb'
, privateKey: '18e6c041b9c7df612d32f9f7d0e96fca3b889cd4'
});

/* PASSAR ID DO PERSO. */
router.get('/registro_personagem/:id', function(req, res, next) {
    var limit = 10;
    var name = 'spider-man';
    var id  = req.params.id; //nome do personagem via get 
    marvel.characters.find(id,function(err, results) {
    if (err) {
      return console.error(err);
    }
    var dados = results.data[0];    
    
    var thumb =results.data[0].thumbnail.path;    
    var ext =results.data[0].thumbnail.extension;    
    var img = thumb+"."+ext;
    res.render('person',{personagem:dados, img:img});        
  });
});

// recebe dados do formulário e redireciona 
router.get('/busca/', function(req, res, next){
  res.render('busca');   
});

// recebe dados do formulário e redireciona 
router.post('/retorna_busca/', function(req, res, next) {
  var name        = req.body.name; //nome do personagem via get  
  res.redirect('http://localhost:3000/marvel/retorna_busca_pag/'+name+'/1');   
});

// retorna elementos 
router.get('/retorna_busca_pag/:nome/:pag', function(req, res, next) {

  var publicKey   = 'd69523b56ff3e1089329082cf2af76fb';
  var privateKey  = '18e6c041b9c7df612d32f9f7d0e96fca3b889cd4';  
  var limit       = 10;    //quantidade de elemntos da página   
  
  var nome        = req.params.nome; //nome do personagem via get  
  var paginaAtual = req.params.pag; //numero da pagina 
  var quant       = 0; //quantidde de páginas
  var pagAtual    = 0; //quantidde de páginas
  var pagAnterior = 0;
 
  const baseUrl = 'http://gateway.marvel.com/v1/public/characters';
  const query = `?limit=${limit}&nameStartsWith=${nome}&offset=${paginaAtual}`;
  const timestamp = new Date().getTime();
  const hash = crypto.createHash('md5').update(timestamp + privateKey + publicKey).digest('hex');    
  const auth = `&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  const url = `${baseUrl}${query}${auth}`;
  
  request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (error, response, data) => {
    if (error) {
      console.log('Error:', error);        
      res.send(error);
    } else if (response.statusCode !== 200) {
      console.log('Error', response.body);
      res.status(response.statusCode).send(response.body);
    } else {
      var dadosComp = data.data;
      var dados = data.data.results;
      var prox =0 ;//proxima pagina     
      var ant = 0; //pagina anterior   

      // /caso não encontre regitros 
      if(dadosComp.total == 0){
        quant    = dadosComp.total; //quantidde de páginas
      }else{
        quant    = dadosComp.total -1; //quantidde de páginas
      }

      quant    = dadosComp.total -1; //quantidde de páginas
      pagAtual = dadosComp.offset; //Página atual 

      if(pagAtual < quant){
        pagAtual  = pagAtual + 1  ;
        prox = url_base +'retorna_busca_pag/'+nome+'/'+pagAtual;
      }

      if(pagAtual > 1){
        ant  = pagAtual -2 ;
        if(ant!=0){
          pagAnterior  = url_base +'retorna_busca_pag/'+nome+'/'+ant;
        }
      }      
      res.render('retorna_busca',{personagem:dados, pagAtual:paginaAtual, quantPag:quant, proxPag:prox, pagAnt: pagAnterior});             
    }
  });      
  
});
module.exports = router;
