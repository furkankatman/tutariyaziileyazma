//Fatura tutarını yazı ile yazmayı sağlayan javascript fonksiyonu .
//Beklenen parametre tipi örneği: 222,3  gibidir. 19009,22 gibi . virgülden sonra en fazla 2 karakter bekleniyor !!!
//99 milyon seviyesi en son test edilen sağlıklı çalışma alanıdır!!!
//ÖR: ToLetter("99999999,02")
//    "DOKSANDOKUZMİLYONDOKUZYÜZDOKSANDOKUZBİNDOKUZYÜZDOKSANDOKUZ*TL SIFIRİKİ*KR"
         function  ToLetter(tutar) {
                var sTutar = tutar.toString().replace('.', '');
                // Replace('.','') sadece virgüle müsade ediyoruz küsürat için ve 2 karakter bekliyoruz.          
                var lira = sTutar.indexOf(',') != -1 ? sTutar.substring(0, sTutar.indexOf(',')) : sTutar;
                //tutarın tam kısmı
                var kurus = sTutar.indexOf(',') != -1 ? sTutar.substring(sTutar.indexOf(",")+1,sTutar.indexOf(",")+3) : "0*KR";
                //tutarın küsürat kısmı
                var yazi = "";
                var birler = ["SIFIR", "BİR", "İKİ", "ÜÇ", "DÖRT", "BEŞ", "ALTI", "YEDİ", "SEKİZ", "DOKUZ"];
                var onlar = ["ON", "YİRMİ", "OTUZ", "KIRK", "ELLİ", "ALTMIŞ", "YETMİŞ", "SEKSEN", "DOKSAN"];
                var ifadeler = ["", "YÜZ", "BİN", "MİLYON", "MİLYAR"];
                var liraYazı = "";
                var kurusYazi="";
                if(kurus!="00"){
                    if(kurus.length==1){
                        kurusYazi=birler[parseInt(kurus[0])];
                    }else{
                        if(kurus[0]=="0"){
                           kurusYazi="SIFIR"+birler[parseInt(kurus[1])];
                        }
                        else{
                           if(kurus[1]==0)
                           kurusYazi=onlar[parseInt(kurus[0])];
                           else{
                               kurusYazi=onlar[parseInt(kurus[0])-1]+birler[parseInt(kurus[1])]
                           }
                        }
                    }
                }else
                {
                    kurusYazi="SIFIR";
                }
                var basamakEksigi = 3 - (parseInt(lira.length) % 3);
                if (basamakEksigi != 0 && basamakEksigi != 3) {
                    var eksikBasamak = "";
                    for (var i = 0; i < basamakEksigi; i++) {
                        eksikBasamak = eksikBasamak + "0";
                    }
                    lira = eksikBasamak + lira;
                    var yuzlukAdedi = lira.length / 3;
                    for (var i = 0; i < yuzlukAdedi; i++) {
                        for (var e = (0); e < 3; e++) {
                            if (e == 0) {
                                if (parseInt(lira.substring(i * 3, i * 3 + 3)[e]) != 0) {
                                    liraYazı += birler[parseInt(lira.substring(i * 3, i * 3 + 3)[e])];
                                    if(i!=yuzlukAdedi-1)
                                    liraYazı = liraYazı + ifadeler[yuzlukAdedi - i-1];
                                    else
                                    liraYazı = liraYazı + ifadeler[yuzlukAdedi - i];
                                }
                            }
                            if (e == 1) {
                                if (parseInt(lira.substring(i * 3, i * 3 + 3)[e]) != 0) {
                                    liraYazı += onlar[parseInt(lira.substring(i * 3, i * 3 + 3)[e]) - 1];
                                    if (i != yuzlukAdedi - 1) {
                                        if(parseInt(lira.substring(i * 3, i * 3 + 3)[e+1])==0)
                                        liraYazı = liraYazı + ifadeler[yuzlukAdedi - i];
                                    }
                                }
                            }
                            if (e == 2) {
                                if (parseInt(lira.substring(i * 3, i * 3 + 3)[e]) != 0) {
                                    liraYazı += birler[parseInt(lira.substring(i * 3, i * 3 + 3)[e])];
                                    if (i != yuzlukAdedi - 1) {
                                        liraYazı = liraYazı + ifadeler[yuzlukAdedi - i];
                                    }
                                }else{
                                } 
                            }
                        }
                    }
                }
                else {
                    var yuzlukAdedi = lira.length / 3;
                    for (var i = 0; i < yuzlukAdedi; i++) {
                        for (var e = 0; e < 3; e++) {
                            if (e == 0) {
                                if (parseInt(lira.substring(i * 3, i * 3 + 3)[e]) != 0) {
                                    liraYazı += birler[parseInt(lira.substring(i * 3, i * 3 + 3)[e])];
                                    liraYazı = liraYazı +"YÜZ";
                                }
                            }
                            if (e == 1) {
                                if (parseInt(lira.substring(i * 3, i * 3 + 3)[e]) != 0) {
                                    liraYazı += onlar[parseInt(lira.substring(i * 3, i * 3 + 3)[e]) - 1];
                                    if (i != yuzlukAdedi - 1) {
                                        if(parseInt(lira.substring(i * 3, i * 3 + 3)[e+1])==0)
                                        liraYazı = liraYazı + ifadeler[yuzlukAdedi - i];
                                    }
                                }
                            }
                            if (e == 2) {
                                if (parseInt(lira.substring(i * 3, i * 3 + 3)[e]) != 0) {
                                    liraYazı += birler[parseInt(lira.substring(i * 3, i * 3 + 3)[e])];
                                    if (i != yuzlukAdedi - 1) {
                                        liraYazı = liraYazı + ifadeler[yuzlukAdedi - i];
                                    }
                                }
                                else{
                                    if(i<yuzlukAdedi-1){
                                        liraYazı = liraYazı + ifadeler[yuzlukAdedi - i];    
                                    }
                                }
                            }
                        }
                    }
                }
                if(liraYazı.startsWith("BİRBİN")){
                    liraYazı=liraYazı.replace("BİRBİN","BİN")
                }
                if(liraYazı.startsWith("ONMİLYONBİRBİN")){
                    liraYazı=liraYazı.replace("ONMİLYONBİRBİN","ONMİLYONBİN")
                }
                if(liraYazı.indexOf("MİLYONBİRBİN")!=-1){
                    liraYazı=liraYazı.replace("MİLYONBİRBİN","MİLYONBİN")
                }
                liraYazı=liraYazı.replace("BİRYÜZ", "YÜZ")+"*TL";
                
                return liraYazı+" "+kurusYazi+"*KR";
            }
        });
