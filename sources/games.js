$(document).ready(function(){
	//Onload Triggers
    $("#Arena").ready(function() {
        Deal();
        UpdateGrid(EP);
    });
    //Game Type Triggers
    $("#SHORTHANDED").click(function(event) {
        UpdateGameSelected('SHORTHANDED');
    });
    $("#FULLRING").click(function(event) {
        UpdateGameSelected('FULLRING');
    });

    //Game Actions Triggers
    $("#raiseButton").click(function(event) {
		Results(1);
	});
    $("#foldButton").click(function(event) {
        Results(0);
    });
    
    //Positions Triggers
    $("#EP").click(function(event) {
        UpdateGrid(EP);
    });
    $("#EP2").click(function(event) {
        UpdateGrid(EP2);
    });
    $("#MP").click(function(event) {
        UpdateGrid(MP);
    });
    $("#MP2").click(function(event) {
        UpdateGrid(MP2);
    });
    $("#MP3").click(function(event) {
        UpdateGrid(MP3);
    });
    $("#CO").click(function(event) {
        UpdateGrid(CO);
    });
    $("#BU").click(function(event) {
        UpdateGrid(BU);
    });
    $("#SB").click(function(event) {
        UpdateGrid(SB);
    });
    $("#BB").click(function(event) {
        UpdateGrid(BB);
    });
    
    //Grid Triggers Optimizar para que no haga falta crear uno para cada celda.
    $("#StrategyConfigurationSpace").mousedown(function(event) {
        $(".cell").mouseenter(function(event) {
            var id = $(this).attr('id');
            UpdateRange(id);
        });
    });
        
    //Deck Library
    var AceHearts = { CompleteName: "Ah", ShortName: "A", Value: 13, Suit: "hearts", Img: "url('sources/Deck/Ah.png')" };
    var KingHearts = { CompleteName: "Kh", ShortName: "K", Value: 12, Suit: "hearts", Img: "url('sources/Deck/Kh.png')" }; 
    var QueehHearts = { CompleteName: "Qh", ShortName: "Q", Value: 11, Suit: "hearts", Img: "url('sources/Deck/Qh.png')" };
    var JackHearts = { CompleteName: "Jh", ShortName: "J", Value: 10, Suit: "hearts", Img: "url('sources/Deck/Jh.png')" };
    var TenHearts = { CompleteName: "Th", ShortName: "T", Value: 9, Suit: "hearts", Img: "url('sources/Deck/Th.png')" };
    var NineHearts = { CompleteName: "9h", ShortName: "9", Value: 8, Suit: "hearts", Img: "url('sources/Deck/9h.png')" };
    var EightHearts = { CompleteName: "8h", ShortName: "8", Value: 7, Suit: "hearts", Img: "url('sources/Deck/8h.png')" };
    var SevenHearts = { CompleteName: "7h", ShortName: "7", Value: 6, Suit: "hearts", Img: "url('sources/Deck/7h.png')" };
    var SixHearts = { CompleteName: "6h", ShortName: "6", Value: 5, Suit: "hearts", Img: "url('sources/Deck/6h.png')" };
    var FiveHearts = { CompleteName: "5h", ShortName: "5", Value: 4, Suit: "hearts", Img: "url('sources/Deck/5h.png')" };
    var FourHearts = { CompleteName: "4h", ShortName: "4", Value: 3, Suit: "hearts", Img: "url('sources/Deck/4h.png')" };
    var ThreeHearts = { CompleteName: "3h", ShortName: "3", Value: 2, Suit: "hearts", Img: "url('sources/Deck/3h.png')" };
    var TwoHearts = { CompleteName: "2h", ShortName: "2", Value: 1, Suit: "hearts", Img: "url('sources/Deck/2h.png')" };

    var AceClubs = { CompleteName: "Ac", ShortName: "A", Value: 13, Suit: "clubs", Img: "url('sources/Deck/Ac.png')" };
    var KingClubs = { CompleteName: "Kc", ShortName: "K", Value: 12, Suit: "clubs", Img: "url('sources/Deck/Kc.png')" };
    var QueehClubs = { CompleteName: "Qc", ShortName: "Q", Value: 11, Suit: "clubs", Img: "url('sources/Deck/Qc.png')" };
    var JackClubs = { CompleteName: "Jc", ShortName: "J", Value: 10, Suit: "clubs", Img: "url('sources/Deck/Jc.png')" };
    var TenClubs = { CompleteName: "Tc", ShortName: "T", Value: 9, Suit: "clubs", Img: "url('sources/Deck/Tc.png')" };
    var NineClubs = { CompleteName: "9c", ShortName: "9", Value: 8, Suit: "clubs", Img: "url('sources/Deck/9c.png')" };
    var EightClubs = { CompleteName: "8c", ShortName: "8", Value: 7, Suit: "clubs", Img: "url('sources/Deck/8c.png')" };
    var SevenClubs = { CompleteName: "7c", ShortName: "7", Value: 6, Suit: "clubs", Img: "url('sources/Deck/7c.png')" };
    var SixClubs = { CompleteName: "6c", ShortName: "6", Value: 5, Suit: "clubs", Img: "url('sources/Deck/6c.png')" };
    var FiveClubs = { CompleteName: "5c", ShortName: "5", Value: 4, Suit: "clubs", Img: "url('sources/Deck/5c.png')" };
    var FourClubs = { CompleteName: "4c", ShortName: "4", Value: 3, Suit: "clubs", Img: "url('sources/Deck/4c.png')" };
    var ThreeClubs = { CompleteName: "3c", ShortName: "3", Value: 2, Suit: "clubs", Img: "url('sources/Deck/3c.png')" };
    var TwoClubs = { CompleteName: "2c", ShortName: "2", Value: 1, Suit: "clubs", Img: "url('sources/Deck/2c.png')" };

    var AceDiamonds = { CompleteName: "Ad", ShortName: "A", Value: 13, Suit: "diamonds", Img: "url('sources/Deck/Ad.png')" };
    var KingDiamonds = { CompleteName: "Kd", ShortName: "K", Value: 12, Suit: "diamonds", Img: "url('sources/Deck/Kd.png')" };
    var QueehDiamonds = { CompleteName: "Qd", ShortName: "Q", Value: 11, Suit: "diamonds", Img: "url('sources/Deck/Qd.png')" };
    var JackDiamonds = { CompleteName: "Jd", ShortName: "J", Value: 10, Suit: "diamonds", Img: "url('sources/Deck/Jd.png')" };
    var TenDiamonds = { CompleteName: "Td", ShortName: "T", Value: 9, Suit: "diamonds", Img: "url('sources/Deck/Td.png')" };
    var NineDiamonds = { CompleteName: "9d", ShortName: "9", Value: 8, Suit: "diamonds", Img: "url('sources/Deck/9d.png')" };
    var EightDiamonds = { CompleteName: "8d", ShortName: "8", Value: 7, Suit: "diamonds", Img: "url('sources/Deck/8d.png')" };
    var SevenDiamonds = { CompleteName: "7d", ShortName: "7", Value: 6, Suit: "diamonds", Img: "url('sources/Deck/7d.png')" };
    var SixDiamonds = { CompleteName: "6d", ShortName: "6", Value: 5, Suit: "diamonds", Img: "url('sources/Deck/6d.png')" };
    var FiveDiamonds = { CompleteName: "5d", ShortName: "5", Value: 4, Suit: "diamonds", Img: "url('sources/Deck/5d.png')" };
    var FourDiamonds = { CompleteName: "4d", ShortName: "4", Value: 3, Suit: "diamonds", Img: "url('sources/Deck/4d.png')" };
    var ThreeDiamonds = { CompleteName: "3d", ShortName: "3", Value: 2, Suit: "diamonds", Img: "url('sources/Deck/3d.png')" };
    var TwoDiamonds = { CompleteName: "2d", ShortName: "2", Value: 1, Suit: "diamonds", Img: "url('sources/Deck/2d.png')" };

    var AceSpades = { CompleteName: "As", ShortName: "A", Value: 13, Suit: "spades", Img: "url('sources/Deck/As.png')" };
    var KingSpades = { CompleteName: "Ks", ShortName: "K", Value: 12, Suit: "spades", Img: "url('sources/Deck/Ks.png')" };
    var QueehSpades = { CompleteName: "Qs", ShortName: "Q", Value: 11, Suit: "spades", Img: "url('sources/Deck/Qs.png')" };
    var JackSpades = { CompleteName: "Js", ShortName: "J", Value: 10, Suit: "spades", Img: "url('sources/Deck/Js.png')" };
    var TenSpades = { CompleteName: "Ts", ShortName: "T", Value: 9, Suit: "spades", Img: "url('sources/Deck/Ts.png')" };
    var NineSpades = { CompleteName: "9s", ShortName: "9", Value: 8, Suit: "spades", Img: "url('sources/Deck/9s.png')" };
    var EightSpades = { CompleteName: "8s", ShortName: "8", Value: 7, Suit: "spades", Img: "url('sources/Deck/8s.png')" };
    var SevenSpades = { CompleteName: "7s", ShortName: "7", Value: 6, Suit: "spades", Img: "url('sources/Deck/7s.png')" };
    var SixSpades = { CompleteName: "6s", ShortName: "6", Value: 5, Suit: "spades", Img: "url('sources/Deck/6s.png')" };
    var FiveSpades = { CompleteName: "5s", ShortName: "5", Value: 4, Suit: "spades", Img: "url('sources/Deck/5s.png')" };
    var FourSpades = { CompleteName: "4s", ShortName: "4", Value: 3, Suit: "spades", Img: "url('sources/Deck/4s.png')" };
    var ThreeSpades = { CompleteName: "3s", ShortName: "3", Value: 2, Suit: "spades", Img: "url('sources/Deck/3s.png')" };
    var TwoSpades = { CompleteName: "2s", ShortName: "2", Value: 1, Suit: "spades", Img: "url('sources/Deck/2s.png')" };
    
    //Deck Strategy
    var EP = { Name: "EP", Limp: [], OR: ["AA", "KK", "QQ", "JJ", "TT", "AKs", "AQs", "AKo", "AJs", "AQo"], ROR: [], CC: [], ThreeBet: [], CallThreeBet: [], Squeeze: [], CallSqueeze: [], FourBet: [], CallFourBet: [], FiveBet: [], PfAllIn: [] };
    var EP2 = { Name: "EP2", Limp: [], OR: [], ROR: [], CC: [], ThreeBet: [], CallThreeBet: [], Squeeze: [], CallSqueeze: [], FourBet: [], CallFourBet: [], FiveBet: [], PfAllIn: [] };
    var MP = { Name: "MP", Limp: [], OR: ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "AKs", "AKo", "AQs", "AQo", "AJs", "ATs", "AJo"], ROR: [], CC: [], ThreeBet: [], CallThreeBet: [], Squeeze: [], CallSqueeze: [], FourBet: [], CallFourBet: [], FiveBet: [], PfAllIn: [] };
    var MP2 = { Name: "MP2", Limp: [], OR: [], ROR: [], CC: [], ThreeBet: [], CallThreeBet: [], Squeeze: [], CallSqueeze: [], FourBet: [], CallFourBet: [], FiveBet: [], PfAllIn: [] };
    var MP3 = { Name: "MP3", Limp: [], OR: [], ROR: [], CC: [], ThreeBet: [], CallThreeBet: [], Squeeze: [], CallSqueeze: [], FourBet: [], CallFourBet: [], FiveBet: [], PfAllIn: [] };
    var CO = { Name: "CO", Limp: [], OR: ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "AKs", "AKo", "AQs", "AQo", "AJs", "ATs", "AJo", "ATo", "A9s", "KQs", "KQo"], ROR: [], CC: [], ThreeBet: [], CallThreeBet: [], Squeeze: [], CallSqueeze: [], FourBet: [], CallFourBet: [], FiveBet: [], PfAllIn: [] };
    var BU = { Name: "BU", Limp: [], OR: ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "AKs", "AKo", "AQs", "AQo", "AJs", "ATs", "AJo", "ATo", "A9s", "KQs", "KQo"], ROR: [], CC: [], ThreeBet: [], CallThreeBet: [], Squeeze: [], CallSqueeze: [], FourBet: [], CallFourBet: [], FiveBet: [], PfAllIn: [] };
    var SB = { Name: "EP", Limp: [], OR: ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "AKs", "AKo", "AQs", "AQo", "AJs", "ATs", "AJo", "ATo", "A9s", "KQs", "KQo"], ROR: [], CC: [], ThreeBet: [], CallThreeBet: [], Squeeze: [], CallSqueeze: [], FourBet: [], CallFourBet: [], FiveBet: [], PfAllIn: [] };
    var BB = { Name: "BB", Limp: [], OR: [], ROR: [], CC: [], ThreeBet: [], CallThreeBet: [], Squeeze: [], CallSqueeze: [], FourBet: [], CallFourBet: [], FiveBet: [], PfAllIn: [] };

    // Configuration Parameters
    var GameType = "SHORTHANDED";
    var PositionSelected = "";
    var RangeSelected = PositionSelected.OR;
    var RangeCombinations =0;
    var Percent =0;
    
    // Scenario Parameters
    var FirstCard ="";
    var SecondCard ="";
    var HandValue = "";
    var Position = "";

    //Control Panel Indicators
    var Hands = 0;
    var Speed = 0;
    var Accuracy = 0;
    var Hits = 0;
    var lastEvent = 0;
    var SpeedAvg = 0;

     //Generates a Holdem Texas Hand scenario.
    function Deal(){
        var Deck = [AceSpades,KingSpades,QueehSpades,JackSpades,TenSpades,NineSpades,EightSpades,SevenSpades,SixSpades,FiveSpades,FourSpades,ThreeSpades,TwoSpades,AceHearts,KingHearts,QueehHearts,JackHearts,TenHearts,NineHearts,EightHearts,SevenHearts,SixHearts,FiveHearts,FourHearts,ThreeHearts,TwoHearts,AceClubs,KingClubs,QueehClubs,JackClubs,TenClubs,NineClubs,EightClubs,SevenClubs,SixClubs,FiveClubs,FourClubs,ThreeClubs,TwoClubs,AceDiamonds,KingDiamonds,QueehDiamonds,JackDiamonds,TenDiamonds,NineDiamonds,EightDiamonds,SevenDiamonds,SixDiamonds,FiveDiamonds,FourDiamonds,ThreeDiamonds,TwoDiamonds];
		var ShorthandedPositions = [EP,MP,CO,BU,BB,SB];
        var FullringPositions = [EP,EP2,MP,MP2,MP3,CO,BU,BB,SB];
        var Aux = (Math.floor(Math.random() * 51));
        FirstCard = Deck[Aux];
        Deck.splice(Aux, 1);
        SecondCard = Deck[(Math.floor(Math.random() * 50))];
        document.getElementById("FirstCard").style.backgroundImage=FirstCard.Img;
        document.getElementById("SecondCard").style.backgroundImage=SecondCard.Img;
        if (FirstCard.Value > SecondCard.Value) {
            if (FirstCard.Suit == SecondCard.Suit) {
                HandValue = FirstCard.ShortName + SecondCard.ShortName + "s";
            } else {
                HandValue = FirstCard.ShortName + SecondCard.ShortName + "o";
            }
        } else if (FirstCard.Value == SecondCard.Value) {
            HandValue = FirstCard.ShortName + SecondCard.ShortName;
        } else if (FirstCard.Suit == SecondCard.Suit) {
            HandValue = SecondCard.ShortName + FirstCard.ShortName + "s";
        } else {
            HandValue = SecondCard.ShortName + FirstCard.ShortName + "o";
        };
        if (GameType == "SHORTHANDED") {
            Position = ShorthandedPositions[Math.floor(Math.random() * 5)];
            document.getElementById("Dealer").className=GameType+Position.Name;
        } else{
            Position = FullringPositions[Math.floor(Math.random() * 8)];
            document.getElementById("Dealer").className=GameType+Position.Name;
        };        
	};

    //Processes the decision made by the player. Falta hacer el loop correcto.
    function Results (a){
        var action = a
        Hands = Hands + 1;
        var Event= +new Date();
        if (lastEvent==0) {
            lastEvent=Event;
        } else{
            SpeedAvg = ((SpeedAvg * (Hands-1)) + Event - lastEvent) / Hands;
            Speed = Math.round(30000 / SpeedAvg);
            lastEvent=Event;
        };
        if (action==1) {
            for (i=0; i< Position.OR.length; i++) {
                if (HandValue==Position.OR[i]) {
                    Hits = Hits +1;
                    Accuracy =  Math.round(Hits*100/Hands) + " %"; 
                    document.getElementById("indHands").innerHTML=Hands;
                    document.getElementById("indSpeed").innerHTML=Speed;
                    document.getElementById("indAccuracy").innerHTML=Accuracy;
                    Deal();
                    return;
                };
            };
            Accuracy =  Math.round(Hits*100/Hands) + " %"; 
            document.getElementById("indHands").innerHTML=Hands;
            document.getElementById("indSpeed").innerHTML=Speed;
            document.getElementById("indAccuracy").innerHTML=Accuracy;
            Deal();
            return;
        } else{
            for (i=0; i< Position.OR.length; i++) {
                if (HandValue==Position.OR[i]) {
                    Accuracy =  Math.round(Hits*100/Hands) + " %"; 
                    document.getElementById("indHands").innerHTML=Hands;
                    document.getElementById("indSpeed").innerHTML=Speed;
                    document.getElementById("indAccuracy").innerHTML=Accuracy;
                    Deal();
                    return;
                };
            };
            Hits = Hits +1;
            Accuracy =  Math.round(Hits*100/Hands) + " %"; 
            document.getElementById("indHands").innerHTML=Hands;
            document.getElementById("indSpeed").innerHTML=Speed;
            document.getElementById("indAccuracy").innerHTML=Accuracy;
            Deal();
            return;
        };
    };

    //Updates game elements when gametype is changed.
    function UpdateGameSelected (GameSelection){
        lastEvent=0;
        GameType=GameSelection;
        if (GameType=="SHORTHANDED") {
            EP2.OR="";
            MP2.OR="";
            MP3.OR="";
            document.getElementById("Arena").style.backgroundImage="url('sources/Tables/Table_Shorthanded.png')";
            document.getElementById("EP2").disabled=true;
            document.getElementById("MP2").disabled=true;
            document.getElementById("MP3").disabled=true;
            document.getElementById("FirstCard").className='';
            document.getElementById("SecondCard").className='';
        } else{
            EP2.OR=EP.OR;
            MP2.OR=MP.OR;
            MP3.OR=CO.OR;
            document.getElementById("Arena").style.backgroundImage="url('sources/Tables/Table_Fullring.png')";
            document.getElementById("FirstCard").className='FR';
            document.getElementById("SecondCard").className='FR';
            document.getElementById("EP2").disabled=false;
            document.getElementById("MP2").disabled=false;
            document.getElementById("MP3").disabled=false;
        };
        Deal();
    };

    //Updates RangeSelected when position is changed
    function UpdateRangeSelected(a){
        PositionSelected=a;
        RangeSelected = PositionSelected.OR;
        UpdateGrid();
    }

    //Updates Strategy configuration elements when position or movement is changed.
    function UpdateGrid (a){
        lastEvent=0;
        PositionSelected=a;
        RangeSelected = PositionSelected.OR;
        var handList = new Array("AA", "KK", "QQ", "JJ", "TT", "99", "88", "AKs", "AQs", "AKo", "77", "AJs", "ATs", "AQo", "KQs", "AJo", "KJs", "A9s", "66", "KTs", "ATo", "A8s", "KQo", "A7s", "QJs", "KJo", "K9s", "A9o", "55", "QTs", "A6s", "A5s", "A8o", "A4s", "KTo", "K8s", "Q9s", "QJo", "A7o", "A3s", "JTs", "K7s", "A2s", "44", "K9o", "QTo", "K6s", "A5o", "A6o", "Q8s", "K5s", "J9s", "A4o", "K8o", "Q9o", "K4s", "A3o", "JTo", "Q7s", "33", "K7o", "J8s", "T9s", "A2o", "K3s", "Q6s", "K2s", "K6o", "Q8o", "Q5s", "J9o", "K5o", "J7s", "T8s", "Q4s", "K4o", "Q3s", "22", "98s", "T9o", "Q7o", "T7s", "J6s", "J8o", "K3o", "Q2s", "Q6o", "J5s", "K2o", "Q5o", "T8o", "J7o", "J4s", "97s", "T6s", "J3s", "Q4o", "87s", "J2s", "T5s", "96s", "98o", "J6o", "Q3o", "T7o", "T4s", "Q2o", "J5o", "86s", "T3s", "95s", "97o", "T6o", "T2s", "J4o", "76s", "85s", "J3o", "94s", "87o", "75s", "J2o", "T5o", "93s", "96o", "92s", "84s", "65s", "T4o", "86o", "T3o", "74s", "95o", "83s", "64s", "76o", "54s", "T2o", "82s", "73s", "85o", "94o", "53s", "63s", "75o", "93o", "72s", "65o", "84o", "43s", "92o", "62s", "52s", "74o", "42s", "83o", "54o", "64o", "32s", "82o", "73o", "53o", "63o", "43o", "72o", "52o", "62o", "42o", "32o");
        for (i = 0; i < handList.length; i++) {
            document.getElementById(handList[i]).style.backgroundColor = "#d9e0d6"; //Pendiente de estilo final
        }
        for (i = 0; i < RangeSelected.length; i++) {
            document.getElementById(RangeSelected[i]).style.backgroundColor = "#7aba65"; //Pendiente de estilo final
        }
        UpdatePercent ();
    };

    //Updates the stored strategy by selecting and unselecting hands from table.
    function UpdateRange (a){
        lastEvent=0;
        if (RangeSelected.indexOf(a) == -1) {
            document.getElementById(a).style.backgroundColor = "#7aba65"; //Actualizar con stilo final
            RangeSelected.push(a);
            Position.OR=RangeSelected;
        } else{
            document.getElementById(a).style.backgroundColor = "#d9e0d6"; //Actualizar con stilo final
            RangeSelected.splice(RangeSelected.indexOf(a), 1);
            Position.OR=RangeSelected;
        };
        UpdatePercent ();
    };

    function UpdatePercent (){
        RangeCombinations = 0;
        for (i = 0; i < RangeSelected.length; i++) {
            var AuxHand = RangeSelected[i];
            if (AuxHand.length==2) {
                RangeCombinations = RangeCombinations + 6;
            } else{
                if (AuxHand[2]=="s") {
                    RangeCombinations = RangeCombinations + 4;
                } else{
                    RangeCombinations = RangeCombinations + 12;
                };
            };
        };
        Percent = Math.round(RangeCombinations/1326*1000)/10;
        document.getElementById("percentRange").innerHTML=Percent+"%";
    }
});