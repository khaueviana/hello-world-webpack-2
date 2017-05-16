/**
 * require() é uma função node, por isso, preciso apenas fornecer o nome do pacote
 * e ele sabe que deve buscar o arquivo node_modules/webpack/bin/webpack.js 
 * e criar a referência.
 */
const webpack = require('webpack')

module.exports = {
  /**
   * Para o webpack gerar o build de sua aplicação, ele precisa saber 
   * qual será o ponto de entrada, o arquivo raiz, que chamará em forma de árvore
   * todos os módulos subjacentes.
   */
  entry: './app/index.js',
  /**
   * Precisamos dizer ao webpack também, qual será o local de saída de nosso build
   */
  output: {
    /**
     * no nosso caso utilizamos a variável de ambiente do node '__dirname' que 
     * pega nosso diretório atual e concatenamos com a pasta public
     */
    path: __dirname + '/public',
    /**
     * Dizemos também qual o nome do nosso arquivo, por convenção utilizaremos
     * o nome 'bundle.js', mas você é livre pra coloar o nome que quiser.
     */
    filename: './bundle.js'
  },
  /**
   * Aqui setamos qual o servidor de dev que utilizaremos, lembra que instalamos
   * o webpack-dev-server agorinha?
   */
  devServer: {
    // Eu escolhi a 3000, mas você pode escolher a que se sentir mais confortável.
    port: 3000,
    // Aqui dizemos onde estará nosso arquivo bundle.js
    contentBase: './public'
  }
}