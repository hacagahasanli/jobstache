const DollarSign = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
        <path d="M451 863h55v-52q61-7 95-37.5t34-81.5q0-51-29-83t-98-61q-58-24-84-43t-26-51q0-31 22.5-49t61.5-18q30 0 52 14t37 42l48-23q-17-35-45-55t-66-24v-51h-55v51q-51 7-80.5 37.5T343 454q0 49 30 78t90 54q67 28 92 50.5t25 55.5q0 32-26.5 51.5T487 763q-39 0-69.5-22T375 681l-51 17q21 46 51.5 72.5T451 809v54Zm29 113q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
    </svg>
}

const LocationSign = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
        <path d="M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 897q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897Zm.5 67q-6.5 0-12.5-2t-11-6Q308 825 234 713.106 160 601.211 160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 97-74 209T503 956q-5 4-10.5 6t-12 2Zm-.5-460Z" />
    </svg>
}

export const Icon = ({ name }) => {
    const ICONS = {
        "location": LocationSign,
        "dollar": DollarSign
    }
    return ICONS[name]
}