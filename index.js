const search=()=>{


    const searchBox=document.getElementById("dd").value.toUpperCase() /// box 
    const storeitem=document.getElementById("frt")    //  parent id 
    const card=document.querySelectorAll(".card") //  selct all common item so use queryselectall
    const musicname=storeitem.getElementsByTagName("h6")  // item music names



    for(i=0;i<musicname.length;i++){
        let match=card[i].getElementsByTagName("h6")[0];  /// in match includes card and its heading h6



        if(match){  //  card and h6
            let textvalue=match.textContent||match.innerHTML    //  textvalue hold match.textcontent the textconent hold h6  and innerhtml also hold h6   text valuye hold  card and h6 present inside of that card


            if(textvalue.toUpperCase().indexOf(searchBox)>-1){    //   main point is here its is the method too connect textvalue (h6) with use input in searchbox     //   textvalue.touppercase means equal it with searchbox  search box also type in upper case and this also in uppercase
             
                card[i].style.display="";  /// display

            }else{
                card[i].style.display="none"  //  if th textvalue too upper vase indexof is not true it cannot display
            }
        }




    }


}