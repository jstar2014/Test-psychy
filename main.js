function wynik(){
    const wyniki={
        A:"Nie możesz spać w nocy",
        B:"Jesteś setty",
        C:"Nowy szamanfn",
        D:"Kociak",
        E:"Dotknij trawy",
        F:"SIGMA",
        G:"Normalny człowiek",
        H:"Nie będziesz piłkarzem",
        I:"BIG BRAIN",
        J:"Kalkulator",
        K:"Nie lubisz MIKU MIKU MI",
        L:"Clix jest tragiczny",
        M:"Zbyt często się raegujesz"
    }

    let A=0;
    let B=0;
    let C=0;
    let D=0;
    let E=0;
    let F=0;
    let G=0;
    let H=0;
    let I=0;
    let J=0;
    let K=0;
    let L=0;
    let M=0;
    

    const formularz= document.getElementById("formularz");
    const wynikP= document.getElementById("wynik");

    formularz.onsubmit=function(sprawdz){
        sprawdz.preventDefault();

    const p1=formularz.p1.value;
    const p2=formularz.p2.value;
    const p3=formularz.p3.value;
    const p4=formularz.p4.value;
    const p5=formularz.p5.value;

    if(p1=="a")A++;
    if(p1=="b")B++;
    if(p1=="c")D++;
    if(p1=="d")G++;
    if(p1=="e")K++;

    if(p2=="a")F++;
    if(p2=="b")L++;
    if(p2=="c")M++;
    if(p2=="d")D++;
    if(p2=="e")C++;
    if(p2=="f")M++;
    if(p2=="g")H++;

    if(p3=="a")I++;
    if(p3=="b")E++;
    if(p3=="c")J++;
    if(p3=="d")K++;

    if(p4=="a")F++;
    if(p4=="b")A++;
    if(p4=="c")M++;
    if(p4=="d")D++;

    if(p5=="a")I++;
    if(p5=="b")L++;
    if(p5=="c")B++;
    if(p5=="d")H++;
    if(p5=="e")M++;
    if(p5=="f")C++;

    let wynik="A";
    let max=A;

    if(B>max){
        wynik="B";
        max=B;
    }

    if(C>max){
        wynik="C";
        max=C;
    }

    if(D>max){
        wynik="D";
        max=D;
    }

    if(E>max){
        wynik="E";
        max=E;
    }

    if(F>max){
        wynik="F";
        max=F;
    }

    if(G>max){
        wynik="G";
        max=G;
    }

    if(H>max){
        wynik="H";
        max=H;
    }

    if(I>max){
        wynik="I";
        max=I;
    }

    if(J>max){
        wynik="J";
        max=J;
    }

    if(K>max){
        wynik="K";
        max=K;
    }

    if(L>max){
        wynik="L";
        max=L;
    }

    if(M>max){
        wynik="M";
        max=M;
    }

    wynikP.innerHTML=wyniki[wynik];

};
}