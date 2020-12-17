let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com'];

//let todosLosArreglos = [pronoun, adj, noun, extension];

function domainName(pronoun, adj, noun, extension) {
    for (var i = 0; i < pronoun.length; i++) {
        for (var x = 0; x < adj.length; x++) {
            for (var z = 0; z < noun.length; z++) {
                for (var k = 0; k < extension.length; k++) {
                    console.log(pronoun[i] + adj[x] + noun[z] + extension[k]);
                }
            }
        }
    }
}
domainName(pronoun, adj, noun, extension);