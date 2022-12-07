const Discord = require("discord.js")
const { Color } = require("../../config.js")
const ms = require('parse-ms')
const bobo = "💷"
const tail = "<a:cf:1050062281565798451>"
module.exports = {
  name: "coinflip",
  aliases: ["coinflip","cf"],
  enabled: true,			    
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 8000,
  run: async (bot, message, args, dev) => {
 
    
    let data = await User.findOne({userID: message.author.id}) 
    
let money = data.money
    var cf = args[1]
  if(!cf) return message.channel.send({content:`❎ **${message.author.username}**, please, Type a number `})
        

    if(cf > money) return message.channel.send({content:`❎ **${message.author.username}**, You Don't have enough Bobo coins to play, Your balance:**\`$${money}\`**`})
  
        if(cf> 50000) return message.channel.send({content:`❎ You can't use your money than 50,000`})
        if (isNaN(cf) || cf < 0 ||cf.startsWith("all"))  return message.channel.send({content:`❎ The amount you entered is not a valid number?`})
    
            
        
                  
  
        
        const result = [ "LOOSELOOSE","WINWIN","WINWIN","LOOSELOOSE","WINWIN","LOOSELOOSE"] 
  
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (awnser === "LOOSELOOSE") {
 var mon = cf * 2      
        //////        
        var text2 = `**${message.author.username} You spent \`${cf}\`**, chose **heads** The coin spins ${tail}...`;
          message.channel.send({content: text2}).then(msg => {
            setTimeout(() => {
              msg.edit({content:`**${message.author.username} You spent \`${cf}\`**, chose **heads** The coin spins and You lost all ${bobo}`});
            }, 3000);
        });
       
      if(data){
       data.money -= mon  || 2
data.save()}
     } else {
       
          var mon2 = cf * 2
        var text2 = `**${message.author.username} You spent \`${cf}\`**, chose **heads** The coin spins ${tail}...`;
          message.channel.send({content:text2}).then(msg => {
            setTimeout(() => {
              msg.edit( {content:`**${message.author.username} You spent \`${cf}\`**, chose **heads** The coin spins  and Win **\`${mon2}\`${bobo}**`});
            }, 3000);
          });
    if(data){
      data.money += mon2 || 2
      data.save()
    }
      }}}
