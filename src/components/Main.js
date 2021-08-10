import React, { useEffect, useState } from 'react'
import Header from './Header'
import randomWords from 'random-words';

const data = {
    levi: {
        ime: "#1",
        cena: 2000,
        slika: `${process.env.PUBLIC_URL}/assets/test-images/1.jpg`
    },
    desni: {
        ime: "#2",
        cena: 2500,
        slika: `${process.env.PUBLIC_URL}/assets/test-images/2.jpg`
    }
}

function Main() {

    const [levi, setLevi] = useState({});
    const [desni, setDesni] = useState({});
    const [showPrice, setShowPrice] = useState(false);
    const [leftPriceColor, setleftPriceColor] = useState("red");
    const [rightPriceColor, setrightPriceColor] = useState("red");

    const timeout = (delay) => {
        return new Promise( res => setTimeout(res, delay) );
    }

    const comparePrice = (priceOne, priceTwo) => {
        return priceOne > priceTwo ? 0 : 1;
    }

    const makeCSS = (moreExpensive) => {
        switch (moreExpensive) {
            case 0:
                setleftPriceColor("green");
                setrightPriceColor("red");
                break;
            case 1:
                setleftPriceColor("red");
                setrightPriceColor("green");
                break;
        }
    }

    useEffect(() => {
        setLevi(data.levi);
        setDesni(data.desni);
    }, []);

    const pressOne = async () => {
        const moreExpensive = comparePrice(levi.cena, desni.cena);
        makeCSS(moreExpensive);
        if (moreExpensive === 0) {
            setShowPrice(true);
            await timeout(3500);
            console.log("ASD");
        } else {
            setShowPrice(true);
            await timeout(3500);
            console.log("ASD");
        }
    }
    const pressTwo = async () => {
        console.log(randomWords());
        const moreExpensive = comparePrice(levi.cena, desni.cena);
        makeCSS(moreExpensive);
        if (moreExpensive === 1) {
            setShowPrice(true);
            await timeout(3500);
            console.log("ASD");
        } else {
            setShowPrice(true);
            await timeout(3500);
            console.log("ASD");
        }
    }

    return (
        <div>
            <Header />
            <div className="flex min-h-full h-full">
                <div onClick={pressOne} className="w-1/2 flex-col h-screen">
                    <p className="text-center text-4xl">{levi.ime}</p>
                    <div className="m-auto">
                        <img className="w-96 p-4" src={levi.slika} alt="slika" />
                    </div>
                    <p style={{ backgroundColor: leftPriceColor, color: "white" }} hidden={!showPrice} className="p-2 text-center text-4xl">{levi.cena}</p>
                </div>
                <div onClick={pressTwo} className=" w-1/2 flex-col h-screen">
                    <p className="text-center text-4xl">{desni.ime}</p>
                    <div className="m-auto">
                        <img className="w-96 p-4" src={desni.slika} alt="slika" />
                    </div>
                    <p style={{ backgroundColor: rightPriceColor, color: "white" }} hidden={!showPrice} className="p-2 text-center text-4xl">{desni.cena}</p>
                </div>
            </div>

        </div>
    )
}

export default Main
