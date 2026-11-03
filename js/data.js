//dane do kart
    const floraData = [
        //lasy
        { category: "typy", name: "Bór sosnowy", latin: "Typ siedliskowy", image: "assets/img/bor_sosnowy.jpg", image2: "assets/img/bor_sosn2.jfif", desc: "Najczęściej spotykany typ lasu w Polsce. Rośnie głównie na ubogich, piaszczystych glebach. Charakteryzuje się luźnym zwarciem koron, co pozwala na rozwój specyficznego, światłolubnego runa. Znajdziemy tu mnóstwo wrzosów, borówek oraz bogate dywany mchów i porostów chroniących przed suszą." },
        { category: "typy", name: "Grąd", latin: "Typ siedliskowy", image: "assets/img/grad.jpg", image2: "assets/img/graf2.jpg", desc: "Żyzny las liściasty lub mieszany. Dominują tu potężne dęby, graby i lipy. Jest to jeden z najbogatszych przyrodniczo typów lasu. Wiosną, zanim korony drzew wypuszczą liście i zasłonią słońce, dno lasu pokrywa się spektakularnym dywanem kwitnących zawilców i przylaszczek." },
        { category: "typy", name: "Łęg", latin: "Typ siedliskowy", image: "assets/img/las_legowy.jpg", image2: "assets/img/las_legowy2.jpg", desc: "Las występujący w dolinach rzek i nad potokami, okresowo zalewany przez wodę. Królują tu olsze, jesiony i wierzby. Ze względu na stały dostęp do wilgoci lasy te tworzą gęstwinę przypominającą dżunglę i są rajem dla licznych gatunków ptactwa i płazów." },
        { category: "typy", name: "Buczyna", latin: "Typ siedliskowy", image: "assets/img/buczyna.jfif", image2: "assets/img/buczyna2.jpg", desc: "Cienisty, wręcz mroczny las z dominacją buka. Wyróżnia się bardzo grubą, rudą warstwą nierozłożonych liści pokrywających dno lasu. Z powodu mocnego zacienienia runo leśne jest tutaj bardzo ubogie, co nadaje buczynom specyficzny, 'czysty' wygląd przestrzeni między drzewami." },
        
        // Drzewa
{ 
            category: "drzewa", name: "Sosna zwyczajna", latin: "Pinus sylvestris", 
            image: "assets/img/sosna.jfif", 
            image2: "assets/img/sosna_igly.jpg", 
            desc: "Gatunek iglasty o bardzo małych wymaganiach glebowych, stanowiący ponad 60% drzew w Polsce. Jej palowy system korzeniowy potrafi sięgać bardzo głęboko w poszukiwaniu wody. Drewno sosnowe jest powszechne, trwałe i stanowi jeden z najważniejszych surowców budowlanych w Europie." 
        },
        { 
            category: "drzewa", name: "Świerk pospolity", latin: "Picea abies", 
            image: "assets/img/swierk.jpeg", 
            image2: "assets/img/swierk_ped.jpg", 
            desc: "Wysokie drzewo iglaste o zwartej, stożkowatej koronie. Dominujący gatunek w lasach górskich. Ze względu na płaski i płytki system korzeniowy jest niestety bardzo podatny na wywroty przez silne wiatry. Specjalnie cięte drewno świerkowe (rezonansowe) używane jest do budowy instrumentów muzycznych." 
        },
        { 
            category: "drzewa", name: "Modrzew europejski", latin: "Larix decidua", 
            image: "assets/img/modrzew.jpg", 
            image2: "assets/img/modrzew_ped.png", 
            desc: "Wyjątkowe drzewo iglaste, które jako jedyne w Polsce zrzuca swoje miękkie igły na zimę. Jesienią korony modrzewi przybierają piękną, intensywnie złocistą barwę. Jego drewno jest twarde, żywiczne i niesamowicie odporne na działanie wilgoci i wody." 
        },
        { 
            category: "drzewa", name: "Jodła pospolita", latin: "Abies alba", 
            image: "assets/img/jodla.jpg", 
            image2: "assets/img/jdola_ped.png", 
            desc: "Szlachetne drzewo iglaste występujące głównie na południu kraju. Wymaga czystego powietrza i dużej wilgotności otoczenia. W przeciwieństwie do świerka, szyszki jodły rosną pionowo do góry na najwyższych gałęziach i rozpadają się jeszcze na drzewie, pozostawiając jedynie sterczące trzpienie." 
        },
        { 
            category: "drzewa", name: "Cis pospolity", latin: "Taxus baccata", 
            image: "assets/img/cis.jpg", 
            image2: "assets/img/cis_ped.jpg", 
            desc: "Długowieczne, bardzo wolno rosnące drzewo, objęte ochroną w Polsce już za czasów króla Władysława Jagiełły. Dawniej jego niezwykle elastyczne drewno służyło do wyrobu doskonałych łuków. Ciekawostką jest, że cała roślina jest silnie trująca – z wyjątkiem czerwonej, słodkiej osnówki nasion." 
        },
        { 
            category: "drzewa", name: "Dąb szypułkowy", latin: "Quercus robur", 
            image: "assets/img/dab.webp", 
            image2: "assets/img/dab_ped.webp", 
            desc: "Symbol siły, potęgi i długowieczności. To najpotężniejsze drzewo liściaste w naszych lasach, którego najstarsze okazy dożywają niemal tysiąca lat. Jego owoce (żołędzie) stanowią kluczowy, bogaty w skrobię pokarm dla wielu zwierząt leśnych przed zbliżającą się zimą." 
        },
        { 
            category: "drzewa", name: "Buk zwyczajny", latin: "Fagus sylvatica", 
            image: "assets/img/buk.jpg", 
            image2: "assets/img/buk_liscie.jpg", 
            desc: "Łatwo go rozpoznać w lesie po potężnym pniu pokrytym idealnie gładką, popielato-szarą korą, która często przypomina skórę słonia. Wytwarza charakterystyczne owoce (bukwie) zamknięte w kolczastych miseczkach. Drewno bukowe jest ciężkie, bardzo twarde i powszechnie stosowane w meblarstwie." 
        },
        { 
            category: "drzewa", name: "Brzoza brodawkowata", latin: "Betula pendula", 
            image: "assets/img/brzoza.jpg", 
            image2: "assets/img/brzoza_pedy.jpg", 
            desc: "Klasyczny tzw. gatunek pionierski – jako jedno z pierwszych drzew zasiedla zręby, nieużytki i spalone tereny. Odróżnia się z daleka dzięki białej, łuszczącej się korze. Wczesną wiosną drzewo produkuje odżywczy sok (oskołę), wykorzystywany do celów leczniczych." 
        },
        { 
            category: "drzewa", name: "Grab pospolity", latin: "Carpinus betulus", 
            image: "assets/img/grab.jpg", 
            image2: "assets/img/grab_liscie.webp", 
            desc: "Drzewo cienioznośne, często tworzące niższe, gęste piętro pod dębami w lasach liściastych. Posiada najtwardsze i najcięższe drewno ze wszystkich polskich drzew. Ze względu na świetną tolerancję przycinania od wieków używa się go do tworzenia naturalnych żywopłotów." 
        },
        { 
            category: "drzewa", name: "Olsza czarna", latin: "Alnus glutinosa", 
            image: "assets/img/olsza.jpg", 
            image2: "assets/img/olsza_pedy.jpg", 
            desc: "Drzewo ściśle związane ze środowiskiem podmokłym. Na jej korzeniach żyją pożyteczne bakterie wiążące azot z powietrza. Cechą charakterystyczną drewna olchowego jest to, że po świeżym ścięciu zabarwia się na rdzawo-pomarańczowo, a w pełni zanurzone w wodzie staje się niemal niezniszczalne." 
        },

        // Krzewy 
        { category: "krzewy", name: "Jałowiec pospolity", latin: "Juniperus communis", image: "assets/img/jalowiec1.jpg", image2:"assets/img/jalowiec-pedy.jpg", desc: "Krzew iglasty lubiący pełne nasłonecznienie i lekkie, piaszczyste gleby borów sosnowych. Rozwija się powoli. Jego granatowe szyszkojagody potrzebują aż dwóch lat do dojrzewania i stanowią wyśmienitą, aromatyczną przyprawę w tradycyjnej kuchni polskiej." },
        { category: "krzewy", name: "Kruszyna pospolita", latin: "Frangula alnus", image: "assets/img/kruszyna1.jpg", image2: "assets/img/kruszyna-pedy.webp", desc: "Niepozorny krzew liściasty. Jego nazwa wywodzi się stąd, że drewno jest niezwykle kruche i łatwo się łamie. W przeszłości kora kruszyny była cenionym i często stosowanym surowcem w ziołolecznictwie, głównie jako naturalny środek przeczyszczający." },
        { category: "krzewy", name: "Czarny bez", latin: "Sambucus nigra", image: "assets/img/czarny-bez1.jfif", image2: "assets/img/czarny-bez-pedy.jpg", desc: "Powszechny krzew rosnący na obrzeżach lasów, przy drogach i w pobliżu zabudowań. Na początku lata kwitnie obfitymi, kremowymi baldachami kwiatów, z których robi się aromatyczne syropy. Jesienią wydaje ciemnofioletowe owoce, bogate w witaminy, stosowane przy przeziębieniach." },

        //rosliny
        { category: "rosliny", name: "Zawilec gajowy", latin: "Anemone nemorosa", image: "assets/img/zawilec1.jpg", image2: "assets/img/zawilec2.jpg", desc: "Pierwszy znak nadejścia prawdziwej wiosny w lasach liściastych. Zakwita masowo na biało w okresie, gdy drzewa nie zdążyły jeszcze wypuścić liści, wykorzystując maksymalną dawkę światła słonecznego padającego na puste dno lasu." },
        { category: "rosliny", name: "Przylaszczka pospolita", latin: "Hepatica nobilis", image: "assets/img/przylaszczka-pospolita.jpg", image2: "assets/img/przylaszczka2.jpg", desc: "Drobna, ale rzucająca się w oczy roślina rosnąca w lasach liściastych. Kwitnie bardzo wcześnie pięknym, niebiesko-fioletowym kolorem. Jej trójklapowe, zimozielone liście swoim kształtem przypominały zielarzom ludzką wątrobę, stąd łacińska nazwa 'Hepatica'." },
        // Grzyby
        { category: "grzyby", name: "Podgrzybek brunatny", latin: "Imleria badia", image: "assets/img/podgrzybek1.jpg", image2: "assets/img/podgrzybek2.jpg", desc: "Należy do najczęściej zbieranych grzybów jadalnych. Najlepiej rozwija się w borach iglastych na mchu. Charakterystyczną cechą rozpoznawczą podgrzybka jest to, że bladożółte rurki pod jego kapeluszem błyskawicznie sinieją po lekkim uciśnięciu palcem." },
        { category: "grzyby", name: "Pieprznik jadalny (Kurka)", latin: "Cantharellus cibarius", image: "assets/img/pieperznik1.jpg", image2: "assets/img/pieprznik2.webp", desc: "Jaskrawożółty grzyb o falistym brzegu kapelusza, często zbierany na kulinarny eksport. Wyróżnia się lekko pieprzowym zapachem (stąd nazwa). Grzybiarze bardzo ją cenią, ponieważ dzięki naturalnym substancjom odstraszającym niemal nigdy nie ulega robaczywieniu." },
        { category: "grzyby", name: "Muchomor czerwony", latin: "Amanita muscaria", image: "assets/img/muchomor1.webp", image2: "assets/img/muchomor2.jpg", desc: "Ikona leśnego poszycia i najczęściej ilustrowany grzyb na świecie. Jego wściekle czerwony kapelusz pokryty białymi łuseczkami to wyraźny sygnał ostrzegawczy natury – owocnik zawiera toksyny wywołujące ciężkie zatrucia i działające halucynogennie na układ nerwowy." }
    ];

    //fauna
    const faunaData = [
        // duze ssaki
        { category: "duze-ssaki", name: "Żubr europejski", latin: "Bison bonasus", image: "assets/img/zubr_eur.jpg", image2: null, desc: "Prawdziwy król puszczy i największy obecnie żyjący ssak lądowy w Europie. Po I wojnie światowej gatunek ten niemal wyginął na wolności, jednak ogromny wysiłek przyrodników pozwolił przywrócić dzikie stada, których ostoją jest dziś m.in. Puszcza Białowieska." },
        { category: "duze-ssaki", name: "Wilk szary", latin: "Canis lupus", image: "assets/img/wilk szary.webp", image2: "assets/img/wilk szary.avif", desc: "Znakomicie zorganizowany drapieżnik, żyjący w grupach rodzinnych zwanych watahami. Są zwierzętami bardzo terytorialnymi, a ich wycie służy do integracji stada i oznaczania granic. Odgrywają kluczową, pozytywną rolę w ekosystemie poprzez naturalną regulację populacji jeleniowatych i dzików." },
        { category: "duze-ssaki", name: "Ryś euroazjatycki", latin: "Lynx lynx", image: "assets/img/rys_zima.jpg", image2: "assets/img/ryś i sarna 009.jpg", desc: "Największy dziki kot żyjący w naszych lasach. Poznasz go po krótkim, jakby uciętym ogonie, gęstym, cętkowanym futrze oraz długich pędzelkach czarnych włosów na uszach, które wyostrzają słuch. Ryś poluje z zasadzki, wykorzystując doskonały wzrok i ogromne skoki, aby dopaść ofiarę, najczęściej sarnę." },
        { category: "duze-ssaki", name: "Jeleń szlachetny", latin: "Cervus elaphus", image: "assets/img/jelen-szlachetny1-900x900.jpg", image2: "assets/img/jelen2.webp", desc: "Większy i bardziej majestatyczny od pospolitej sarny. Dorosłe byki (samce) co roku pod koniec zimy zrzucają swoje poroże, które w ciągu lata odrasta na nowo, by jesienią służyć do zaciętych walk w okresie godowym zwanym rykowiskiem. Bieg w galopie jelenia robi niesamowite wrażenie." },
        { category: "duze-ssaki", name: "Łoś euroazjatycki", latin: "Alces alces", image: "assets/img/Los-euroazjatycki.jpg", image2: "assets/img/los2.jpg", desc: "Potężny, najwyższy przedstawiciel jeleniowatych o bardzo długich nogach, które ułatwiają mu przemieszczanie się po głębokich bagnach. Łosie uwielbiają tereny podmokłe. Są doskonałymi pływakami i potrafią zanurkować głową pod wodę, by skubać bogatą w sód roślinność wodną." },
        { category: "duze-ssaki", name: "Dzik euroazjatycki", latin: "Sus scrofa", image: "assets/img/dzik1.jpg", image2: "assets/img/dzik2.jpg", desc: "Zwierzę niezwykle inteligentne i pożyteczne. Dziki żyją w watahach kierowanych przez najstarszą samicę (lochę). Przeorując twardym gwizdem (pyskiem) ściółkę w poszukiwaniu korzonków i owadów, mieszają glebę, ułatwiając nasionom drzew kiełkowanie i niszcząc szkodniki zagrażające lasowi." },

        //srednie ssaki
        { category: "male-ssaki", name: "Lis rudy", latin: "Vulpes vulpes", image: "assets/img/lis.webp", image2: "assets/img/lis2.jpg", desc: "Powszechny i bardzo sprytny drapieżnik o pięknym, puszystym ogonie, tzw. kicie. Choć lis uważany jest za myśliwego łowiącego myszy, zające i ptaki, w rzeczywistości jest wszystkożerny. W lecie znaczną część jego diety stanowią jagody, opadłe owoce i owady." },
        { category: "male-ssaki", name: "Borsuk europejski", latin: "Meles meles", image: "assets/img/borsuk_940x400.jpg", image2: "assets/img/borsuk2.jpg", desc: "Wybitny inżynier wśród ssaków. Kopie pod ziemią skomplikowane i obszerne nory, które mogą mieć wiele wejść. Borsuk słynie z czystości – jako jeden z nielicznych zwierzaków buduje z dala od sypialni specjalne 'latryny'. Zimą zapada w przerywany sen zimowy, budząc się w cieplejsze dni." },
        { category: "male-ssaki", name: "Wiewiórka pospolita", latin: "Sciurus vulgaris", image: "assets/img/Wiewiorka-pospolita.webp", image2: "assets/img/wiewiroka2.jfif", desc: "Zwinna akrobatka koron drzew. Jej puszysty ogon nie tylko ułatwia sterowanie w powietrzu podczas długich skoków, ale i służy za ciepły 'koc' podczas snu. Zakopując nasiona i orzechy pod ziemią na zimowe zapasy, z których wielu potem nie odnajduje, nieświadomie przyczynia się do zalesiania." },
        { category: "male-ssaki", name: "Jeż zachodni / wschodni", latin: "Erinaceus", image: "assets/img/jez.jpg", image2: "assets/img/jez2.jfif", desc: "Najpopularniejszy ssak owadożerny w Polsce, który jako mechanizm obronny zwija się w ciasną kolczastą kulkę. Jeże patrolują dno lasu wyłącznie nocą, szukając dżdżownic, owadów i ślimaków. Podczas ciężkiej, zimowej hibernacji temperatura ich ciała spada niemal do zera stopni." },
        { category: "male-ssaki", name: "Kuna leśna", latin: "Martes martes", image: "assets/img/kuna.webp", image2: "assets/img/kuna2.jfif", desc: "Bardzo zwinny, sprytny ssak drapieżny przypominający nieco fretkę, z charakterystyczną, żółtawą plamą na podgardlu. Jest to zwierzę prowadzące wybitnie nadrzewny tryb życia, goniące w koronach drzew wiewiórki i plądrujące ptasie gniazda. Często za bazę obiera dziuple dzięciołów." },
        { category: "male-ssaki", name: "Popielica szara", latin: "Glis glis", image: "assets/img/popielica.jfif", image2: "assets/img/popielica2.jpg", desc: "Wyglądem przypomina małą, szarą wiewiórkę z puszystym ogonem. Jej nazwa rodzajowa w wielu językach odnosi się do faktu, że popielica przesypia w stanie ciągłej hibernacji aż 7 miesięcy w roku! Po przebudzeniu jest niezwykle żarłoczna i hałaśliwa." },

        // Ptaki
        { category: "ptaki", name: "Bielik zwyczajny", latin: "Haliaeetus albicilla", image: "assets/img/bielik.jfif", image2: "assets/img/bielik2.webp", desc: "Największy gnieżdżący się w Polsce ptak szponiasty, będący wzorcem dla naszego godła narodowego. Imponująca rozpiętość jego skrzydeł może sięgać niemal 2,5 metra. Żywi się głównie rybami oraz ptactwem wodnym, dlatego swoje wielkie gniazda buduje w starych lasach przy jeziorach." },
        { category: "ptaki", name: "Dzięcioł duży", latin: "Dendrocopos major", image: "assets/img/dzieciol-duzy.webp", image2: null, desc: "Prawdziwy architekt leśny. Używając potężnego dzioba wykuwa w obumarłych pniach korytarze i dziuple, z których po opuszczeniu przez dzięcioła korzystają mniejsze ptaki i ssaki. Specjalna budowa czaszki amortyzuje silne uderzenia dziobem o twarde drewno, chroniąc jego mózg przed wstrząsami." },
        { category: "ptaki", name: "Puszczyk zwyczajny", latin: "Strix aluco", image: "assets/img/puszczyk.webp", image2: "assets/img/puszczyk2.jfif", desc: "Sowa średniej wielkości, której niesamowicie cichy lot umożliwiają specjalnie postrzępione lotki rozpraszające wiatr. Charakteryzuje się brakiem 'uszatych' pęczków piór na głowie i czarnymi, przepastnymi oczami. Jej pohukiwanie jest jednym z najbardziej typowych dźwięków nocnego lasu." }
    ];