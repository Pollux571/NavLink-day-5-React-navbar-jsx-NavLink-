h// 7 ders

function welcome(){
    return <h1>Hello, It-Kamustra</h1>;
}
          //yukardaki ve asagdaki ayni seyler ama farkli yazilim!!
const welcome = () =>{
     return <h1>hello, It-kamustra</h1>;

     //eger h1 return yaninda yazmasaydik soyle yazardik asadagi ornekte oldugu gibi.
}

const welcome1 = () =>{
          return (
          <h1>hello, It-kamustra</h1>
          )
          //return asagisindan yazinca () acmak zorundayiz.

}

//bide bir html taginin Component olarak alabiriz. ama harf degistirerek. yoksa aynisi olursa hata aliriz

//or:

function Header(){
    return(
        <div>
            <a>Home</a>
            <a>News feed</a>
            <a>Message</a>
        </div>
    )
}

// NOT :REACT Componentler hic bir zaman function gibi cagrilmaz ornek ismleri yukarda oldugu gibi "header "  her hangi bir hmtl taginin icince "<header /> = JSX" olarak cagirilir.


