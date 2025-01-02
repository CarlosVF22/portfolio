import React from "react";
import { InlineWidget } from "react-calendly";

export default function Calendly() {
    return (
        <>
            <InlineWidget
                url="https://calendly.com/cevasquezf22/15min"
                styles={{
                    height: "1000px",
                }}
            />
        </>
    );
}
