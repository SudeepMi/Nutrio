import React from 'react'

function Loading({ loading }) {
    return (
        loading && <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto" }}
                width="203px" height="203px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="translate(50,50)">
                    <g transform="scale(0.44)">
                        <circle cx="0" cy="0" r="50" fill="#eaaf84"></circle>
                        <circle cx="0" cy="-20" r="5" fill="#512c05">
                            <animateTransform attributeName="transform" type="rotate" dur="0.8264462809917356s" repeatCount="indefinite" keyTimes="0;1" values="0 0 0;360 0 0"></animateTransform>
                        </circle>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Loading