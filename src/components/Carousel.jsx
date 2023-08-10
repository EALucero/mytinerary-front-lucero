import Arrow from "./Arrow";
import CardPolaroid from "./CardPolaroid";
import { useState } from "react";

export default function Carrousel({ data }) {
    let [ counter, setCounter ] = useState(0);
    let [ counterTo, setCounterTo ] = useState(4)
    
    function next_slide() {
        if (data.length === counterTo) {
            setCounter(0);
            setCounterTo(4);
        } else {
            setCounter(counter + 4);
            setCounterTo(counterTo + 4);
        }   
    }

    function prev_slide() {
        if (counter <= 0) {
            setCounter(data.length - 4);
            setCounterTo(data.length);
        } else {
            setCounter(counter - 4);
            setCounterTo(counterTo - 4);
        }   
    }

    return (
        <div className="flex justify-center items-center">
            <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide} />
            <div className="flex w-11/12 flex-wrap justify-center mt-5">
                {data.slice(counter, counterTo).map((e, i) => (
                    <CardPolaroid
                        key={i}
                        src={e.photo? e.photo : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"}
                        alt={e.id}
                        text={e.city}
                        id={e.id}
                    />
                ))}
            </div>
            <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
        </div>
    )
}