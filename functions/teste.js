function teste(qt = 6, num = [])
{
    if (qt < 6 && qt > 60)
    {
        throw new Error("Quantidade invalida")
    }

    if (num.length === qt)
    {
        return num
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1;
    if(!num.includes(numeroAleatorio)) {
        return teste(qt,[...num, numeroAleatorio])        
    } else {
        return teste(qt,num)        
    }
}

console.log(teste());