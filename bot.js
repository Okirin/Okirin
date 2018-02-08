
    const Discord = require("discord.js");

    const TOKEN = "NDExMDk0Nzg3OTUzNzg2ODgw.DV2ynA.Z124iGNOekCQO_xgQyYGySsb1C8";
    const PREFIX = "r!"
    

    var bot = new Discord.Client();
    var client = new Discord.Client(); 

    bot.on("ready", function() {
    console.log("Ready, boy.");
    
    bot.user.setActivity("r!help");

    });

    

    bot.on("message", function(message) {
        
        if (message.author.equals(bot.user)) return;

        if (message.content == "yo.") {
            message.channel.sendMessage("Yo.")
        }

        if (message.content == "yo") {
            message.channel.sendMessage("Yo.")
        }

        if (message.content == "Yo.") {
            message.channel.sendMessage("Yo.")
        }
        
        if (message.content == "Yo") {
            message.channel.sendMessage("Yo.")
        }

        if (!message.content.startsWith(PREFIX)) return;

            var args = message.content.substring(PREFIX.length).split(" ");
        
            switch (args[0].toLowerCase()) {
                   case "info":
                message.channel.sendMessage("I'm a Bot, created by **Okirin.** I'm a RP Bot, created for DBZ:FS. I have been created the 08/02/2018, so... Dunno.");
                break;

                case "waku":
            var waku = new Discord.RichEmbed()
            .addField("Name :", "Waku Shinda.")
            .addField("Race :", "Saiyan.")
            .addField("Age :", "17 Years Old.")
            .addField("Story.", "Waku Shinda is, a Saiyan, who doesn't know how to control his Power. He survived from the Explosion of the Planet Vegeta, by using a Space Pod, he was 12 Years Old, when this happend. He arrived, when he was 13 Years Old, on Earth. His Objective is to Control his Power, to protect this Planet, even... **If he is scared of his Mysterious Power...**")
            .setAuthor("Okirin.", "https://i.imgur.com/44TkZTDb.jpg")
            .setThumbnail("https://vignette.wikia.nocookie.net/dragonball/images/c/cc/Planet_Vegeta_and_Frieza%27s_Ship.jpg/revision/latest?cb=20110608213438")
            .setTitle("Waku Shinda.")
            .setColor("#FEFFFF")
            .setFooter("Character created by Okirin.")
            .setImage("https://i.imgur.com/UIDL55a.png")
            message.channel.sendEmbed(waku);
            break;
            
            case "characters":
            var characters = new Discord.RichEmbed()
            .setAuthor("Characters.", "https://i.imgur.com/oQKcvNfb.jpg")
            .setColor("#FEFFFF")
            .addField("Here are the Characters, type the Commands below.", "r!waku \n\nr! \n\nr! \n\nr! \n\nr!")
            .setImage("https://i.imgur.com/sJU2LiJ.gif")
            .setFooter("All the Characters are created by ourselves, on DBZ:FS.")
            message.channel.sendEmbed(characters);
            break;
            
            case "help":
            var help = new Discord.RichEmbed()
            .setAuthor("Help.", "https://i.imgur.com/uLJs1wmb.jpg")
            .setColor("#FEFFF")
            .addField("Commands.", "r!characters : You'll find there all the Characters, of the RP. \n\n!arc : You'll find there the Arc that we're doing for the moment. \n\nr!info : Some informations about me. \n\n");
            message.channel.sendEmbed(help);
            break;

            default:
            message.channel.sendMessage("I dunno this Command.")
            }


    });

    client.login("NDExMDk0Nzg3OTUzNzg2ODgw.DV2ynA.Z124iGNOekCQO_xgQyYGySsb1C8");


