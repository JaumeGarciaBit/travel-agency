
const m_nightPrice = 60;

function CalcularCosteHotel(nights)
{
    return nights * m_nightPrice;
}
function CalcularCosteAvion(city)
{
    switch(city)
    {
        case "Paris":
            return 180;
        case "Boston":
            return 600;
        case "Londres":
            return 120;
    }
}

const m_carCostPerDay=40;
const m_carDiscount3Days=20;
const m_carDiscount7Days = 50;

let m_discount = 0;
function CalcularCosteCoche(days)
{
    m_discount =0;

    if(days >6)
        m_discount = m_carDiscount7Days;
    else if (days >2)
        m_discount = m_carDiscount3Days;
    
    return (days * 40 - m_discount);
}

function CalcularCosteViaje(hotelNights, city, carDays)
{
    return (CalcularCosteHotel(hotelNights) + CalcularCosteAvion(city) + CalcularCosteCoche(carDays));
}

function GetRadiusCheckValue(radios)
{
    for (var i = 0; i < radios.length; i++)
        if(radios[i].checked)
            return radios[i].value;
}

function Execute()
{
    let l_night = document.getElementById("night").value;
    let l_day = document.getElementById("day").value;
    
    var l_radios = document.getElementsByName('city');
    let l_city = GetRadiusCheckValue(l_radios);

    //Check for all values inputed
    if(l_night =="" || l_day=="" || l_city=="")
        return;
    
    let l_hotelCost = CalcularCosteHotel(l_night);
    let l_flyCost = CalcularCosteAvion(l_city);
    let l_carCost = CalcularCosteCoche(l_day);

    let l_text= `Coste hotel: ${l_night} noches x ${m_nightPrice}e/noche = ${l_hotelCost}e <br>
    Coste avión: ${l_flyCost}e <br>
    Coste coche: ${l_day} días x ${m_carCostPerDay}e/día - ${m_discount} = ${l_carCost}e <br> <hr>
    Coste total: ${CalcularCosteViaje(l_night, l_city, l_day)}e`;
    
    document.getElementById("answer").innerHTML = l_text;
}